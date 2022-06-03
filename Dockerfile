FROM node:16-alpine as dependencies

WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm ci --production

FROM gcr.io/distroless/nodejs:16

COPY --chown=nonroot:nonroot ./dist /home/nonroot/dist
COPY --chown=nonroot:nonroot ./package.json ./package-lock.json /home/nonroot/
COPY --chown=nonroot:nonroot --from=dependencies /app/node_modules /home/nonroot/node_modules

USER nonroot
WORKDIR /home/nonroot

EXPOSE 3000

CMD ["-r", "dist/main"]

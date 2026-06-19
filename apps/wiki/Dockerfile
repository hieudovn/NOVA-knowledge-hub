FROM node:22-alpine AS build

WORKDIR /app

COPY apps/wiki/package*.json ./apps/wiki/
WORKDIR /app/apps/wiki
RUN npm ci

WORKDIR /app
COPY content ./content
COPY apps/wiki ./apps/wiki

WORKDIR /app/apps/wiki
RUN npm run build

FROM nginx:1.27-alpine

COPY --from=build /app/apps/wiki/build /usr/share/nginx/html

EXPOSE 80

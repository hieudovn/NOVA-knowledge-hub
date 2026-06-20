FROM node:20-alpine AS build

WORKDIR /app

COPY apps/wiki/package*.json ./apps/wiki/
WORKDIR /app/apps/wiki
RUN npm ci

WORKDIR /app
COPY content ./content
COPY apps/wiki ./apps/wiki

WORKDIR /app/apps/wiki
RUN npm run build

FROM node:20-alpine AS runtime

WORKDIR /app/apps/wiki

ENV NODE_ENV=production

COPY --from=build /app/apps/wiki/package*.json ./
COPY --from=build /app/apps/wiki/node_modules ./node_modules
COPY --from=build /app/apps/wiki/build ./build

EXPOSE 3000

CMD ["node", "node_modules/@docusaurus/core/bin/docusaurus.mjs", "serve", "--host", "0.0.0.0", "--port", "3000"]

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

FROM nginx:1.27-alpine AS runtime

COPY --from=build /app/apps/wiki/build /usr/share/nginx/html

RUN printf 'server {\n  listen 3000;\n  server_name _;\n  absolute_redirect off;\n  port_in_redirect off;\n  root /usr/share/nginx/html;\n  index index.html;\n\n  location / {\n    try_files $uri $uri/index.html $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

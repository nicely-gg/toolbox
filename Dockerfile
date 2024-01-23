FROM node:20.10.0-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.25.3-alpine-slim AS prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

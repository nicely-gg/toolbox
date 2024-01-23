FROM node:20.10.0-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY ./backend/package*.json ./backend/

RUN npm install --workspaces

COPY . .

RUN npm run build
RUN npm run -w ./backend build

FROM node:20.10.0-alpine AS production

WORKDIR /app

COPY package*.json ./
COPY ./backend/package*.json ./backend/
RUN npm install --omit=dev --workspaces

COPY --from=build /app/dist ./dist
COPY --from=build /app/backend/dist ./backend/dist

CMD ["npm", "start"]

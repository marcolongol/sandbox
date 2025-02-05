FROM node:slim as dev
WORKDIR /app
COPY . ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY apps/frontend ./apps/frontend
COPY libs ./libs
CMD ["pnpm", "nx", "serve", "frontend"]

FROM docker.io/nginx:stable-alpine as prod
COPY dist/apps/frontend/browser/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

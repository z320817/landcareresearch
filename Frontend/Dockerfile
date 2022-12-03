FROM node:18.12.1 as frontend
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=frontend /app/dist/newssearcher /var/www/html/newssearcher
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/newssearcher.conf /etc/nginx/conf.d/newssearcher.conf
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80/tcp
# build environment
FROM node:10.16.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install && npm cache clean --force
RUN npm run build --prod

# production environment
FROM nginx:1.13.9-alpine

RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d

COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/dist/appREST /usr/share/nginx/html
COPY docker-entry.sh /
RUN chmod +x /docker-entry.sh

EXPOSE 80
CMD ["/docker-entry.sh"]

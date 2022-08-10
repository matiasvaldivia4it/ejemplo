FROM nginx

RUN apt-get update -y
#WORKDIR /var/html/www
COPY ./www/ /usr/share/nginx/html
EXPOSE 80

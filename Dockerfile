FROM registry.dataos.io/nodejs/nodejs:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /start.sh
ADD . /datahub/raw/main/webapp
WORKDIR /datahub/raw/main/webapp

EXPOSE  9000
CMD ["/start.sh"]
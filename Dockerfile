FROM node:10.14.1 AS build

ARG ENVIRONMENT

ENV REACT_APP_ENVIRONMENT=$ENVIRONMENT
ENV PLATFORM_PATH="/tpt-platform"

WORKDIR $PLATFORM_PATH

COPY . $PLATFORM_PATH

RUN npm i --production
RUN npm run build

FROM nginx:1.15
LABEL description="Image for run Tereza Perez Tours API" version="1.0.0" maintainer="Dextra"

ENV PLATFORM_PATH="/tpt-platform"

WORKDIR $PLATFORM_PATH

COPY --from=build $PLATFORM_PATH/build $PLATFORM_PATH

COPY ./deploy/nginx.conf /etc/nginx
COPY ./deploy/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]

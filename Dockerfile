FROM node:15.2.0-alpine3.10

RUN apk add --no-cache --update \
    libwebp \
    libwebp-tools \
    libwebp-dev \
    ffmpeg \
    libwebp \
    postgresql \
    sudo \
    git \
    neofetch \
    libffi \
    libc-dev \
    gcc \
    libxslt-dev \
    libjpeg \
    libpng \
    libffi \
    libffi-dev \
    libc-dev \
    libxslt-dev \
    libjpeg-turbo-dev \
    python3 \
    python3-dev \
    chromium \
    chromium-chromedriver \
    py3-pip \
    bash \
    postgresql-dev \
    musl-dev

RUN git clone https://github.com/TOXIC-DEVIL/WhatsAlexa /root/WhatsAlexa
RUN mkdir /root/WhatsAlexa/bin/
WORKDIR /root/WhatsAlexa/

ENV TZ=Europe/Istanbul
RUN git clone https://github.com/TOXIC-DEVIL-ABHINAV/WhatsAlexa-Modules

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

CMD ["node", "bot.js"]

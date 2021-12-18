FROM fusuf/whatsasena:latest

RUN git clone https://github.com/this-is-official-toxy/999 /root/999
WORKDIR /root/999/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

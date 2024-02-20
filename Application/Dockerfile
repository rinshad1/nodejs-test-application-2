FROM node:13-alpine
RUN mkdir -p /home/app
COPY ./* /home/app/
WORKDIR /home/app
RUN npm install
RUN npm install chalk
CMD ["node", "index.js"]

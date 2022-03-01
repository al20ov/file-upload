FROM node:16-alpine

WORKDIR /app

COPY main.js package.json yarn.lock index.html /app/
RUN yarn

EXPOSE 8080

CMD [ "node", "main.js" ]

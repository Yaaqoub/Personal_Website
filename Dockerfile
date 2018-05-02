FROM node:8
RUN npm install
CMD node ./bin/www
EXPOSE 3000
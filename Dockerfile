FROM node:20-alpine
WORKDIR /expense-manager/
COPY . /expense-manager/
RUN npm install
CMD ["npm","start"]
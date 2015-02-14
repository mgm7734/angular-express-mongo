FROM dockerfile/nodejs-bower-grunt

RUN apt-get update \
    && apt-get install -y ruby \
    && rm -rf /var/lib/apt/lists/* \
    && gem install sass -v 3.4.11 --no-ri --no-rdoc

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN mkdir -p /node_modules \
    && ln -s /node_modules . \
    && npm install

COPY bower.json   /usr/src/app/
RUN bower install --allow-root

COPY . /usr/src/app/

EXPOSE 9000
CMD ["grunt", "serve"]
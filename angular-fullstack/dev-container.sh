#!/bin/bash
docker rm -f web
docker run --name=web -it -v /vagrant/angular-fullstack:/usr/src/app -p 9000:9000 --link db:db --rm fullstack-angular bash

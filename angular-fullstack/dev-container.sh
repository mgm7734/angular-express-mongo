#!/bin/bash
docker run -it -v /vagrant/angular-fullstack:/usr/src/app -p 9000:9000 --link db:db --rm fullstack-angular bash

# Dockerized angular-seed

## Build

    vagrant up
    vagrant docker-run app -- npm install

NOTE: 'vagrant up' might fail the first time: try again.    

## Useful Snippets

### ssh to dockerhost
    vagrant global-status|awk "/dockerhost/{print $1}"
    vagrant ssh <id from above>

### Enable symlinks in Virtualbox
    "C:\Program Files"\Oracle\VirtualBox\VBoxManage" setextradata dockerhost VBoxInternal2/SharedFoldersEnableSymlinksCreate/app 1
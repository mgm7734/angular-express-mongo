# Dockerized angular-seed

## Build

Symbolic links need to work, so you may need to run as Administrator on Windows. Otherwise pathis in npm_modules are too long.

    vagrant up

NOTE: 'vagrant up' might fail the first time: try again.    

## Useful Snippets

### ssh to dockerhost
    vagrant global-status|awk "/dockerhost/{print $1}"
    vagrant ssh <id from above>

### Enable symlinks in Virtualbox
    "C:\Program Files"\Oracle\VirtualBox\VBoxManage" setextradata dockerhost VBoxInternal2/SharedFoldersEnableSymlinksCreate/app 1

## See also

From https://github.com/DaftMonk/generator-angular-fullstack

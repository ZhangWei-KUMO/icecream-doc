#! /usr/bin/env bash
image=icecream:0.0.1
name=icecream
port=7600
docker stop $name
docker rm $name
rm package-lock.json
rm yarn.lock
rm -rf dist/

git pull origin master
yarn prod
docker build -t $image .
docker run --name $name -p $port:80 -d $image
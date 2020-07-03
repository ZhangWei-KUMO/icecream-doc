#! /usr/bin/env bash
image=icecream:0.0.1
name=icecream
port=7001
docker stop $name
docker rm $name
rm package-lock.json
rm yarn.lock
yarn
yarn clean
yarn prod
docker build -t $image .
docker run --name $name -p $port:80 -d $image
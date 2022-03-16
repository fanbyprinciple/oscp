#!/bin/bash

rm -rf ./index.html

wget $1

targets=($(grep http index.html | grep -v "www\.alibaba\.com" | awk -F "http" '{print $2}'  | awk -F "com" '{print $1}' | awk -F "//" '{print $2}' | awk -F " " '{print $1}'))

echo $targets

for target in $targets
do
    echo $target
done

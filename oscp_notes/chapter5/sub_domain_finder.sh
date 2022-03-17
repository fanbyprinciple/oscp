#!/bin/bash

rm -rf ./index.html

wget $1

targets=$(grep http index.html | grep -v "www\.alibaba\.com" | awk -F "http" '{print $2}'  | awk -F "com" '{print $1}' | awk -F "//" '{print $2}' | awk -F " " '{print $1}')

#echo $targets 

for target in $targets
do
    #echo ${target[-1]}
    len=${#target}-1
    echo $len
    last_char=${target:$len:1}

    echo $targetcom
    # if [ last_char -q '.' ]
    # then
    #     echo $target.com
    # else
    #     echo $target
    # fi
done

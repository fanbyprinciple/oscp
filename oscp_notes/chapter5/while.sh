#!/bin/bash
counter=1

while [ $counter -lt 10 ]
do
    echo "10.10.11.$counter"
    ((counter=counter+1))
done
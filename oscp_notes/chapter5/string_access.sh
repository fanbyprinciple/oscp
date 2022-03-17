#!/bin/bash

foo=string
for (( i=0; i<${#foo}; i++ )); do
  echo "${foo:$i:1}"
done
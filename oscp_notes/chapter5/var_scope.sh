#!/bin/bash

name1="Jon"
name2="Bismillah"

name_change () {
    local name1="Edward"
    echo "inside the function name1 is $name1 and name2 is $name2"
    name2="Lucas"
}

echo "before function call name1 is $name1 and name2 is $name2"

name_change 

echo "after function call name1 is $name1 and name2 is $name2"
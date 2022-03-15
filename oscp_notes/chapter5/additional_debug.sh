#!/bin/bash -x
var1=value1
echo $var1

var2=value2
echo $var2

$(var1=newvar1)
echo $var1

`var2=newvar2`
echo $var2

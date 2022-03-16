#!/bin/bash

pass_args () {
    counter=20
    echo "gonna return $counter"
    return $counter
}

echo "calling passs_args()"

pass_args
return_value=$?

echo "the value returned is $return_value"
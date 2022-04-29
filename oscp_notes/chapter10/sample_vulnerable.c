#include <stdio.h>
#include <string.h>

void win(){
    printf("You won!");
}

int main(int argc, char *argv[]){

    char bfr[64];
    if(argc < 2){
        printf("You need to input atleast one argument\n");
        return 1;
    } 

    strcpy(bfr, argv[1]);
    printf(bfr);

    return 0;

}


/*
gcc -mpreferred-stack-boundary=3 -ggdb -fno-stack-protector auth_overflow.c -o auth_overflow

installing gef - bash -c "$(wget https://gef.blah.cat/sh -O -)"

*/

#include <stdio.h>
#include <string.h>
#include <stdlib.h>


int check_authentication(char *password){
    int auth_flag = 0;
    char password_buffer[16];

    strcpy(password_buffer, password);

    if (strcmp(password_buffer, "ashwin")==0){
        auth_flag = 1;
    } 

    //printf("%d, %d", auth_flag, strcmp(password_buffer, "ashwin"));
    
    return auth_flag;
}

int main(int argc, char *argv[]) {
    if (argc < 2){
        printf("Usage: %s <password>\n", argv[0]);
        exit(0);
    }

    if(check_authentication(argv[1])){
        printf("\n-=-=-=-=-=-=-=-=-=-=-=-\n");
        printf("    Access Granted   ");
        printf("\n-=-=-=-=-=-=-=-=-=-=-=-\n");

    } else {
        printf("\n-=-=-= Access Denied. =-=-=-\n");
    }

}
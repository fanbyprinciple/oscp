#include <stdio.h>
#include <string.h>


int check_authentication(char *password){
    int auth_falg = 0;
    char passwordbuffer[16];

    strcpy(password_buffer, password);

    if (strcmp(password_buffer, "ashwin is nice")==0){
        auth_flag = 1;
    }
}

int main(int argc, char *argv[]) {
    if (argc < 2){
        printf("Usage: %s <password>\n", argv[0]);
        exit(0);
    }

    if(check_authentication(argv[1])){
        printf("\n-=-=-=-=-=-=-=-=-=-=-=-\n");
        printf("    Access Denied   ");
        printf("\n-=-=-=-=-=-=-=-=-=-=-=-\n");

    } else {
        printf("\n-=-=-= Access Denied. =-=-=-\n")
    }

}
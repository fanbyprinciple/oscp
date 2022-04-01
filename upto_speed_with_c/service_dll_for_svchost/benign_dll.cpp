// dllmain.cpp : Defines the entry point for the DLL application.
#include "pch.h"
#define _CRT_SECURE_NO_WARNINGS
#include <fstream>
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
using namespace std;

extern "C" __declspec(dllexport) void new_function() {
    fstream file;
    std::string name;
    srand(time(0));
    // opening file "Gfg.txt"
    // in out(write) mode
    // ios::out Open for output operations.
    //name =  rand() + "gfg.txt";
    
    file.open("gfg.txt", ios::out);

    // If no file is created, then
    // show the error message.
    if (!file)
    {
        cout << "Error in creating file!!!";

    }

    cout << "File created successfully.";

    // closing the file.
    // The reason you need to call close()
    // at the end of the loop is that trying
    // to open a new file without closing the
    // first file will fail.
    file.close();

}

BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    
    new_function();
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}


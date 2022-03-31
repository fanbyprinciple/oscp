// dllmain.cpp : Defines the entry point for the DLL application.
#include "pch.h"
#define _CRT_SECURE_NO_WARNINGS
#include <fstream>
#include <iostream>
using namespace std;

extern "C" __declspec(dllexport) void new_function(std::string name) {
    fstream file;

    // opening file "Gfg.txt"
    // in out(write) mode
    // ios::out Open for output operations.
    file.open(name , ios::out);

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


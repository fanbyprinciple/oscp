// dll_with_exports.cpp : Defines the exported functions for the DLL.
//

#include "pch.h"
#include "framework.h"
#include "dll_with_exports.h"
#include <stdio.h>
#include <windows.h>

// This is an example of an exported variable
DLLWITHEXPORTS_API int ndllwithexports=0;

// This is an example of an exported function.
DLLWITHEXPORTS_API int fndllwithexports(void)
{
    return 0;
}

DLLWITHEXPORTS_API void simple(void) {
    char buf[1024];
    int x = 5;
    snprintf(buf, 1024, "Variable x is equal to %d", x);
    LPCWSTR a = L"TestWindow";

    MessageBox(0, (LPCWSTR)buf, a, 0);
}

// This is the constructor of a class that has been exported.
Cdllwithexports::Cdllwithexports()
{
    return;
}

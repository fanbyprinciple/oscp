// dllmain.cpp : Defines the entry point for the DLL application.
#include "pch.h"
#include <stdio.h>
#include <windows.h>

extern __declspec(dllexport) void justwindow(void) {
    char buf[12];
    int x = 5;
    snprintf(buf, 12, "HelloWorld!", x);
    LPCWSTR a = L"TestWindow";
    LPCWSTR b = L"HelloWorld!";

    MessageBox(0, b, a, 0);
}

BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
        justwindow();
        printf("in DLL main");
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}

SERVICE_STATUS_HANDLE g_serviceStatusHandle = nullptr;

SERVICE_STATUS g_serviceStatus = {
    SERVICE_WIN32_SHARE_PROCESS,
    SERVICE_START_PENDING,
    SERVICE_ACCEPT_STOP | SERVICE_ACCEPT_SHUTDOWN | SERVICE_ACCEPT_PAUSE_CONTINUE
};

DWORD WINAPI HandlerEx(
    DWORD dwControl,
    DWORD dwEventType,
    LPVOID lpEventData,
    LPVOID lpContext
)
{
    switch (dwControl)
    {
    case SERVICE_CONTROL_STOP:
    case SERVICE_CONTROL_SHUTDOWN:
        g_serviceStatus.dwCurrentState = SERVICE_STOPPED;
        break;
    case SERVICE_CONTROL_PAUSE:
        g_serviceStatus.dwCurrentState = SERVICE_PAUSED;
        break;
    case SERVICE_CONTROL_CONTINUE:
        g_serviceStatus.dwCurrentState = SERVICE_RUNNING;
        break;
    case SERVICE_CONTROL_INTERROGATE:
        break;
    default:
        break;
    };

    SetServiceStatus(g_serviceStatusHandle, &g_serviceStatus);
    return NOERROR;
}

extern "C" __declspec(dllexport) VOID WINAPI ServiceMain(DWORD dwArgc, LPCWSTR * lpszArgv)
{
    g_serviceStatusHandle = RegisterServiceCtrlHandlerExW(L"EvilSvc", HandlerEx, nullptr);
    if (!g_serviceStatusHandle)
    {
        return;
    }

    g_serviceStatus.dwCurrentState = SERVICE_RUNNING;

    SetServiceStatus(g_serviceStatusHandle, &g_serviceStatus);
}
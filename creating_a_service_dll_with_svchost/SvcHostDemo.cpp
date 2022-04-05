#include "pch.h"
#include <windows.h>
#include <iostream>
#include <string>
#include <fstream>
#include <time.h>

#define SVCNAME TEXT("HelloSvc1")

using namespace std;

SERVICE_STATUS serviceStatus;
SERVICE_STATUS_HANDLE serviceStatusHandle;
HANDLE stopEvent = NULL;

VOID UpdateServiceStatus(DWORD currentState)
{
    serviceStatus.dwCurrentState = currentState;
    SetServiceStatus(serviceStatusHandle, &serviceStatus);
}

DWORD ServiceHandler(DWORD controlCode, DWORD eventType, LPVOID eventData, LPVOID context)
{
    switch (controlCode)
    {
    case SERVICE_CONTROL_STOP:
        serviceStatus.dwCurrentState = SERVICE_STOPPED;
        SetEvent(stopEvent);
        break;
    case SERVICE_CONTROL_SHUTDOWN:
        serviceStatus.dwCurrentState = SERVICE_STOPPED;
        SetEvent(stopEvent);
        break;
    case SERVICE_CONTROL_PAUSE:
        serviceStatus.dwCurrentState = SERVICE_PAUSED;
        break;
    case SERVICE_CONTROL_CONTINUE:
        serviceStatus.dwCurrentState = SERVICE_RUNNING;
        break;
    case SERVICE_CONTROL_INTERROGATE:
        break;
    default:
        break;
    }

    UpdateServiceStatus(SERVICE_RUNNING);

    return NO_ERROR;
}

VOID ExecuteServiceCode()
{
    stopEvent = CreateEvent(NULL, TRUE, FALSE, NULL);
    UpdateServiceStatus(SERVICE_RUNNING);

    // #####################################
    // persistence code here
    // #####################################
    //PCWSTR a = L"TestWindow";
    //LPCWSTR b = L"HelloWorld!";

    //MessageBox(0, b, a, 0);

    std::string valuesList[10] = { "value0", "value1", "value2","value3", "value4", "value5","value6", "value7","value8", "value9" };

    //open file for writing
    ofstream fw("c:\\SampleFile.txt", std::ofstream::out);

    int arraySize = sizeof(valuesList) / sizeof(valuesList[0]);

    if (fw.is_open()) {
        for (int i = 0; i < arraySize; i++) {
            fw << valuesList[i] << "\n";
            fw << "Seconds since January 1, 1970: "<< time(NULL) << "\n";
        }
        fw.close();
    }

    else cout << "Problem with opening a file";

    //  Simulate some work by sleeping
    Sleep(3000);

    while (1)
    {
        WaitForSingleObject(stopEvent, INFINITE);
        UpdateServiceStatus(SERVICE_STOPPED);
        return;
    }
}

extern "C" __declspec(dllexport) VOID WINAPI ServiceMain(DWORD argC, LPWSTR * argV)
{
    serviceStatusHandle = RegisterServiceCtrlHandler(SVCNAME, (LPHANDLER_FUNCTION)ServiceHandler);

    serviceStatus.dwServiceType = SERVICE_WIN32_SHARE_PROCESS;
    serviceStatus.dwServiceSpecificExitCode = 0;

    UpdateServiceStatus(SERVICE_START_PENDING);
    ExecuteServiceCode();
}
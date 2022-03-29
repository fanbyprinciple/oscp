# trying to use winapi

https://docs.microsoft.com/en-us/windows/win32/learnwin32/your-first-windows-program

failed : not running in dev cpp

### new.cpp

new.cpp creates a window, this works.

![](new.png)

## Introduction to windows service applications

Microsoft Windows services, formerly known as NT services, enable you to create long-running executable applications that run in their own Windows sessions. These services can be automatically started when the computer boots, can be paused and restarted, and do not show any user interface.

https://www.c-sharpcorner.com/article/create-windows-services-in-c-sharp/

failed : This also did not go according to plan.

## Creating a MFC appliCATION

Starting initial application:

![](./mfc/mfc_simple.png)

failed : It didnt work was too complicated. Did not work.

## working with SDL and C++

https://lazyfoo.net/tutorials/SDL/

Able to compile sdl

![](sdl_tut.png)

step 1. download SDL libs http://libsdl.org/download-2.0.php
step 2. you need to add the SDL include folder to the Visual C++ include directories. in properties.
step 3. The header file tells the compiler what the SDL functions are, not where to find them. The library file tells the compiler where they are and we need to tell it to use the SDL library file. Go to Configuration Properties -> Linker -> Additional Dependencies -> Edit. Add SDL2.lib and SDL2main.lib.
step 4. While we did tell Visual C++ to use the SDL library files, we didn't tell it where to find it. Add the library directory like you did the include directory. inside properties library directory add x64 lib folder.
step 5. This is because your application needs SDL2.dll to run but can't find it. Windows uses environment variables to define where to look for dll files. To edit the PATH environment variable, go into Windows Settings and search for edit the system environment variables.
x64 lib.

Need to give full path of image to be loaded.
Was able to load the image.

![](./sdl/weirdal.png)








/*      Steven Billington
        January 13, 2003
        May 26, 2003 - UPDATE
        RobotOGL.cpp
        rod@cprogramming.com
 
        The following program creates a window and then
        uses multiple OpenGL functions to display a
        animated robot constructed of different size
        cubes. To compile this code you must make the
        proper library links in project--->settings.
 
        I apologize for any amount of scattered code or
        mis-formatting that printing this may occur. Please
        feel free to email me at the address above for the .cpp
        file.
*/
 
/*      These are what we refer to as Pre-processor
        Directives. In order for certain functions in
        C++ to operate you must include certain header
        files. Each header file below contains different
        functions needed throughout this program.
*/
 
#pragma comment(linker, "/subsystem:windows")
 
#include <windows.h>
#include <gl/gl.h>
#include <gl/glu.h>
#include <gl/glaux.h>
 
/*      Here we find a few global variables. While
        i don't really like to use global variables,
        i found them very handy for this particular
        program. These variables will control angles,
        fullscreen, and the global device context.
*/
 
HDC g_HDC;
float angle = 0.0f;
float legAngle[2] = {0.0f, 0.0f};
float armAngle[2] = {0.0f, 0.0f};
bool fullScreen = false;
 
/*      Function:       DrawCube
        Purpose:        As the name would suggest, this is
                                the function for drawing the cubes.
*/
 
void DrawCube(float xPos, float yPos, float zPos)
{
        glPushMatrix();
        glBegin(GL_POLYGON);
 
                /*      This is the top face*/
                glVertex3f(0.0f, 0.0f, 0.0f);
                glVertex3f(0.0f, 0.0f, -1.0f);
                glVertex3f(-1.0f, 0.0f, -1.0f);
                glVertex3f(-1.0f, 0.0f, 0.0f);
 
                /*      This is the front face*/
                glVertex3f(0.0f, 0.0f, 0.0f);
                glVertex3f(-1.0f, 0.0f, 0.0f);
                glVertex3f(-1.0f, -1.0f, 0.0f);
                glVertex3f(0.0f, -1.0f, 0.0f);
 
                /*      This is the right face*/
                glVertex3f(0.0f, 0.0f, 0.0f);
                glVertex3f(0.0f, -1.0f, 0.0f);
                glVertex3f(0.0f, -1.0f, -1.0f);
                glVertex3f(0.0f, 0.0f, -1.0f);
 
                /*      This is the left face*/
                glVertex3f(-1.0f, 0.0f, 0.0f);
                glVertex3f(-1.0f, 0.0f, -1.0f);
                glVertex3f(-1.0f, -1.0f, -1.0f);
                glVertex3f(-1.0f, -1.0f, 0.0f);
 
                /*      This is the bottom face*/
                glVertex3f(0.0f, 0.0f, 0.0f);
                glVertex3f(0.0f, -1.0f, -1.0f);
                glVertex3f(-1.0f, -1.0f, -1.0f);
                glVertex3f(-1.0f, -1.0f, 0.0f);
 
                /*      This is the back face*/
                glVertex3f(0.0f, 0.0f, 0.0f);
                glVertex3f(-1.0f, 0.0f, -1.0f);
                glVertex3f(-1.0f, -1.0f, -1.0f);
                glVertex3f(0.0f, -1.0f, -1.0f);
 
        glEnd();
        glPopMatrix();
}
 
/*      Function:       DrawArm
        Purpose:        This function draws the arm
                                for the robot.
*/
 
void DrawArm(float xPos, float yPos, float zPos)
{
        glPushMatrix();
 
                /*      Sets color to red*/
                glColor3f(1.0f, 0.0f, 0.0f);
                glTranslatef(xPos, yPos, zPos);
 
                /*      Creates 1 x 4 x 1 cube*/
                glScalef(1.0f, 4.0f, 1.0f);
                DrawCube(0.0f, 0.0f, 0.0f);
 
        glPopMatrix();
}
 
/*      Function:       DrawHead
        Purpose:        This function will create the
                                head for the robot.
*/
 
void DrawHead(float xPos, float yPos, float zPos)
{
        glPushMatrix();
 
                /*      Sets color to white*/
                glColor3f(1.0f, 1.0f, 1.0f);
                glTranslatef(xPos, yPos, zPos);
 
                /*      Creates 2 x 2 x 2 cube*/
                glScalef(2.0f, 2.0f, 2.0f);
                DrawCube(0.0f, 0.0f, 0.0f);
 
        glPopMatrix();
}
 
/*      Function:       DrawTorso
        Purpose:        Function will do as suggested
                                and draw a torso for our robot.
*/
 
void DrawTorso(float xPos, float yPos, float zPos)
{
        glPushMatrix();
 
                /*      Sets color to blue*/
                glColor3f(0.0f, 0.0f, 1.0f);
                glTranslatef(xPos, yPos, zPos);
 
                /*      Creates 3 x 5 x 1 cube*/
                glScalef(3.0f, 5.0f, 1.0f);
                DrawCube(0.0f, 0.0f, 0.0f);
 
        glPopMatrix();
}
 
/*      Function:       DrawLeg
        Purpose:        Not to sound repetitve, but as suggested
                                this function will draw our robots legs.
*/
 
void DrawLeg(float xPos, float yPos, float zPos)
{
        glPushMatrix();
 
                /*      Sets color to yellow*/
                glColor3f(1.0f, 1.0f, 0.0f);
                glTranslatef(xPos, yPos, zPos);
 
                /*      Creates 1 x 5 x 1 cube*/
                glScalef(1.0f, 5.0f, 1.0f);
                DrawCube(0.0f, 0.0f, 0.0f);
 
        glPopMatrix();
}
 
/*      Function:       DrawRobot
        Purpose:        Function to draw our entire robot
*/
 
void DrawRobot(float xPos, float yPos, float zPos)
{
        /*      Variables for state of robots legs. True
                means the leg is forward, and False means
                the leg is back. The same applies to the
                robots arm states.
        */
        static bool leg1 = true;
        static bool leg2 = false;
        static bool arm1 = true;
        static bool arm2 = false;
 
        glPushMatrix();
 
                /*      This will draw our robot at the
                        desired coordinates.
                */
                glTranslatef(xPos, yPos, zPos);
 
                /*      These three lines will draw the
                        various components of our robot.
                */
                DrawHead(1.0f, 2.0f, 0.0f);
                DrawTorso(1.5f, 0.0f, 0.0f);
                glPushMatrix();
 
 
                /*      If the arm is moving forward we will increase
                        the angle; otherwise, we will decrease the
                        angle.
                */
                if (arm1)
                {
                        armAngle[0] = armAngle[0] + 1.0f;
                }
                else
                {
                        armAngle[0] = armAngle[0] - 1.0f;
                }
 
                /*      Once the arm has reached its max angle
                        in one direction, we want it to reverse
                        and change direction.
                */
                if (armAngle[0] >= 15.0f)
                {
                        arm1 = false;
                }
                if (armAngle[0] <= 15.0f)
                {
                        arm1 = true;
                }
 
 
                /*      Here we are going to move the arm away
                        from the torso and rotate. This will
                        create a walking effect.
                */
                glTranslatef(0.0f, -0.5f, 0.0f);
                glRotatef(armAngle[0], 1.0f, 0.0f, 0.0f);
                DrawArm(2.5f, 0.0f, -0.5f);
 
        glPopMatrix();
 
        glPushMatrix();
 
 
                /*      If the arm is moving forward we will increase
                        the angle, otherwise we will decrease the
                        angle
                */
                if (arm2)
                {
                        armAngle[1] = armAngle[1] + 1.0f;
                }
                else
                {
                        armAngle[1] = armAngle[1] - 1.0f;
                }
 
                /*      Here we are going to move the arm away
                        from the torso and rotate. This will
                        create a walking effect.
                */
                glTranslatef(0.0f, -0.5f, 0.0f);
                glRotatef(armAngle[1], 1.0f, 0.0f, 0.0f);
                DrawArm(-1.5f, 0.0f, -0.5f);
 
        glPopMatrix();
 
        /*      Now its time to rotate the legs relative to the
                robots position in the world, this is the first
                leg, ie the right one.
        */
        glPushMatrix();
 
                /*      If the leg is moving forward we will increase
                        the angle; otherwise, we will decrease the
                        angle.
                */
                if (leg1)
                {
                        legAngle[0] = legAngle[0] + 1.0f;
                }
                else
                {
                        legAngle[0] = legAngle[0] - 1.0f;
                }
 
                /*      Once the leg has reached its max angle
                        in one direction, we want it to reverse
                        and change direction.
                */
                if (legAngle[0] >= 15.0f)
                {
                        leg1 = false;
                }
                if (legAngle[0] <= -15.0f)
                {
                        leg1 = true;
                }
 
 
                /*      Here we are going to move the leg away
                        from the torso and rotate. This will
                        create a walking effect.
                */
                glTranslatef(0.0f, -0.5f, 0.0f);
                glRotatef(legAngle[0], 1.0f, 0.0f, 0.0f);
 
 
                /*      Time to draw the leg.
                */
                DrawLeg(-0.5f, -5.0f, -0.5f);
 
        glPopMatrix();
 
        /*      Same as above, for the left leg.
        */
        glPushMatrix();
 
                /*      If the leg is moving forward we will increase
                        the angle, otherwise we will decrease the
                        angle
                */
                if (leg2)
                {
                        legAngle[1] = legAngle[1] + 1.0f;
                }
                else
                {
                        legAngle[1] = legAngle[1] - 1.0f;
                }
 
                /*      Once the leg has reached its max angle
                        in one direction, we want it to reverse
                        and change direction.
                */
                if (legAngle[1] >= 15.0f)
                {
                        leg2 = false;
                }
                if (legAngle[1] <= -15.0f)
                {
                        leg2 = true;
                }
 
                /*      Here we are going to move the leg away
                        from the torso and rotate. This will
                        create a walking effect.
                */
                glTranslatef(0.0f, -0.5f, 0.0f);
                glRotatef(legAngle[1], 1.0f, 0.0f, 0.0f);
                DrawLeg(1.5f, -5.0f, -0.5f);
 
        glPopMatrix();
 
        glPopMatrix();
 
}
 
/*      Function:       Render
        Purpose:        This function will be responsible
                                for the rendering, got to love my
                                descriptive function names : )
*/
void Render()
{
        /*      Enable depth testing
        */
        glEnable(GL_DEPTH_TEST);
 
        /*      Heres our rendering. Clears the screen
                to black, clear the color and depth
                buffers, and reset our modelview matrix.
        */
        glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        glLoadIdentity();
 
        /*      Increase rotation angle counter
        */
        angle = angle + 1.0f;
 
        /*      Reset after we have completed a circle
        */
        if (angle >= 360.0f)
        {
                angle = 0.0f;
        }
 
        glPushMatrix();
                glLoadIdentity();
 
                /*      Move to 0,0,-30 , rotate the robot on
                        its y axis, draw the robot, and dispose
                        of the current matrix.
                */
                glTranslatef(0.0f, 0.0f, -30.0f);
                glRotatef(angle, 0.0f, 1.0f, 0.0f);
                DrawRobot(0.0f, 0.0f, 0.0f);
        glPopMatrix();
 
        glFlush();
 
        /*      Bring back buffer to foreground
        */
        SwapBuffers(g_HDC);
}
 
//function to set the pixel format for the device context
/*      Function:       SetupPixelFormat
        Purpose:        This function will be responsible
                                for setting the pixel format for the
                                device context.
*/
void SetupPixelFormat(HDC hDC)
{
        /*      Pixel format index
        */
        int nPixelFormat;
 
        static PIXELFORMATDESCRIPTOR pfd = {
                sizeof(PIXELFORMATDESCRIPTOR),          //size of structure
                1,                                      //default version
                PFD_DRAW_TO_WINDOW |                    //window drawing support
                PFD_SUPPORT_OPENGL |                    //opengl support
                PFD_DOUBLEBUFFER,                       //double buffering support
                PFD_TYPE_RGBA,                          //RGBA color mode
                32,                                     //32 bit color mode
                0, 0, 0, 0, 0, 0,                       //ignore color bits
                0,                                      //no alpha buffer
                0,                                      //ignore shift bit
                0,                                      //no accumulation buffer
                0, 0, 0, 0,                             //ignore accumulation bits
                16,                                     //16 bit z-buffer size
                0,                                      //no stencil buffer
                0,                                      //no aux buffer
                PFD_MAIN_PLANE,                         //main drawing plane
                0,                                      //reserved
                0, 0, 0 };                              //layer masks ignored
 
                /*      Choose best matching format*/
                nPixelFormat = ChoosePixelFormat(hDC, &pfd);
 
                /*      Set the pixel format to the device context*/
                SetPixelFormat(hDC, nPixelFormat, &pfd);
}
 
/*      Windows Event Procedure Handler
*/
LRESULT CALLBACK WndProc(HWND hwnd, UINT message, WPARAM wParam, LPARAM lParam)
{
        /*      Rendering and Device Context
                variables are declared here.
        */
        static HGLRC hRC;
        static HDC hDC;
 
        /*      Width and Height for the
                window our robot is to be
                displayed in.
        */
        int width, height;
 
        switch(message)
        {
                case WM_CREATE: //window being created
 
                        hDC = GetDC(hwnd);  //get current windows device context
                        g_HDC = hDC;
                        SetupPixelFormat(hDC); //call our pixel format setup function
 
                        /*      Create rendering context and make it current
                        */
                        hRC = wglCreateContext(hDC);
                        wglMakeCurrent(hDC, hRC);
 
                        return 0;
                        break;
 
                case WM_CLOSE:  //window is closing
 
                        /*      Deselect rendering context and delete it*/
                        wglMakeCurrent(hDC, NULL);
                        wglDeleteContext(hRC);
 
                        /*      Send quit message to queue*/
                        PostQuitMessage(0);
 
                        return 0;
                        break;
 
                case WM_SIZE:
 
                        /*      Retrieve width and height*/
                        height = HIWORD(lParam);
                        width = LOWORD(lParam);
 
                        /*      Don't want a divide by 0*/
                        if (height == 0)
                        {
                                height = 1;
                        }
 
                        /*      Reset the viewport to new dimensions*/
                        glViewport(0, 0, width, height);
 
                        /*      Set current Matrix to projection*/
                        glMatrixMode(GL_PROJECTION);
                        glLoadIdentity(); //reset projection matrix
 
                        /*      Time to calculate aspect ratio of
                                our window.
                        */
                        gluPerspective(54.0f, (GLfloat)width/(GLfloat)height, 1.0f, 1000.0f);
 
                        glMatrixMode(GL_MODELVIEW); //set modelview matrix
                        glLoadIdentity(); //reset modelview matrix
 
                        return 0;
                        break;
 
                default:
 
                        break;
        }
 
        return (DefWindowProc(hwnd, message, wParam, lParam));
}
 
int APIENTRY WinMain(HINSTANCE hInstance,
                     HINSTANCE hPrevInstance,
                     LPSTR     lpCmdLine,
                     int       nCmdShow)
{
        WNDCLASSEX windowClass; //window class
        HWND    hwnd;                   //window handle
        MSG             msg;                    //message
        bool    done;                   //flag for completion of app
        DWORD   dwExStyle;              //window extended style
        DWORD   dwStyle;                //window style
        RECT    windowRect;
 
        /*      Screen/display attributes*/
        int width = 800;
        int height = 600;
        int bits = 32;
 
        windowRect.left =(long)0;               //set left value to 0
        windowRect.right =(long)width;  //set right value to requested width
        windowRect.top =(long)0;                //set top value to 0
        windowRect.bottom =(long)height;//set bottom value to requested height
 
        /*      Fill out the window class structure*/
        windowClass.cbSize                      = sizeof(WNDCLASSEX);
        windowClass.style                       = CS_HREDRAW | CS_VREDRAW;
        windowClass.lpfnWndProc         = WndProc;
        windowClass.cbClsExtra          = 0;
        windowClass.cbWndExtra          = 0;
        windowClass.hInstance           = hInstance;
        windowClass.hIcon                       = LoadIcon(NULL, IDI_APPLICATION);
        windowClass.hCursor                     = LoadCursor(NULL, IDC_ARROW);
        windowClass.hbrBackground       = NULL;
        windowClass.lpszMenuName        = NULL;
        windowClass.lpszClassName       = "MyClass";
        windowClass.hIconSm                     = LoadIcon(NULL, IDI_WINLOGO);
 
        /*      Register window class*/
        if (!RegisterClassEx(&windowClass))
        {
                return 0;
        }
 
        /*      Check if fullscreen is on*/
        if (fullScreen)
        {
                DEVMODE dmScreenSettings;
                memset(&dmScreenSettings, 0, sizeof(dmScreenSettings));
                dmScreenSettings.dmSize = sizeof(dmScreenSettings);
                dmScreenSettings.dmPelsWidth = width;   //screen width
                dmScreenSettings.dmPelsHeight = height; //screen height
                dmScreenSettings.dmBitsPerPel = bits;   //bits per pixel
                dmScreenSettings.dmFields = DM_BITSPERPEL | DM_PELSWIDTH | DM_PELSHEIGHT;
 
                if (ChangeDisplaySettings(&dmScreenSettings, CDS_FULLSCREEN !=
                                                                  DISP_CHANGE_SUCCESSFUL))
                {
                        /*      Setting display mode failed, switch to windowed*/
                        MessageBox(NULL, "Display mode failed", NULL, MB_OK);
                        fullScreen = false;
                }
        }
 
        /*      Check if fullscreen is still on*/
        if (fullScreen)
        {
                dwExStyle = WS_EX_APPWINDOW;    //window extended style
                dwStyle = WS_POPUP;                             //windows style
                ShowCursor(FALSE);                              //hide mouse pointer
        }
 
        else
        {
                dwExStyle = WS_EX_APPWINDOW | WS_EX_WINDOWEDGE; //window extended style
                dwStyle = WS_OVERLAPPEDWINDOW;                                  //windows style
        }
 
        AdjustWindowRectEx(&windowRect, dwStyle, FALSE, dwExStyle);
 
        /*      Class registerd, so now create our window*/
        hwnd = CreateWindowEx(NULL, "MyClass",  //class name
                                                  "OpenGL Robot",       //app name
                                                  dwStyle |
                                                  WS_CLIPCHILDREN |
                                                  WS_CLIPSIBLINGS,
                                                  0, 0,                         //x and y coords
                                                  windowRect.right - windowRect.left,
                                                  windowRect.bottom - windowRect.top,//width, height
                                                  NULL,                 //handle to parent
                                                  NULL,                 //handle to menu
                                                  hInstance,    //application instance
                                                  NULL);                //no xtra params
 
        /*      Check if window creation failed (hwnd = null ?)*/
        if (!hwnd)
        {
                return 0;
        }
 
        ShowWindow(hwnd, SW_SHOW);      //display window
        UpdateWindow(hwnd);                     //update window
 
        done = false;   //initialize loop condition variable
 
        /*      Main message loop*/
        while (!done)
        {
                PeekMessage(&msg, hwnd, NULL, NULL, PM_REMOVE);
 
                        if (msg.message == WM_QUIT)     //did we receive a quit message?
                        {
                                done = true;
                        }
 
                        else
                        {
                                Render();
                                TranslateMessage(&msg);
                                DispatchMessage(&msg);
                        }
        }
 
        if (fullScreen)
        {
                ChangeDisplaySettings(NULL, 0);
                ShowCursor(TRUE);
        }
 
        return msg.wParam;
 
}

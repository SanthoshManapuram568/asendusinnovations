@echo off
echo Installing dependencies for Asendus Expo Web Project...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo Download the LTS version and restart your terminal after installation.
    pause
    exit /b 1
)

echo Node.js version:
node --version

echo NPM version:
npm --version

echo.
echo Installing project dependencies...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to install dependencies!
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo SUCCESS: All dependencies installed!
echo.
echo To start the development server, run:
echo   npm run web
echo.
echo To build for production, run:
echo   npm run build
echo.
pause
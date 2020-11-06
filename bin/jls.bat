@echo off
if "%1" == "" (
	echo. Jellyscript Cli Usage:
	echo.
	echo. fls {option/name}
	echo.
	echo. Options:
	echo.  --version: Must be the first parameter, shows current version.
) else if "%1" == "--version" (
	echo Jellyscript Version 0.1.0
)
exit /b
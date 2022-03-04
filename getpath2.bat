@echo off
cls
color 0a
title Mengambil Lokasi File
echo 
set /p folder="Tentukan Lokasi Folder json:"

dir /s /b %~DP0json\%folder%\*.json > %~DP0\%folder%.txt
start %folder%.txt
pause
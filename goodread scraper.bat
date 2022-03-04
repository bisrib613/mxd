@echo off
cls
color 0a
title Goodreads Scraper
del "idgr.txt" /s /f /q
php scrapgr.php
pause
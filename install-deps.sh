#!bin/bash

echo Installing Tailwind CSS...

yarn add -D tailwindcss postcss autoprefixer

echo Creating Tailwind CSS configuration file...

npx tailwindcss init

echo Tailwind CSS installed successfully.

echo Installing Heroicons...

yarn add @ng-icons/core @ng-icons/heroicons

echo Heroicons installed successfully.
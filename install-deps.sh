#!bin/bash

echo Installing Tailwind CSS and Heroicons...
yarn add -D tailwindcss postcss autoprefixer && npx tailwindcss init && yarn add @ng-icons/core @ng-icons/heroicons
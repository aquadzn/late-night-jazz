#!/usr/bin/bash

# abort on errors
set -e

# build
npm run build

git add -A 
git commit -m 'deploy' 
git push -f

#!/bin/bash

mkdir deploy
cd deploy

# clone a new version of the repository
git clone git@github.com:NoBlackMagic/js-spells.git
cd js-spells
git checkout wks

# build the product
gulp build
mv build ../build

# clean existing branch
git checkout gh-pages
mv .git ../
find ./ -mindepth 1 -delete
mv ../.git ./

# add & commit
mv ../build/dev/* .[^.]* ./
git add -A .
git commit -m "publish"

# publish
git status
git push

# clean up
cd ../../
rm -rf deploy

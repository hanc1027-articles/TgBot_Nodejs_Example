#!/bin/bash

git add .
git commit -m "test"

git push heroku master
echo "已提交至Heroku"

# git push origin master
# echo "已提交至Github"
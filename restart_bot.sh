#!/bin/bash

# Heroku伺服器30~40分鐘會進入休眠，請自行手動喚醒
if heroku restart
then 
    echo "已重啟tgfollowheartbot機器人"
else 
    echo "重啟失敗"
fi
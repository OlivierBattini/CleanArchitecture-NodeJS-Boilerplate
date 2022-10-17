#!/bin/bash

# Script parameters

USER="ec2-user"
APP_DIR="app"
LOGS_DIR="/home/logs"

# Script logging

exec > >(tee "$LOGS_DIR/application_start.log") 2>&1

# Setting application directory

echo "[APPLICATION_START] Setting application directory"
sudo chmod -R 777 /home/$USER/$APP_DIR # Give permission for everything in the application directory
cd /home/$USER/$APP_DIR # Navigate into our working directory where GitHub files have been deployed

# Add npm and node to path

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

# Activate nvm

. ~/.nvm/nvm.sh

# Install project dependencies

echo "[APPLICATION_START] Installing node project dependencies"
npm install

# Start application in background using

echo "[APPLICATION_START] Starting application"
npm start > app.out.log 2> app.err.log < /dev/null &

echo "[APPLICATION_START] Done"

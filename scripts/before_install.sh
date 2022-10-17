#!/bin/bash

# Script parameters

APP_NAME="app"
USER="ec2-user"
INSTALL_DIR="/home/${USER}/${APP_NAME}"
LOGS_DIR="/home/logs"

# Script logging

exec > >(tee "$LOGS_DIR/before_install.log") 2>&1

# Download & install node version manager

echo "[BEFORE_INSTALL] Downloading Node Version Manager"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh

echo "[BEFORE_INSTALL] Installing Node LTS version"
nvm install --lts

# Create working directory if it does not exist

if [ -d "$INSTALL_DIR" ]; then
  echo "[BEFORE_INSTALL] Install directory already exists ${INSTALL_DIR}"
else
  echo "[BEFORE_INSTALL] Creating directory ${INSTALL_DIR}"
  mkdir ${INSTALL_DIR}
fi

echo "[BEFORE_INSTALL] Done"

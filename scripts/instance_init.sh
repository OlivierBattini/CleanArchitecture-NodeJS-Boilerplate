#!/bin/bash

# WARNING: If you modify this script, modify the User Data parameter
# in your EC2 image / template

# Script parameters

USER="ec2-user"
LOGS_DIR="/home/logs"

# Creating logs directory

echo "[INSTANCE_INIT] Creating logs directory"
mkdir $LOGS_DIR

# Script logging

exec > >(tee "$LOGS_DIR/instance_init.log") 2>&1

# Install dependencies

echo "[INSTANCE_INIT] Updating yum"
sudo yum -y update

echo "[INSTANCE_INIT] Installing dependencies"
sudo yum -y install ruby
sudo yum -y install wget

# Install CodeDeploy agent

echo "[INSTANCE_INIT] Installing CodeDeploy agent"
cd /home/$USER
wget https://aws-codedeploy-eu-west-3.s3.eu-west-3.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto

echo "[INSTANCE_INIT] Done"

#!/usr/bin/env bash
#ADD Bitbucket fingerprint to known_hosts
mkdir -p ~/.ssh
echo "Adding bitbucket to ssh known hosts"
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
#ADD SSH key to the image
echo "Adding bitbucket SSH key"
echo $GITHUB_SSH_KEY | base64 -D > ~/.ssh/github-ssh
chmod 600 ~/.ssh/github-ssh
ssh-add ~/.ssh/github-ssh

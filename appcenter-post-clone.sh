#!/usr/bin/env bash
mkdir -p ~/.ssh
echo "Adding github to ssh known hosts"
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
#ADD SSH key to the image
echo "Adding github SSH key"
echo $GITHUB_SSH_KEY | base64 -D > ~/.ssh/github-ssh
chmod 600 ~/.ssh/github-ssh
ssh-add ~/.ssh/github-ssh

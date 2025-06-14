#!/bin/bash

# Check for a commit message as argument
if [ -z "$1" ]
then
  echo "Please provide a commit message as an argument!"
  exit 1
fi

# Stage changes
git add .

# Commit changes
git commit -m "$1"

# Push to GitHub
git push origin main

# Print confirmation
echo "Changes have been pushed to GitHub!"

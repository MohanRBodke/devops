#!/bin/bash
echo "Deploying application..."
cd app
npm start &
echo "App deployed on http://localhost:3000/hello"

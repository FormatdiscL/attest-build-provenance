#!/bin/bash

# Simple script to deploy to Vercel
echo "Deploying to Vercel..."

# Install Vercel CLI if not already installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Running Vercel deployment..."
vercel --prod --yes ./website

echo "Deployment complete!"
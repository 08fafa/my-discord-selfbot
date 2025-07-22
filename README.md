# Discord Selfbot - 24/7 Hosting

A Discord selfbot with comprehensive commands and 24/7 hosting capability.

## Setup Instructions

1. **Get Your Discord Token:**
   - Open Discord in your browser
   - Press F12 to open Developer Tools
   - Go to Network tab
   - Send a message in any channel
   - Look for a request to `/api/v*/messages`
   - In the request headers, find `authorization` - this is your token

2. **Get Your User ID:**
   - Enable Developer Mode in Discord (Settings > Advanced > Developer Mode)
   - Right-click on your profile and select "Copy ID"

3. **Configure Environment Variables:**
   - Replace `YOUR_TOKEN_HERE` with your Discord token
   - Replace `YOUR_USER_ID_HERE` with your Discord user ID
   - You can change the prefix from `;` to anything you prefer

## Commands

- `;ping` - Check bot latency
- `;autoreply <trigger> <response>` - Set automatic replies
- `;info` - Display bot information with ASCII art

## Deployment

This bot is configured to run on Render.com's free tier:

1. Push this code to a GitHub repository
2. Connect your GitHub repo to Render
3. Set environment variables in Render dashboard
4. Deploy as a Web Service

## Features

- 24/7 uptime with health check endpoint
- Custom ASCII art branding
- Automatic replies functionality
- Easy command system
- Environment variable configuration

## Important Notes

- This is a selfbot (runs on your personal Discord account)
- Selfbots are against Discord's Terms of Service - use at your own risk
- Keep your token secure and never share it
- The bot will only respond to commands from your user ID

## Author

Created by BLITZ.F08
Instagram: blitz.f08


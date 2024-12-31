const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "GnQQjayZ#ZUwFMT3LEPrieyIxATZAmd9pwzzrjG0mTMu3D-JkykQ", // Add your session id
PREFIX: process.env.PREFIX || ".",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",   
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "true",   
READ_MESSAGE: process.env.READ_MESSAGE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AI_CHAT: process.env.AI_CHAT || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true", 
ANTI_BOT: process.env.ANTI_BOT || "true",  
WELCOME_GOODBYE: process.env.WELCOME_GOODBYE || "true",
READ_CMD: process.env.READ_CMD || "true",
RECORDING: process.env.RECORDING || "true",   
};

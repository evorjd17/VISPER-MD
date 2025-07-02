const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'O8IyHDoI#ulom9-k_yYb98DXsIFB5p8PQeU5OBPC6ysBkJubjARQ' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? 'H0FGaqrxZgKuKbNlBKdMFklkvgzoBw0qRlQd' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'evorjd17' : process.env.SESSION_NAME, 

};


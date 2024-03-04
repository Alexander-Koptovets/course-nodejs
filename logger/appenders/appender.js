import fs from "fs";

const LOG_FILE_PATH = process.env.LOG_FILE_PATH;
const LOG_FILE_ERROR_PATH = process.env.LOG_FILE_ERROR_PATH;

const log = formatter => (date, level, category, message) => {
    const logMessage = formatter(date, level, category, message) + "\n";
    appendLog(logMessage);

    if (level === "ERROR") {
        appendErrorFile(logMessage);
    }
}

async function appendLog(message) {
    try {
        await fs.promises.appendFile(LOG_FILE_PATH, message)
    } catch (error) {
        console.error('APPENDER LOG', error.message);
    }
}

async function appendErrorFile(message){
    try {
        await fs.promises.appendFile(LOG_FILE_ERROR_PATH, message)
    } catch (error) {
        console.error('APPENDER ERROR', error.message);
    }
}

function init(formatter) {

    return {
        log: log(formatter)
    }
}

export default init;

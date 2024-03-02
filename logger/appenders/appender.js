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

function appendLog(message) {
    fs.appendFileSync(LOG_FILE_PATH, message);
}

function appendErrorFile(message){
    fs.appendFileSync(LOG_FILE_ERROR_PATH, message)
}

function init(formatter) {

    return {
        log: log(formatter)
    }
}

export default init;

import { level } from "./constants.js";
import * as appenderStrategy from "./appenders/strategy.js"

const logger = (category) => ({
    info: (message) => {
        executeLog(level.INFO, category, message);
    },
    warn: (message) => {
        executeLog(level.WARN, category, message);
    },
    error: (message) => {
        executeLog(level.ERROR, category, message);
    },
    debug: (message) => {
        executeLog(level.DEBUG, category, message);
    },
    trace: (message) => {
        executeLog(level.TRACE, category, message);
    },
});

const appender = appenderStrategy.getAppender();

function executeLog(level, category, message) {
    appender.log(Date.now(), level, category, message);
}

export default {
    getLogger(category) {
        return logger(category);
    }
};
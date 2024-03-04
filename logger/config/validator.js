import * as constants from "../constants.js";

export function validateLogLevel(level) {
    return level && !!constants.level[level];
}

export function validateAppender(appenders) {
    if (Array.isArray(appenders) && appenders.length > 0) {
        for (let appender of appenders) {
            if (!constants.appender[appender]) return false;
        }

        return true;
    }

    return appenders && !!constants.appender[appenders];
}

export function validateFormatter(formatter) {
    return formatter && !!constants.formatters[formatter];
}
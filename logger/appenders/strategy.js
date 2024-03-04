import * as constants from "../constants.js";
import config from "../config/config.js";
import consoleAppender from "./console.js"
import fileAppender from "./appender.js";
import { getFormatter } from "../formatters/formatterStrategy.js";

const appenders = {
    [constants.appender.CONSOLE]: consoleAppender,
    [constants.appender.FILE]: fileAppender,
    [undefined]: consoleAppender,
}
function getAppender() {
    const outputFormat = getFormatter(config.formatter);
    const selectedAppenders = Array.isArray(config.appender) ?
        config.appender.map(appenderType => appenders[appenderType]) :
        [config.appender].map(appenderType => appenders[appenderType]);

    return selectedAppenders.map(appender => appender(outputFormat));
}

export { getAppender }
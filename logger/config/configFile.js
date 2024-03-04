import fs from "fs";
import { validateLogLevel, validateAppender, validateFormatter } from "./validator.js";

const path = process.env.LOG_CONFIG_FILE;

function configFromFile() {

    const config = {};

    if (!path) {
        return config;
    }

    try {
        const configFile = JSON.parse(fs.readFileSync(path, { encoding: 'utf8' })) ?? {};

        const logLevel = configFile.logLevel.toUpperCase();
        if (validateLogLevel('logLevel', logLevel)) {
            config.logLevel = logLevel;
        }

        const appender = Array.isArray(configFile.appender) ?
            configFile.appender.map(appender => appender.toUpperCase()) :
            configFile.appender.toUpperCase();
        if (validateAppender(appender)) {
            config.appender = appender;
        }

        const formatter = configFile.outputFormat.toUpperCase();
        if (validateFormatter(formatter)){
            config.formatter = formatter;
        }

    } catch (e) {
        console.error(`${e.name}: ${e.message}`);
    }

    return config;

}

export default { configFromFile }
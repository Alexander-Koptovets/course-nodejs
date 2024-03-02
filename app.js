import { generateHash } from "./homework1/index.js";
import logger from "./logger/logger.js";

const log = logger.getLogger("app.js");

log.info('INFO');
log.warn('WARN');
log.error("ERROR occur: My log");
log.debug('DEBUG');
log.trace('TRACE');

console.log(generateHash(3));
console.log(generateHash(10));
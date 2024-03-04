import logger from "./logger/logger.js";

const log = logger.getLogger("app.js");

log.info('INFO', { key: 'value' }, 'string', 1);
log.warn('WARN');
log.error("ERROR occur: My log");
log.debug('DEBUG');
log.trace('TRACE');

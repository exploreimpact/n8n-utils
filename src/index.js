module.exports = {
  ...require('./utils/api-exception'),
  ...require('./utils/parse-format'),
};

/*
const apiException = require('./utils/api-exception');
const parseFormat = require('./utils/parse-format');

module.exports = {
  throwApiException: apiException.throwApiException,
  parseApiException: apiException.parseApiException,
  parseBool: parseFormat.parseBool,
  parseString: parseFormat.parseString,
};
*/
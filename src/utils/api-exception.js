function throwApiException(message, code, context) {
  const errorObject = {
    ok: false,
    code: code ?? 500,
    message: message,
    context: context ?? {},
    // ...
  };

  throw new Error(JSON.stringify(errorObject));
}

function parseApiException(jsonString) {
  let result = {};
  try {
    result = JSON.parse(jsonString);
  } catch (e) {
    result = {
      ok: false,
      code: 500,
      message: jsonString ?? 'unknown error',
      context: {
        source: 'unexpected error',
      },
    };
  }
  return result;
}

module.exports = {
  throwApiException,
  parseApiException,
};
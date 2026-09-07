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
  return JSON.parse(jsonString);
}

module.exports = {
  throwApiException,
  parseApiException,
};
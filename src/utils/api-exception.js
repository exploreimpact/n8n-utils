function throwApiException(message, code, context) {
  const exception = new Error(message);

  Object.assign(exception, {
    code: code ?? 500,
    context: context ?? {},
    // ...
  });

  return exception;
}

module.exports = {
  throwApiException,
};
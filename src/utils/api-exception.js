function createApiExceptionResponse(message, code, context) {
  return {
    ok: false,
    code: code ?? 500,
    message: message,
    context: context ?? {},
    // ...
  };
}

module.exports = {
  createApiExceptionResponse: createApiExceptionResponse,
};
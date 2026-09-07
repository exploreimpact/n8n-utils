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
  return [];
  // let result = [];
  // try {
  //   result = JSON.parse(jsonString);
  // } catch (e) {
  //   result = jsonString ?? [];
  // }
  // return result;
}

function parseApiError(jsonString) {
  let result = [];
  try {
    result = JSON.parse(jsonString);
  } catch (e) {
    result = jsonString ?? [];
  }
  return result;
}

module.exports = {
  throwApiException,
  parseApiException,
  parseApiError,
};
module.exports = (message, statusCode) => {
  console.log(message);
  const customError = new Error(message);
  customError.status = statusCode;
  return customError;
};

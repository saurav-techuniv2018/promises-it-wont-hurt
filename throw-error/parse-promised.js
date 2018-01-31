const parsePromised = jsonString => new Promise((resolve, reject) => {
  try {
    const parsedObject = JSON.parse(jsonString);
    resolve(parsedObject);
  } catch (err) {
    reject(err);
  }
});

module.exports = parsePromised;

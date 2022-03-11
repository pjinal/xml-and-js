/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

/*function timeout(ms, callback) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
      callback();
    }, ms);
  });
} */

 const timeout = (ms=2500) => new Promise(resolve => {setTimeout(resolve, ms);
})

/*function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}*/

const generateRandomNumber = () => Math.floor(Math.random() * 40);

/*function generateData(callback) {
  timeout(1000, function () {
    const data = Array.from({ length: 20 }, generateRandomNumber);
    callback(data);
  });
}*/

const generateData = async () => timeout().then(() => Array.from({ length: 20 }, generateRandomNumber))

/*function convertToFeet(meters, callback) {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    callback(feet);
  });
}*/

const convertToFeet = (meters) => timeout().then(() => (meters * 3.2808))

/*function processData(data, callback) {
  data.map(function (value) {
    callback(value);
  });
}*/

const processData = async (data, converterFn) =>
  await Promise.all(data.map(async (value) => {
      return { val1: value, res1: await converterFn(value) };
  }))

/*function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}*/
const logResult = (meters, feet) => console.log(`Converted ${meters}m to ${feet}ft`);

/*function main() {
  console.log("Start");
  generateData(function (data) {
    processData(data, function (value) {
      convertToFeet(value, function (result) {
        logResult(value, result);
      });
    });
  });
  console.log("Finish");
}

main(); */

const main = async () => {
  console.log("Start");
  let data = await generateData()
  let processedData = await processData(data, convertToFeet)
  processedData.forEach(element => {
      logResult(element.val1, element.res1)
  })
  console.log("Finish");
}

main();
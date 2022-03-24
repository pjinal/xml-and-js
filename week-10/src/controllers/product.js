const data = require("../data/products.json");
const getAll = () =>
new Promise((resolve) => {
    resolve({code:200,data});
});
const params = (value) => {
    new Promise((resolve) => {
        if (value) {
            data = data.filter(({ id }) => id.includes(value));
          }
          if (value) {
            data = data.filter(({ name }) => name.toLowerCase().includes(value));
          }
          if (value) {
            data = data.filter(({ description }) => description.includes(value));
          }
          if (value) {
            data = data.filter(({ price }) => price.includes(value));
          }
    });
   
}

const getId = (Id) =>
new Promise ((resolve) => {
const item = data.find ((item) => id)
});

module.exports = {
  getAll, getId
}
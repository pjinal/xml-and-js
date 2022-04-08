const products = require("./assignment");

const getAll = ({ id, name, description, price } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (name) {
      result = result.filter((item) => item.name === name);
    }

    if (description) {
      result = result.filter((item) => item.description === description);
    }

    if (price) {
      result = result.filter((item) => item.price === Number(price));
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: product });
    } else {
      resolve({
        code: 404,
        data: { message: `No country found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

const peopleList = require("../data/MOCK_DATA.json");

const getAll = ({ name, email } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(peopleList);

    if (name) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (email) {
      result = result.filter((item) =>
        item.email.toLowerCase().includes(email.toLowerCase())
      );
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const person = peopleList.find((person) => {
      return person.id == id;
    });

    if (person) {
      resolve({ code: 200, data: person });
    } else {
      resolve({
        code: 404,
        data: { message: `No person found by this particular id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
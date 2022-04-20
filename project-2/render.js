const { getAll, getById } = require("./src/controller/people");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No element found inside the table");
  }

  const rows = data.reduce(
    (acc, { id, name, email }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${name}</td><td>${email}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;

  getAll({
    name,
    email,
  }).then(({ data }) => renderTable(data));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};

const form = document.getElementById("search-form");

form.addEventListener("submit", onSubmit);
form.addEventListener("reset", onReset);

const onSubmitPersonById = (event) => {
  event.preventDefault();
  const id = event.target.id.value;
  getById(id).then(({ data }) => {
    if (data.message) {
      alert(data.message);
    } else {
      renderTable([data]);
    }
  });
};

const personIdForm = document.getElementById("search-form-id");

personIdForm.addEventListener("submit", onSubmitPersonById);
personIdForm.addEventListener("reset", onReset);
const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, term) => {
  const tableBody = document.getElementById("table-main");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  if (term) {

    const valueTerm = document.getElementById('input').value.toLowerCase();
      switch(term) {
        case 'country':      
            source = source.filter(({ country }) => country.toLowerCase().includes(valueTerm));            
            break;
        default:
            console.log('Default occured')
            break;      
      }    
  }

  const rows = source.reduce(
    (acc, { id, first_name, last_name, email ,gender ,ip_address, postal_code, country }) =>
      acc +
      `<tr>
      <td>${id}</td><td>${first_name}</td>
      <td>${last_name}</td>
      <td>${email}</td>
      <td>${gender}</td>
      <td>${ip_address}</td>
      <td>${postal_code}</td>
      <td>${country}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

loadData(`./DATA.json`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.filters.value;
  loadData(`./DATA.json`).then((data) => renderTable(data, term));
};
const onReset = () => {
  loadData(`./DATA.json`).then((data) => renderTable(data));
};
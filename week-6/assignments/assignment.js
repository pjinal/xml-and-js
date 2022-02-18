const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); //removes the extra spacee in the string.
    template.innerHTML = html;
    return template.content.firstChild;
  };

  //load data
  const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };
  
  const generateTableRow = (item) => {
      //Retrieving data
    const id = Array.from(item.getElementsByTagName(`id`))[0];
    const firstname = Array.from(item.getElementsByTagName(`firstname`))[0];
    const lastname = Array.from(item.getElementsByTagName(`lastname`))[0];
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const ip = Array.from(item.getElementsByTagName(`ip`))[0];
  
    //returning all the values in te table
    return `<tr>
          <td>${id.textContent}</td>
          <td>${firstname.textContent} ${lastname.textContent}</td>
          <td>${email.textContent}</td>
          <td>${gender.textContent}</td>
          <td>${ip.textContent}</td>
      </tr>`;
  };
  
  const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `person`
    );
  
    nodes.map((personNode) =>
      table.appendChild(htmlToElement(generateTableRow(personNode)))
    );
  };
  
  loadData(`http://localhost:8080//week-6/assignments/people.xml`, renderTable);
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };
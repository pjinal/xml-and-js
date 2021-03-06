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
    //first way to retrieve the data
    const rollno = item.attributes[0].textContent;
    //another way to retrieve the data
    const firstname = Array.from(item.getElementsByTagName(`firstname`))[0];
    const lastname = Array.from(item.getElementsByTagName(`lastname`))[0];
    const nickname = Array.from(item.getElementsByTagName(`nickname`))[0];
    const marks = Array.from(item.getElementsByTagName(`marks`))[0];
    
  //returning all the values in te table
    return `<tr>
        <td>${rollno}</td>
        <td>${firstname.textContent +" "+lastname.textContent}</td>
        <td>${nickname.textContent}</td>
        <td>${marks.textContent}</td>
    </tr>`;
  };
  
  const renderTable = (xmlData) => {
    const table = document.getElementById("main-table");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `student`
    );
  
    nodes.map((studentNode) =>
      table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );
  };
  
  loadData(`http://localhost:8080/week-6/assignments/students.xml`, renderTable);
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };
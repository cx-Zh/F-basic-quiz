function GetEducationInfo() {
  const getId = () => {
    const urlRegex = /^(?:http:\/\/localhost:1234\/users\/)(\d+)$/;
    const match = window.location.href.match(urlRegex);
    return match ? match[1] : null;
  };
  const result = fetch(`http://localhost:8080/users/${getId()}/educations`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let html = "";
      for (let i = 0; i < data.length; i += 1) {
        html += `<tr>
                    <td>${data[i].year}</td>
                    <td>
                      <h4>${data[i].title}</h4>
                      <p>${data[i].description}</p>
                    </td>
                  </tr>`;
      }
      document.getElementById("educations").innerHTML = html;
    })
    .catch((err) => console.log(err));
  return result;
}

export { GetEducationInfo };

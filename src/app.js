import "./style/index.scss";
import { GetEducationInfo } from "./app_support";

function GetUserInfo() {
  const getId = () => {
    const urlRegex = /^(?:http:\/\/localhost:1234\/users\/)(\d+)$/;
    const match = window.location.href.match(urlRegex);
    return match ? match[1] : null;
  };
  const result = fetch(`http://localhost:8080/users/${getId()}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("userInfo_desc").innerHTML = data.description;
      document.getElementById("userInfo_name").innerText = data.name;
      document.getElementById("userInfo_age").innerText = data.age;
      document.getElementById("userInfo_avatar").innerText = data.avatar;
      document.getElementById("userInfo_id").innerText = data.id;
    })
    .catch((err) => console.log(err));
  return result;
}

GetUserInfo();
GetEducationInfo();

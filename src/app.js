import "./style/index.scss";

const sayNewHello = () => "New Hello";
document.writeln(sayNewHello());

// eslint-disable-next-line no-unused-vars
function LoadGreet() {
  fetch("http://localhost:8080/greet").then(function (response) {
    return response.json();
  });
}

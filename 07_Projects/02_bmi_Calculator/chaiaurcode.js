const form = document.querySelector("form");
// this will get empty value as soon as page loads
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height == "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter the valid height";
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter the valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      const newlineElement = document.createElement("br");
      results.appendChild(newlineElement);
      results.appendChild(document.createTextNode("Under Weight"));
    } else if (bmi >= 18.6 && bmi <= 24.6) {
      const newlineElement = document.createElement("br");
      results.appendChild(newlineElement);
      results.appendChild(document.createTextNode(" Normal Range"));
    } else {
      const newlineElement = document.createElement("br");
      results.appendChild(newlineElement);
      results.appendChild(document.createTextNode("Over Weight"));
    }
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `please enter valid height: ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `please enter valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result.innerHTML = `<span>under weight: ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>normal range: ${bmi}</span>`;
    } else if (bmi > 24.9) {
      result.innerHTML = `<span>over weight: ${bmi}</span>`;
    }
  }
});

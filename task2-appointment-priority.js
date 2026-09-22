document.getElementById("priorityForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const ageValue = document.getElementById("age").value;
  const temperatureValue = document.getElementById("temperature").value;
  const symptoms = document.getElementById("symptoms").value.trim();
  const severity = document.getElementById("severity").value;
  const emergency = document.getElementById("emergency").value;
  const error = document.getElementById("error");

  if (ageValue === "" || temperatureValue === "" || !symptoms || !severity || !emergency) {
    error.textContent = "Enter all appointment details.";
    return;
  }

  const age = Number(ageValue);
  const temperature = Number(temperatureValue);
  let recommendation;

  if (emergency === "Yes") {
    recommendation = "Emergency Consultation Required";
  } else if (temperature >= 39 || severity === "Severe") {
    recommendation = "High Priority Consultation";
  } else if (age >= 60 && severity === "Moderate") {
    recommendation = "Priority Consultation";
  } else {
    recommendation = "Regular Consultation";
  }

  error.textContent = "";
  document.getElementById("result").textContent = recommendation;
  alert(recommendation);
  console.log(recommendation);
});

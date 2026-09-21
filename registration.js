const form = document.getElementById("registrationForm");

function showError(fieldId, message) {
  document.getElementById(fieldId).classList.add("invalid");
  document.getElementById(fieldId + "Error").textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(function (element) {
    element.textContent = "";
  });
  document.querySelectorAll(".invalid").forEach(function (element) {
    element.classList.remove("invalid");
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  const patientName = document.getElementById("patientName").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value.trim();
  const bloodGroup = document.getElementById("bloodGroup").value;
  const department = document.getElementById("department").value;
  const registrationDate = document.getElementById("registrationDate").value;
  const today = new Date().toISOString().split("T")[0];
  let isValid = true;

  if (patientName === "" || !/^[A-Za-z ]+$/.test(patientName)) {
    showError("patientName", "Enter a valid patient name.");
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    showError("mobile", "Enter a valid 10-digit Indian mobile number.");
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email", "Enter a valid email address.");
    isValid = false;
  }

  if (dateOfBirth === "" || dateOfBirth > today) {
    showError("dateOfBirth", "Enter a valid date of birth.");
    isValid = false;
  }

  if (gender === "") {
    showError("gender", "Select a gender.");
    isValid = false;
  }

  if (address === "") {
    showError("address", "Address is required.");
    isValid = false;
  }

  if (bloodGroup === "") {
    showError("bloodGroup", "Select a blood group.");
    isValid = false;
  }

  if (department === "") {
    showError("department", "Select a department or appointment type.");
    isValid = false;
  }

  if (registrationDate === "" || registrationDate > today) {
    showError("registrationDate", "Enter a valid registration date.");
    isValid = false;
  }

  if (isValid) {
    form.submit();
  }
});

form.addEventListener("reset", clearErrors);

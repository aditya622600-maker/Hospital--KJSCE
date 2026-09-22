function validateName(name) {
  return /^[A-Za-z ]+$/.test(name.trim());
}

function validateMobile(mobile) {
  return /^\d{10}$/.test(mobile.trim());
}

function validatePatientId(patientId) {
  return /^PAT-\d{4}$/.test(patientId.trim());
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const patientName = document.getElementById("patientName").value;
  const mobile = document.getElementById("mobile").value;
  const patientId = document.getElementById("patientId").value;
  const email = document.getElementById("email").value;
  let isValid = true;

  document.querySelectorAll(".error").forEach(function (element) {
    element.textContent = "";
  });
  document.getElementById("successMessage").textContent = "";

  if (!validateName(patientName)) {
    document.getElementById("patientNameError").textContent = " Enter alphabets and spaces only.";
    isValid = false;
  }
  if (!validateMobile(mobile)) {
    document.getElementById("mobileError").textContent = " Enter exactly 10 digits.";
    isValid = false;
  }
  if (!validatePatientId(patientId)) {
    document.getElementById("patientIdError").textContent = " Use the format PAT-1234.";
    isValid = false;
  }
  if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = " Enter a valid email address.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent = "Registration successful.";
  }
});

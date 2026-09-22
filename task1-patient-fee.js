document.getElementById("feeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const patientName = document.getElementById("patientName").value.trim();
  const patientId = document.getElementById("patientId").value.trim();
  const age = Number(document.getElementById("age").value);
  const consultationFee = Number(document.getElementById("consultationFee").value);
  const registrationFee = Number(document.getElementById("registrationFee").value);
  const error = document.getElementById("error");

  if (!patientName || !patientId || age < 0 || consultationFee < 0 || registrationFee < 0) {
    error.textContent = "Enter valid patient details.";
    return;
  }

  error.textContent = "";
  const totalAmount = consultationFee + registrationFee;
  const discountStatus = age >= 60 ? "Eligible for senior-citizen discount" : "Not eligible for senior-citizen discount";
  const message = `Patient: ${patientName}\nPatient ID: ${patientId}\nTotal Amount: ₹${totalAmount}\nRegistration Status: Confirmed\nDiscount Status: ${discountStatus}`;

  document.getElementById("result").innerText = message;
  alert(message);
  console.log(message);
});

const patient = {
  patientName: "Rahul Sharma",
  patientId: "PAT-1001",
  age: 45,
  gender: "Male",
  bloodGroup: "B+",
  mobile: "9876543210",
  department: "Cardiology",
  appointmentType: "Consultation",
  registrationStatus: "Confirmed",

  displayPatient: function () {
    return `Name: ${this.patientName}\nPatient ID: ${this.patientId}\nAge: ${this.age}\nGender: ${this.gender}\nBlood Group: ${this.bloodGroup}\nMobile: ${this.mobile}\nStatus: ${this.registrationStatus}`;
  },
  displayAppointment: function () {
    return `Department: ${this.department}\nAppointment Type: ${this.appointmentType}`;
  },
  getAgeCategory: function () {
    if (this.age >= 60) return "Senior Citizen";
    if (this.age >= 18) return "Adult";
    return "Minor";
  }
};

document.getElementById("displayPatient").addEventListener("click", function () {
  const message = patient.displayPatient();
  document.getElementById("result").textContent = message;
  console.log(message);
});

document.getElementById("displayAppointment").addEventListener("click", function () {
  const message = patient.displayAppointment();
  document.getElementById("result").textContent = message;
  console.log(message);
});

document.getElementById("checkCategory").addEventListener("click", function () {
  const message = patient.getAgeCategory();
  document.getElementById("result").textContent = message;
  console.log(message);
});

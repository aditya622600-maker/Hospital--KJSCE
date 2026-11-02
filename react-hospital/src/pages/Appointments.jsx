import PatientInfo from "../PatientInfo.jsx";

const appointments = [
  {
    patientId: "KJS-HC-014",
    name: "Aarav Shah",
    department: "General Medicine",
    appointment: "09:30 AM",
    service: "Urine analysis",
  },
  {
    patientId: "KJS-HC-021",
    name: "Meera Patel",
    department: "Diagnostics",
    appointment: "10:15 AM",
    service: "Test strip reading",
  },
  {
    patientId: "KJS-HC-032",
    name: "Kabir Desai",
    department: "General Medicine",
    appointment: "11:00 AM",
    service: "Follow-up consultation",
  },
];

function Appointments() {
  return (
    <section className="appointments-view" aria-labelledby="appointments-title">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Outpatient services</p>
          <h1 id="appointments-title">Today’s appointments</h1>
        </div>
        <span className="record-count">{appointments.length} appointments</span>
      </div>
      <p className="view-description">Review patient details and update arrival status.</p>

      <div className="appointment-list" aria-label="Appointment list">
        {appointments.map((appointment) => (
          <PatientInfo
            key={appointment.patientId}
            patientId={appointment.patientId}
            name={appointment.name}
            department={appointment.department}
            appointment={appointment.appointment}
            service={appointment.service}
          />
        ))}
      </div>
    </section>
  );
}

export default Appointments;

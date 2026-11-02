import { useState } from "react";

function PatientInfo({ patientId, name, department, appointment, service }) {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  function handleCheckIn() {
    setIsCheckedIn((currentStatus) => !currentStatus);
  }

  return (
    <article className="patient-card">
      <div className="card-heading">
        <div>
          <p className="patient-id">{patientId}</p>
          <h2>{name}</h2>
        </div>
        <span className={`status ${isCheckedIn ? "status-arrived" : "status-expected"}`}>
          <span className="status-dot" aria-hidden="true"></span>
          {isCheckedIn ? "Arrived" : "Expected"}
        </span>
      </div>

      <dl className="details-grid">
        <div>
          <dt>Department</dt>
          <dd>{department}</dd>
        </div>
        <div>
          <dt>Appointment</dt>
          <dd>{appointment}</dd>
        </div>
        <div className="detail-wide">
          <dt>Service</dt>
          <dd>{service}</dd>
        </div>
      </dl>

      <div className="card-action">
        <p aria-live="polite">
          {isCheckedIn
            ? "Patient arrival is recorded for this demo."
            : "Patient has not checked in yet."}
        </p>
        <button
          className={isCheckedIn ? "button button-secondary" : "button button-primary"}
          type="button"
          onClick={handleCheckIn}
          aria-pressed={isCheckedIn}
        >
          {isCheckedIn ? "Undo check-in" : "Mark as arrived"}
        </button>
      </div>
    </article>
  );
}

export default PatientInfo;

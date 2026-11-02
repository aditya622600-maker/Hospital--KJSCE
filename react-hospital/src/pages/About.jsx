function About() {
  return (
    <section className="about-view" aria-labelledby="about-title">
      <p className="eyebrow">About this application</p>
      <h1 id="about-title">KJS Healthcare patient portal</h1>
      <p className="about-lead">
        A small single-page application demonstration for the KJS Healthcare hospital case study.
      </p>

      <div className="about-panel">
        <h2>What this demo shows</h2>
        <ul>
          <li>React Router changes between Home, Appointments, and About views without a full page reload.</li>
          <li>Appointment cards are generated from a JavaScript array using <code>map()</code>.</li>
          <li>Reusable React components display patient details and handle check-in status.</li>
        </ul>
      </div>
      <p className="sample-note">All names and appointment details shown are sample data for the lab demonstration.</p>
    </section>
  );
}

export default About;

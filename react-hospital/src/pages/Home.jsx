import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-view" aria-labelledby="home-title">
      <p className="eyebrow">KJS-HC-03 · Patient portal</p>
      <h1 id="home-title">Care coordination, made clear.</h1>
      <p className="home-description">
        Review today’s outpatient appointments and update patient arrival status from one simple workspace.
      </p>
      <Link className="button button-primary home-action" to="/appointments">
        View appointments <span aria-hidden="true">→</span>
      </Link>

      <div className="home-note">
        <span className="note-icon" aria-hidden="true">+</span>
        <div>
          <h2>Patient check-in</h2>
          <p>Use the appointments view to mark a patient as arrived. This demonstration keeps changes in page state only.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;

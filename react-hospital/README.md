# KJS Healthcare React Patient Check-in

This is the Experiment 7 and Experiment 8 React adaptation for the KJS Healthcare hospital case study. It demonstrates JSX, functional components, props, `useState`, click event handling, JavaScript arrays with `map()`, and client-side routes with React Router.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use the navigation to move between Home, Appointments, and About without a full page reload. On Appointments, use **Mark as arrived** to update a card; **Undo check-in** reverses the change. The information is sample data and the change is held only in browser state; it is not saved to a backend.

## Main files

- `index.html` provides the React mount point.
- `src/main.jsx` creates the React root and renders the application.
- `src/App.jsx` configures `BrowserRouter`, navigation `Link`s, and the `Routes`/`Route` mappings.
- `src/pages/Home.jsx`, `src/pages/Appointments.jsx`, and `src/pages/About.jsx` are the three routed page components.
- `src/pages/Appointments.jsx` stores sample appointments in a JavaScript array and renders them with `map()` and a unique `key`.
- `src/PatientInfo.jsx` is the reusable functional component; it receives appointment details through props, and its `useState` value controls check-in status.
- `src/App.css` styles the responsive patient portal UI.

Build a production bundle with `npm run build`.

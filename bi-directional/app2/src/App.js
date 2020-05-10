import LocalButton from "./Button";
import React from "react";

// const RemoteButton = React.lazy(() => import("app1/Button"));

const App = () => (
  <div>
    <h1>Bi-Directional</h1>
    <h2>App 2</h2>
    <LocalButton />
  </div>
);

export default App;
// <React.Suspense fallback="Loading Button">
//   <RemoteButton />
// </React.Suspense>

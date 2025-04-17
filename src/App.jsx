import React from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import ProgressForm from "./components/ProgressForm/ProgressForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code City Builder</h1>
      </header>
      <main className="app-main">
        <Dashboard />
        <ProgressForm />
      </main>
    </div>
  );
}

export default App;

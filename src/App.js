import React, { useState, useEffect } from "react";
import "../src/index.css";
import JobBoard from "./components/JobBoard";
import data from "./assets/data.json";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="App bg-cyan-50">
      <header className="bg-teal-600 mb-16">
        <img src="/images/bg-header-desktop.svg" alt="background" />
      </header>
      {/*Waiting for jobs to load*/}
      {jobs.length === 0 ? (
        <p>Fetching Jobs...</p>
      ) : (
        //  Once jobs load
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
    </div>
  );
};

export default App;

// TODOs
// 1. Study the design & JSON ✅
// 2. Create the Job Board Component ✅
// 3. Get the data from the JSON ✅
// 4. Pass down the date to the JBC ✅
// 5. Style it
// 6. Filter the component
// 7. Filter the data

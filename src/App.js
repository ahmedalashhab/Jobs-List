import React, { useState, useEffect } from "react";
import "../src/index.css";
import JobBoard from "./components/JobBoard";
import data from "./assets/data.json";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    const tags = [role, level];

    if (filters.length === 0) {
      return true;
    }

    if (languages) tags.push(...languages);
    if (tools) tags.push(...tools);

    // Checks if any (some) of the tags are in (includes) the filter.
    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) {
      return;
    }
    setFilters([...filters, tag]);
  };

  const handleClearClick = () => {
    setFilters([]);
  };

  // Removes tags that we click on by performing a logic test.
  // If clicked tag is not different from tag in state, then
  // the test fails and a new array is returned without the tag that failed.
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App bg-cyan-50">
      <header className="bg-teal-600 mb-16">
        <img src="/images/bg-header-desktop.svg" alt="background" />
      </header>

      {filters.length > 0 && (
        <div
          className={` flex-wrap transition ease-in-out flex bg-white shadow-md my-14 mx-6 p-6 rounded-md`}
        >
          {" "}
          {filters.map((filter) => (
            <span
              onClick={() => handleFilterClick(filter)}
              className=" cursor-pointer bg-cyan-50 text-teal-600 font-bold rounded mr-4  p-2 my-2"
            >
              &#215; {filter}
            </span>
          ))}
          <button
            onClick={handleClearClick}
            className="font-bold text-teal-600 ml-auto"
          >
            Clear
          </button>
        </div>
      )}

      {/*Waiting for jobs to load*/}
      {jobs.length === 0 ? (
        <p>Fetching Jobs...</p>
      ) : (
        //  Once jobs load
        filteredJobs.map((job) => (
          <JobBoard job={job} key={job.id} handleTagClick={handleTagClick} />
        ))
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

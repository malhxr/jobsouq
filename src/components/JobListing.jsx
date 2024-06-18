import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [toggleDescription, setToggleDescription] = useState(false);
  let description = job.description;

  if (!toggleDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-500 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-1">{description}</div>
        <button onClick={() => setToggleDescription((prevState) => !prevState)}>
          <h1 className="text-gray-500 mb-5">
            {!toggleDescription ? "more" : "less"}
          </h1>
        </button>

        <h3 className="text-gray-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1"></FaMapMarker>
            {job.location}
          </div>
          <a
            href={`/job/${job.id}`}
            className="h-[36px] bg-gray-600 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;

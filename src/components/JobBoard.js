import React from "react";

const JobBoard = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  const tags = [role, level];

  if (languages) tags.push(...languages);
  if (tools) tags.push(...tools);

  // if (role) tags.push(...role);
  // if (level) tags.push(...level);

  return (
    <div
      className={`flex flex-col bg-white shadow-md my-14 mx-6 p-6 rounded-md ${
        featured ? "border-l-4 border-teal-600" : ""
      } sm:flex-row`}
    >
      <div>
        <img
          className=" -mt-12 mb-4 w-16 h-16 sm:mt-0 sm:h-24 sm:w-24 sm:my-0"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col ml-6 justify-between">
        <h3 className="flex items-center text-teal-500 text-lg font-spartan">
          {company}
          {isNew ? (
            <span className="bg-teal-500 text-white pt-1 px-2 m-2 rounded-full font-bold text-xs ">
              NEW!
            </span>
          ) : (
            ""
          )}
          {featured ? (
            <span className="bg-teal-900 text-white pt-1 px-2 rounded-full font-bold text-xs">
              FEATURED
            </span>
          ) : (
            ""
          )}
        </h3>

        <h2 className="font-bold text-xl my-2">{position}</h2>
        <p className=" text-gray-500">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap  items-center m-4 border-t border-gray-400 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0 sm:mb-0">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className=" cursor-pointer bg-cyan-50 text-teal-600 font-bold rounded mr-4 mt-4 p-2"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoard;

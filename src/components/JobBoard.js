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
}) => {
  const tags = [role, level];

  if (languages) tags.push(...languages);
  if (tools) tags.push(...tools);

  // if (role) tags.push(...role);
  // if (level) tags.push(...level);

  return (
    <div
      className={`flex flex-col bg-white shadow-md m-4 p-6 rounded-md ${
        featured ? "border-l-4 border-teal-600" : ""
      }`}
    >
      <div>
        <img src={logo} alt={company} />
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

        <h2 className="font-bold text-xl">{position}</h2>
        <p className=" text-gray-500">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex items-center ml-auto">
        {tags
          ? tags.map((tag) => (
              <span className="bg-cyan-50 text-teal-600 font-bold rounded m-2 p-2">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoard;

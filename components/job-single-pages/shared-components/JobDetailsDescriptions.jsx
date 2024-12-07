const JobDetailsDescriptions = ({ data }) => {
  console.log(data);
  return (
    <div className="job-detail">
      {data.keyResponsiblities && (
        <span>
          <h4>Job Description</h4>
          <p>{data.jobDescription}</p>
        </span>
      )}
      {data.keyResponsiblities && (
        <span>
          <h4>Key Responsibilities</h4>
          <ul className="list-style-three">
            {data.keyResponsiblities.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </span>
      )}
      {data.skillExperience && (
        <span>
          <h4>Skill & Experience</h4>
          <ul className="list-style-three">
            {data.skillExperience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </span>
      )}
    </div>
  );
};

export default JobDetailsDescriptions;

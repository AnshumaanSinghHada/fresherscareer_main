const JobOverView2 = ({ data }) => {
  return (
    <ul>
      <li>
        <i className="icon icon-location"></i>
        <h5>Location:</h5>
        <span>{data.location}</span>
      </li>
      <li>
        <i className="icon icon-user-2"></i>
        <h5>Job Title:</h5>
        <span>{data.jobTitle}</span>
      </li>
      <li>
        <i className="icon icon-salary"></i>
        <h5>Salary:</h5>
        <span>{data.salary}</span>
      </li>
    </ul>
  );
};

export default JobOverView2;

import Link from "next/link";

import Image from "next/image";
import { JobList } from "@/JobList";

const JobFeatured2 = () => {
  return (
    <>
      {JobList.slice(0, 5).map((item) => (
        <div
          className="job-block-two col-lg-12 col-md-12 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <Image
                  width={60}
                  height={59}
                  src={
                    "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png"
                  }
                  alt="item brand"
                />
              </span>
              <h4>
                <Link href={`/job-single-v3/${item.id}`}>{item.jobTitle}</Link>
              </h4>

              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase"></span>
                  {item.company}
                </li>
                {/* compnay info */}
                <li>
                  <span className="icon flaticon-map-locator"></span>
                  {item.location}
                </li>
                {/* location info */}
                <li>
                  <span className="icon flaticon-money"></span> {item.salary}
                </li>
                {/* salary info */}
              </ul>
              {/* End .job-info */}
            </div>
            {/* End .content */}

            {/* <ul className="job-other-info">
              {item.jobType.map((val, i) => (
                <li key={i} className={`${val.styleClass}`}>
                  {val.type}
                </li>
              ))}
            </ul> */}
            {/* End .job-other-info */}

            <button className="bookmark-btn">
              <span className="flaticon-bookmark"></span>
            </button>
          </div>
          {/* End inner-box */}
        </div>
        // End job-block
      ))}
    </>
  );
};

export default JobFeatured2;

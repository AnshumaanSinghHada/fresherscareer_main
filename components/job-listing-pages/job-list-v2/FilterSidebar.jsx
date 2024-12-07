import Image from "next/image";
import CallToActions from "../components/CallToActions";
import jobs from "../../../data/job-featured";
import Link from "next/link";

const FilterSidebar = () => {
  let content = jobs?.slice(0, 15).map((item) => (
    <div className="job-block" key={item.id}>
      <div className="inner-box">
        <div className="content">
          <span className="company-logo">
            <Image width={50} height={49} src={item.logo} alt="item brand" />
          </span>
          <h4>
            <Link href={`/job-single-v1/${item.id}`}>{item.jobTitle}</Link>
          </h4>
        </div>
      </div>
    </div>
    // End all jobs
  ));

  return (
    <div className="inner-column">
      <CallToActions />
      {/* <!-- End Call To Action --> */}
      <div className="filters-outer mt-4">
        <h4>Internships</h4>

        {content}

        {/* End .close filter */}
      </div>
      {/* Filter Outer */}
    </div>
  );
};

export default FilterSidebar;

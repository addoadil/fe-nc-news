import { useState } from "react";

function HomepageHeader() {
  const [open, setOpen] = useState("close");

  const handleClick = () => {
    return setOpen(open === "open" ? "close" : "open");
  };

  return (
    <div className="homepage-header-container">
      <h2 className="heading-hp">
        All articles
        <button onClick={handleClick} className="filter-btn">
          Filter
        </button>
        <div className={open}>
          <a href="#">Recent</a>
          <a href="#">All articles</a>
          <a href="#">Popular topics</a>
          <a href="#">Most upvoted</a>
        </div>
      </h2>
    </div>
  );
}

export default HomepageHeader;

import { useState } from "react";
import TopicCards from "./TopicCards";
import { Link } from "react-router-dom";

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
          <Link to="/">Recent</Link>
          <Link to="/">All articles</Link>
          <Link to="/articles/topics">Topics</Link>
          <Link to="/">Most upvoted</Link>
        </div>
      </h2>
    </div>
  );
}

export default HomepageHeader;

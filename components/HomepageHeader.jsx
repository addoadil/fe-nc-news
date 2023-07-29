import { useState } from "react";
import { Link } from "react-router-dom";

function HomepageHeader() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('All articles');

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setOpen(false);
  };

  return (
    <div className="homepage-header-container">
      <h2 className="heading-hp">
        {filter}
        <button onClick={handleClick} className="filter-btn">
          Filter
        </button>
        <div className={open ? "dropdown open" : "dropdown close"}>
          <Link onClick={() => handleFilterChange('Date')} to="/articles/sort/created_at">Date</Link>
          <Link onClick={() => handleFilterChange('Comment count')} to="/articles/sort/comment_count">Comment count</Link>
          <Link onClick={() => handleFilterChange('Topics')} to="/articles/topics">Topics</Link>
          <Link onClick={() => handleFilterChange('Most upvoted')} to="/articles/sort/votes">Most upvoted</Link>
        </div>
      </h2>
    </div>
  );
}

export default HomepageHeader;

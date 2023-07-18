import Navbar from "../components/Navbar";
import HomepageHeader from "../components/HomepageHeader";
import Dropdown from "../components/Dropdown";
import PopularArticlesList from "../components/PopularArticlesList";

function Homepage() {
  return (
    <>
      <Navbar></Navbar>
          <HomepageHeader></HomepageHeader>
          <Dropdown placeHolder="Sort by..."></Dropdown>
          <PopularArticlesList></PopularArticlesList>
    </>
  );
}

export default Homepage;

import { useState, useEffect } from "react";
import topicApiCall from "../apis/topicsApiCall";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function TopicCards() {
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopics] = useState([]);

  useEffect(() => {
    topicApiCall()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="topics-list">
          <ul className="topic-list">
            {topic.topics.map((topic) => {
              const { slug, description } = topic;
              return (
                <Link
                  to={`/articles/filter/${slug}`}
                  className="topic-card"
                  key={slug}
                >
                  <div className="topic-container">
                    <h3 className="topic-title">{slug}</h3>
                    <p className="topic-description">{description}</p>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopicCards;

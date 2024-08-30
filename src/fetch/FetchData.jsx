import { useState, useEffect } from "react";

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  // Logic section
  async function fetchForPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const translatedPosts = await response.json();
      setPosts(translatedPosts);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally, the request was finished");
    }
  }

  useEffect(fetchForPosts, []);

  // UI section
  return (
    <div>
      <h1>Requesting for Posts</h1>
      {posts.length
        ? posts.map((post) => <div>{post.title}</div>)
        : "Loading..."}
    </div>
  );
};

export default FetchData;

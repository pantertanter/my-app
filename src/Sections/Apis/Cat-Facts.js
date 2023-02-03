import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://catfact.ninja/fact" 
});

export default function CatFacts() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get();
      setPost(response.data);
    }
    getPost();
  }, []);

  if (!post) return "No post!"

  return (
    <div>
      <h1>{"Facts about cats"}</h1>
      <p>{post.fact}</p>
    </div>
  );
}
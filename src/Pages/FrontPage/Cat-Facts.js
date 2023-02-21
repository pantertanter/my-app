import axios from "axios";
import React from "react";
import '../../CssFolder/CatFacts.css'

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
    <div className="normal-cat-div">
      <ul>
      <li><h4>{"Fact about cat"}</h4></li>
      <li><p>{post.fact}</p></li>
      </ul>
    </div>
  );
}
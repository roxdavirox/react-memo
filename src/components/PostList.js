import React, { useEffect, useState } from "react";
import PostItem from "./PosItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <input onChange={e => setNewPost(e.target.value)} value={newPost} />
      <ul>{posts && posts.map(p => <PostItem key={p.id} post={p} />)}</ul>
    </>
  );
};

export default PostList;

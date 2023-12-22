import React from "react";
import {useParams} from 'react-router-dom';

function Post() {
  // grab the parameter from the url with the keyname of slug and use its value under variable name slug.
  const {slug} = useParams();
  return (
    <div>
      <h1>Here's our blog post.</h1>
      <p>Topic: {slug}</p>
      <p>Content: TBD.</p>
    </div>
  );
}

export default Post;

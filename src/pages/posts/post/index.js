import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../../services/posts";

const Post = () => {
  const { id } = useParams();

  const { data = {}, isLoading, error, isError } = useGetPostQuery(id);

  if (isError) return <div>{error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return <div>{data.title}</div>;
};

export default Post;

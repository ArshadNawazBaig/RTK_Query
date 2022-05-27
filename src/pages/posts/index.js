import React, { useState } from "react";
import PostCard from "../../components/PostCard";
import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "../../services/posts";
const Posts = () => {
  const { data = [], isLoading, error, isError, refetch } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [isUpdate, setIsUpdate] = useState(false);
  const [initialValues, setInitialValues] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValues({
      ...initialValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      await handleUpdate(initialValues);
      setInitialValues({ title: "", body: "" });
    } else {
      await addPost(initialValues);
      setInitialValues({ title: "", body: "" });
    }
    setIsUpdate(false);
  };

  const handleUpdate = async (post) => {
    setIsUpdate(true);
    setInitialValues({ ...post });
    await updatePost(post);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    await deletePost(id);
  };

  if (isError) return <div>{error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="post__form__wrapper">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="title"
            value={initialValues.title}
            onChange={(e) => handleChange(e)}
          />
          <textarea
            name="body"
            value={initialValues.body}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">{isUpdate ? "Update Post" : "Add Post"}</button>
        </form>
      </div>
      <div className="posts__wrapper">
        {data.map((post) => (
          <PostCard
            onClick={() => handleUpdate(post)}
            onDelete={(e) => handleDelete(e, post.id)}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;

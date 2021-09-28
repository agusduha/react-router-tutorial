import { useLocation, useParams } from "react-router";

const Post = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <>
      <h2>Id is = {id}</h2>
      <h2>{query.get("first")}</h2>
    </>
  );
};

export default Post;

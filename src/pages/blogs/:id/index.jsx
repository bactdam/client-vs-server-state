import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogById } from "../../../apis/blogs";
import { useAppContext } from "../../../context/AppContext";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { blogs } = useAppContext();

  useEffect(() => {
    setLoading(true);
    getBlogById(id).then((res) => {
      setBlog(res);
      setLoading(false);
    });
  }, []);

  const selectedBlog = blogs.find((i) => parseInt(i.id) === parseInt(id));

  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <h1>
        {selectedBlog?.firstName} {selectedBlog?.lastName}
      </h1>
      <h4>Blurb</h4>
      <p>{selectedBlog?.blurb}</p>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h4>Article</h4>
          <p>{blog?.article}</p>
        </>
      )}
    </div>
  );
};

export default BlogPage;

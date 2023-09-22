import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogById } from "../../../apis/blogs";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getBlogById(id).then((res) => {
      setBlog(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button onClick={() => navigate("/")}>Back</button>
          <h1>
            {blog?.firstName} {blog?.lastName}
          </h1>
          <h4>Blurb</h4>
          <p>{blog?.blurb}</p>
          <h4>Article</h4>
          <p>{blog?.article}</p>
        </>
      )}
    </div>
  );
};

export default BlogPage;

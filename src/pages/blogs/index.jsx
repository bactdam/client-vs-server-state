import { useState, useEffect } from "react";
import { getBlogs } from "../../apis/blogs";
import { useNavigate } from "react-router-dom";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBlogs(1).then((res) => {
      setBlogs(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <h4>{blog.firstName}</h4>
              <p>{blog.blurb}</p>
              <button onClick={() => navigate(`/${blog.id}`)}>Read more</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default BlogsPage;

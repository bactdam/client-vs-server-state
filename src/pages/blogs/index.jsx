import { useEffect, useState } from "react";
import { getBlogs } from "../../apis/blogs";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const BlogsPage = () => {
  const navigate = useNavigate();
  const { blogs, setBlogs } = useAppContext();
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

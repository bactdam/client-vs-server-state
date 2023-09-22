import axios from "axios";

export const getBlogs = async (page, pageSize) => {
  const params = new URLSearchParams();
  params.append("page_size", pageSize || 20);
  params.append("page", page);
  const response = await axios.get("http://localhost:3001/blogs", { params });
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axios.get(`http://localhost:3001/blogs/${id}`);
  return response.data;
};

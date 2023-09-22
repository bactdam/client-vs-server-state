const express = require("express");
const data = require("../data/database.json");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/blogs", async (req, res) => {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.page_size);
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  const blogs = data.slice(start, end);
  await sleep(1000);
  res.json(
    blogs.map((i) => ({
      id: i.id,
      firstName: i.firstName,
      lastName: i.lastName,
      blurb: i.blurb,
    }))
  );
});

app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  const blog = data.find((blog) => {
    return blog.id === parseInt(id);
  });
  await sleep(1000);
  res.json(blog);
});

app.listen(3002, () => {
  console.log("Server is running on port 3001");
});

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

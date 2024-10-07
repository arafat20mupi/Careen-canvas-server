const express = require('express');
const { getPaginatedBlogs, createBlog, updateBlog, deleteBlog } = require('./BlogControllers');

const router = express.Router();
// get route
  router.get("/getPaginatedBlogs" ,getPaginatedBlogs)
//   post route
router.post('/createBlog',createBlog)
// update blog
router.put("/updateBlog/:id", updateBlog)
//  delete blog
 router.delete('/deleteBlog/:id',deleteBlog)
 module.exports=router

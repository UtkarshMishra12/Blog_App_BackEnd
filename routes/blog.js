const express = require("express");
const router= express.Router();

//import controller
const { } = require("../controllers/likeController");
const { createPost, getAllPosts} = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");


//createmapping 
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);


//export

module.exports = router;
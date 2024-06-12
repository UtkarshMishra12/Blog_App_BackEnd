const express = require("express");
const router= express.Router();

//import controller
const { } = require("../controllers/likeController");
const { createPost, getAllPosts} = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");
const {likePost, unlikePost} = require("../controllers/likeController");


//createmapping 
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);


//export

module.exports = router;
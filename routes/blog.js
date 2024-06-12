const express = require("express");
const router= express.Router();

//import controller
const { } = require("../controllers/likeController");
const { } = require("../controllers/postController");
const {createComment} = require("../controllers/commentController");


//createmapping 
router.post("/comments/create", createComment);


//export

module.exports = router;
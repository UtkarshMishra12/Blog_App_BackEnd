const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComment = async(req,res) =>{
    try{
        //fetch the data from the body
        const {post, user,body}= req.body;
        //create a comment body
        const comment = new Comment({
            post,user,body
        });
        //save the new comment into db
        const savedComment = await comment.save();

        //Find the post by Id and add the new comment in the comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}}, {new :true})
        .populate("comments") //populate the comments array with comment documents
        .exec();

        res.json({
            post:updatedPost,
        });

    }
    catch(error){
        return res.status(500).json({
            error:" Error while creating comment",
        });
    }
};

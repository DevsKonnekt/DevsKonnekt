import Posts from "../models/posts.js";

export const createPosts = async(req, res, next) => {
    const postData = req.body;

    if (!postData) {
        return res.status(400).json({
            message: "No data supplied!",
        });
    }
    if (!postData.user) {
        return res.status(400).json({
            message: "input required fields",
        });
    }

    try {
        const post = await Posts.create(postData);
        return res.status(201).json({
          message: "Post created successfully",
          post,
        });
      } catch (error) {
        console.log(error);
        next(error);
      }
}

export const getPosts = async (req, res, next) => {
    try {
      const posts = await Posts.find(req.query).populate();
      if (posts.length > 0) {
        res
          .status(200)
          .json({
            message: "Successful",
            posts,
          });
      } else {
        res
        .status(404)
        .json({ 
            message: "No posts found" 
        });
      }
    } catch (error) {
      next(error);
    }
  };

export const getPost = async(req, res, next) => {
    try {
        const id = req.params.id;
        const posts = await Posts.findById(id).exec();
        if (posts) {
              res.status(404).json({
                message: "Event does not exist",
              });
        } else {
            res.status(200).json({
                message: "Successful",
                posts,
              });
        }
      } catch (error) {
        console.error(error);
        next(error);
      }
}

export const updatePost = async (req, res, next) => {
    const updatedPost = req.body;
    const id = new ObjectId(req.params.id);
  
    try {
      const id = req.params.id;
      const updatedPost = req.body;
  
      const post = await Posts.findByIdAndUpdate(id, { ...updatedPost }, { new: true });
      return res.status(200).json({
        message: "Post updated successfully",
        post,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
  };

export const deletePost = async(req, res, next) => {
    const id = new ObjectId(req.params.id);
    
    try {
        const deletedData = await Posts.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Event deleted successfully",
            deletedData,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
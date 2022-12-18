import BlogModel from "../../../models/blog.schema";
const updateBlogs = (req, res) => {
    const {blogId} = req.query;
    const {title, body} = req.body;
    BlogModel.updateOne({
        _id: blogId,
    },[
        {$set: {Title: title, Content: body}}
    ])
    .then ( (blog) => {
        res
        .status(200)
        .json(blog);
    })
    .catch ( (err) => {
        res
        .status(500)
        .json ( {
            code: 'error',
            error: err.message,
        });
    });
};
export default updateBlogs;



  
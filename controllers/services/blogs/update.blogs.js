
const updateBlogs = (req, res) => {
    const {blogid} = req.params;
    const {title, body} = req.body;
    
    let query = `UPDATE blog SET title = '${title}', content = '${body}`
};
export default updateBlogs;



  
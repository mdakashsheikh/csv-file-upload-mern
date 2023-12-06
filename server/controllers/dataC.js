const postData = async(req, res) => {
    
    console.log(req.body);

    try {
        
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    postData,
    
}
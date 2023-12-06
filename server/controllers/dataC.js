const dataSc = require("../model/dataSc");

const postData = async(req, res) => {
    
    console.log("Body", req.body);
    try {
        req.body.map(item => {
            console.log("ITEM", item)
            const {id, Name, Salary} = item;

            try {
                dataSc.create({
                    'id': id,
                    'Name': Name,
                    'Salary': Salary,
                })

            } catch (err) {
                res.status(400).send(err);
            }
        })
        res.send(req.body);
        
    } catch(err) {
        res.status(400).send(err)
    }
    
}

module.exports = {
    postData,

}
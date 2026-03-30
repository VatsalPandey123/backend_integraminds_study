// const users = require('../modules/usermodules');

exports.getUsers = (req, res) => {
    res.json({
        users,
    });   
}
exports.addUser = (req, res) => {
    const student = req.body;
    console.log("student:", student);
    res.json({
        message: "User added successfully",
        student,
    });
}
exports.getUsersById = (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id == parseInt(id));
    
    
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    res.json(user);
}
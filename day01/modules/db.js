const mongoose =require ("mongoose");

const mdb = async () => {
    await mongoose.connect("mongodb://localhost:27017/firstdb",)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
};    
module.exports = mdb;
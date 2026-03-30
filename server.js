const express = require('express')
const jwt = require('jsonwebtoken')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const authRoutes = require('./routes/authRoutes')

const jwtToken = process.env.jwtToken || 'your_secret_key' 

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Server setup done', status: 200 });
})

app.set('view engine', 'ejs')

app.get("/home", (req, res) => {
    res.render("home", { 
        name: "List of students",
        student:[
            {name: "John Doe", age: 20},
            {name: "Jane Smith", age: 22},
            {name: "Alice Johnson", age: 19}
        ] });
});


const userMiddleware = (req, res, next) => {
    // Middleware logic for user authentication or other checks
    console.log("User middleware executed", req.query.skip);
    if(req.query.skip === "true") {
        next();
    }else{
        res.send("Unortherised user");
    }
}
app.use(userMiddleware)


const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization?.split(' ')[1];
    console.log("User middleware executed", authHeader);

    if (!authHeader) {
        return res.status(401).send("Unauthorized user");
    }

    try {
        const decoded = jwt.verify(authHeader, jwtToken);
        req.user = decoded;
        console.log("Decoded token:", decoded);

        next();   // ✅ VERY IMPORTANT

    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};
app.use(authMiddleware);



app.use(express.json())


app.use("/admin",authMiddleware, userRoutes)
app.use("/", productRoutes)
app.use("/", authRoutes)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
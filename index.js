import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello hi there, welcome to my Node.js application!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

import express, { response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(201).send("Hello");
});

app.get('/api/users', (req, res) => {
    res.send([
        {id: 1, username: "Diana", displayName: "Princess"},
        {id: 2, username: "Charles", displayName: "Prince"},
        {id: 3, username: "Elizabeth", displayName: "Queen"}
        
    ]);
   
});


app.get('/api/users/:id', (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id);
    console.log(parsedId);
    if (isNaN(parsedId)) {
        return res.status(400).send({ msg: "Bad Request" });
    }

    // Mock user data
    const mockUsers = [
        { id: 1, username: "Diana", displayName: "Princess" },
        { id: 2, username: "Charles", displayName: "Prince" },
        { id: 3, username: "Elizabeth", displayName: "Queen" }
    ];

    const findUser = mockUsers.find((user) => user.id === parsedId);
    if (!findUser) {
        return res.status(404).send({ msg: "User not found" });
    }

    res.send(findUser);
});



app.get('/api/price', (req, res) => {
    res.send([
        {id: 1, name: "dress", price: 19.99}
    ])
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/products
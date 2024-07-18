const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 }
];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const { name, age } = req.body;
    const newUser = { id: users.length + 1, name, age };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');

    const { name, age } = req.body;
    user.name = name || user.name;
    user.age = age || user.age;

    res.json(user);
});

module.exports = router;

const app = require('./app');

const PORT = 4878;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

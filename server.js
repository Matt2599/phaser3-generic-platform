const express = require('express');
const app = express();

app.use('/static', express.static('build/static'));
app.use(express.static('build'));

app.listen(3000, () => {
    console.log('server started at 3000')
})
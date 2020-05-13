const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

// ` 러 헤줘야 문자열 안에 변수를 잘 출력할 수 잇음
app.listen(port, () => console.log(`Listening on port ${port}`));
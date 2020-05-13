const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : '포스트말론',
        'birthday' : '951010',
        'gender' : 'man',
        'job' : 'singer'
      },
      {
        'id': 2,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : '황정평',
        'birthday' : '981025',
        'gender' : 'man',
        'job' : 'investor'
      },
      {
        'id': 3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : '홍길동이',
        'birthday' : '130134',
        'gender' : 'man',
        'job' : 'programmer'
      },
      ]);
});

// ` 러 헤줘야 문자열 안에 변수를 잘 출력할 수 잇음
app.listen(port, () => console.log(`Listening on port ${port}`));
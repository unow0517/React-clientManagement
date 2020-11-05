const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers',(req, res) => {
    res.send([
        {
          id: 1,
          image: 'https://placeimg.com/64/64/1',
          name: 'Lionel Messi',
          birthday: '971222',
          gender: 'male',
          job: 'uni student'
        },
        {
          id: 2,
          image: 'https://placeimg.com/64/64/2',
          name: 'C.Ronaldo',
          birthday: '924225',
          gender: 'male',
          job: 'rich'
          },  
        {
          id: 3,
          image: 'https://placeimg.com/64/64/3',
          name: 'Lewi',
          birthday: '91232',
          gender: 'female',
          job: 'jobless'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
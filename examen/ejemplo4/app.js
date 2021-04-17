const express = require('express');
const bodyParser = require('body-parser');
const store = require('data-store')({ path: process.cwd() + '/shortener.json' });
const controller = require('./controllers');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  const data = store.get('data');
  const resData = data ? data : {response: 'no data'};
  res.json(resData);
});

app.post('/', function (req, res) {
  const testdata = req.body && req.body.testdata ? req.body.testdata : 'empty data';
  store.set('data', { testdata });
  res.send('Data saved');
});

//* params body: url::string */
app.post('/shorten', async (req, res) => {
    const result = await controller.addUrl(req.body.url);
    res.send(result);
})

app.get('/redir/:id', (req, res) => {

})

app.get('/count/:domain', (req, res) => {

})





app.listen(3003, function () {
  console.log('express shortener url listening to port 3003');
});

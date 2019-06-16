const express = require('express');
const bodyParser= require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var db

MongoClient.connect('mongodb://localhost:27017/budget-angular', (err, client) => {
  if (err) return console.log(err)
  db = client.db('budget-angular')
  app.listen(3001, () => {
    console.log('listening on 3001')
  })
})

app.use(bodyParser())

// create expense
app.post('/create', (req, res) => {
  db.collection('expenses').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    // res.redirect('/')
  })
})

// display expenses
app.get('/view', (req, res) => {
  db.collection('expenses').find().toArray(function(err, results) {
    console.log(results)
    // return results;
    res.send(JSON.stringify(results))
  })
})

// update expense
app.put('/update', (req, res) => {
  db.collection('expenses')
  .findOneAndUpdate({id: req.body.id}, {
    $set: {
      expenseName: req.body.expenseName,
      expenseDescription: req.body.expenseDescription,
      expensePrice: req.body.expensePrice,
      expenseDate: req.body.expenseDate
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

// delete expense
app.delete('/delete/:id', (req, res) => {
  db.collection('expenses').findOneAndDelete({id: req.params.id},
  // console.log("backend_______delete: ", req.body.id)
  (err, result) => {
    if (err) return res.send(500, err)
    res.send({message: 'An expense got deleted from the database'})
  })
})

app.listen(3000, function() {
  console.log('listening on 3000')
})

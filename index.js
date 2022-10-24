const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.get('/clientes', (req, res) => {
   res.send('hello')
   console.log(__dirname)
  })


app.use('/cris', require('./routes/rutas'));

  app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
  })
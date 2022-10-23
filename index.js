const express = require('express')
const app = express()
const port = 3006
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.get('/clientes', (req, res) => {
   res.send('hello')
   console.log(__dirname)
  })
app.get('/', (req, res) => {
    res.render('index',{titulo:"Pagina home cargada por render"})
    
  })
app.get('/portafolio', (req, res) => {
    res.render('portafolio',{titulo:"Portafolio ",description:"este es mi portafolio de trabajos"})
    
  })

  app.listen(port, () => {
    console.log(`Conectado al puerto ${port}`)
  })
  app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
  })
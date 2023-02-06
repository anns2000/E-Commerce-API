const express = require('express')
const app = express()
const port = 3500
app.use(express.json())
const mongoose = require('mongoose');
const { GlobelError } = require('./middleware/Globel.error.handler');
const { stack } = require('./routes/categort.route');
const ApiError = require('./utils/api.error');
require('express-async-errors');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/e-commerce')
  .then(() => console.log('Connected!'));

  
  app.use('/category',require('./routes/categort.route'),GlobelError)
  app.use('/prodect',require('./routes/prodect.route'),)
  app.use('/user',require('./routes/user.route'))
  app.use('/subCategory',require('./routes/subcategory.route'))
  app.use('/brand',require('./routes/brand.route'))

  
  app.all('*',(req,res,next)=>{
    
    next( new ApiError("can't find this path",404));
  })
  
app.use(GlobelError);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
process.on('unhandledRejection',(err)=>{
  console.error('unhandledRejection '+err)
  process.exit(1);
})
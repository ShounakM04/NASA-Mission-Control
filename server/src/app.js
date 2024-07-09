const express = require('express');
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

const cors = require('cors');
const path = require('path');
const app = express();
const morgan = require('morgan')

const api = require('./routes/api');

app.use(cors({
    origin:'http://localhost:3000'
}));

app.use(morgan('combined'))
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')))
app.use('/v1', api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','build','index.html'))
})
module.exports = app;
const mongoose = require('mongoose')
const config = require('./config')
const express = require('express')
const router = require('./project/project.api')

const app = express()

mongoose.connect(config.MONGO_URL).then(() => {
    console.log('Mongoose connected successfully')
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is now connected')
})

mongoose.connection.on('error', (error) => {
    console.log('error in mongoose connection');
})

mongoose.connection.on('disconnected', () => {
    console.log('mongoose is disconnected')
})
app.use(express.json())
app.use('/api/projects', router);

app.listen(config.PORT, () => {
    console.log(`the server is listening at port ${config.PORT}`);
})


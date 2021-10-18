const express = require('express')
const UserDataAccess = require('./../dal/UserDal')
const cors = require('cors')

const app = express()
const dal = new UserDataAccess();

app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(
    cors({
        origin : '*',
        allowedHeaders : '*',
        methods : '*',
    })
)

app.get('/getAllUsers',dal.getUsers)
app.post('/addUser',dal.createUser)
app.delete('/deleteUser/:id',dal.deleteUser)
app.get('/auth',dal.authuser)
app.listen(9080,()=>{
    console.log('Server on 9080')
})

const express = require('express')
const app = express()

app.use(express.json())

const userTest = [ 
    {
      "id" :1,
      "firstName": "Sahid",
      "lastName": "Kick",
      "email": "sahid.kick@academlo.com",
      "password": "root",
      "age": 22
    }
]

let userID = 2

app.get('/', (req, res) => {    
        res.json({
            message: 'Server is Fine ;)'
        })
})

app.get('/users', (req, res) => {
    res.json(userTest)
})

app.post('/users',(req, res) => {
    const user = req.body

    const newUser = {
            id : userID++,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            age: user.age
    }

        userTest.push(newUser)
        res.status(201).json(newUser)

})

app.get('/users/:id', (req, res) =>{
    const id = Number(req.params.id)
    const user = userTest.find((user) => id === user.id)

    if(user){
        res.json(user)
    }else{
        res.status(404).json({
            message: 'Invalid ID'
        })
    }
})

app.listen(9000, () => {
    console.log('Server started in http://localhost:9000')
})
module.exports = app

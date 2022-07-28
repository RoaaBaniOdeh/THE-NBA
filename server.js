const express=require('express')
const app = express()
const path = require('path')// package built-in to node
const axioss = require('axios')

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
  
let recipes = []


 axioss.get('https://recipes-goodness.herokuapp.com/recipes')
 .then(function (response) {
    // handle success
    recipes = {
        response.data.
    }
    console.log(recipes);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });






// Serving DATA
app.get('/sanity',function(req,res){
   
    res.send("ok")
})
-
app.get('/recipes/:ingredient',function(req,res){  
    res.send(res.data.ingredients)
})


const port=8080
app.listen(port,function(){
    console.log("Server is running on port"+port)

})

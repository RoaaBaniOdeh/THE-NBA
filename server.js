const express=require('express')
const app=express()
const path=require('path')// package built-in to node
const axioss = require('axios')

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
  
let players = []

 axioss.get('http://data.nba.net/10s/prod/v1/2018/players.json')
 .then(function (response) {
    // handle success
     players = response.data.league.standard
    console.log(players);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });





  const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}




// Serving DATA
app.get('/',function(req,res){
   
    res.send("the server works")
})


app.get('/team-players/:teamId',function(req,res){  //: not constant //:teamId is the parameter we read from input
    console.log(req.params.teamId)
  
    res.send( players.filter( player => player.teamId == teamToIDs[req.params.teamId]  ))
})
const port=3000
app.listen(port,function(){
    console.log("Server is running on port"+port)

})

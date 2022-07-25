







const fetchPlayers = function(){
    $("#content").empty()
    let input=$("#team-name").val()
   $.get(`team-players/${input}`,function(players){
        players.forEach(player => {
            $("#content").append(`<div class="player-info"><div>${player.firstName} ${player.lastName} </div>  <div>${player.jersey}</div> 
            <img  src="https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}">
            
          <div>${player.pos} </div>  
            `)
        });
        
    })
}
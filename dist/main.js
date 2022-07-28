










const fetchRecip = function(){
    $("#content").empty()
    let input=$("#ingred-name").val()
   $.get(`/recipes/${input}`,function(){
    recipes.forEach(meal => {
            $("#content").append(`<div class="meal-info"><div href=${meal.href}>${meal.title} </div>  
            <div><ul>${meal.ingredients}<ul</div> 
            <img  src=${meal.thumbnail}>
            
            `)
        });
        
    })
}

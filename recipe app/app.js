(async function(){
const response = await fetch("./recipes.json");
const recipes = await response.json();



const  inputEl = document.getElementById("searchInput");
const  btnEl = document.getElementById("searchBtn");
const listEl = document.getElementById('recipe-list');
const detailsEl = document.getElementById("recipeDetailsContainer")


function loadRecipeDetails(recipe){
detailsEl.innerHTML =`
<h2 class="title">${recipe.title}</h2>
<ul>${recipe.ingredients.map( function(ingredient){
    return "<li>" + ingredient +"</li>"
}).join("")}</ul>
<h3>Instruction</h3>
<div>${recipe.instructions}</div>
`;
}



function displaySearchResults (results){
    listEl.innerHTML="";
results.forEach(function(recipe){
   const li = document.createElement("li");
    const listItem = `
    <h2 class="title">${recipe.title}</h2>
    <div class="description">${recipe.description}</div>
    `;
    li.innerHTML = listItem;
    li.addEventListener("click",function(){
       loadRecipeDetails(recipe);
    })
    listEl.appendChild(li);
});
}





function search(){
    const query = inputEl.value.toLowerCase();
    const results = recipes.filter(function(recipe){
        return (recipe.title.toLowerCase().includes(query) || 
    recipe.ingredients.join(" ").toLowerCase().includes(query))
    

    });

displaySearchResults(results)
}
btnEl.addEventListener("click",search);



})();
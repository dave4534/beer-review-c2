 


var beers = [];

// 2. Create an event handler that 
// invokes addBeer when the '.post-beer' button get's clicked,

$('.post-beer').click(function(){

  var name = $('.beer-input').val();
  var category = $('.category-input').val();
  var score = $('select').val(); 

  // 3. and pass in the "beer name" and "category" that the user 
  // entered.

  addBeer(name,category,score);
  updateBeers();
});

// 1. Create an addBeer function that takes two arguments, 
// "name" and "category".
var addBeer = function (name, category, score){
  //4. Inside the addBeer function, create a new beer object with the new data and push it to 
  //a global array called beers.
  var newBeer = {
    name: name,
    category: category,
    score: score
  };
   
  beers.push(newBeer);
  console.log(beers);
};

// 5. Create another function called updateBeers that takes no arguments. 
var updateBeers = function(){
  // 6. Inside this function, empty the '.beers-list' ul first, 
  $(".beers-list").empty();
//7. then loop through the beers array and append the beers to the '.beers-list' ul. 
  for (var i = 0; i < beers.length; i++){

    var x = '<li>' + beers[i].name + '-' + beers[i].category + '-' + beers[i].score + '</li>';

    $(".beers-list").append(x);
  }
//Invoke this function inside your '.post-beer' click handler just below 
//where you're invoking the addBeer function.

};







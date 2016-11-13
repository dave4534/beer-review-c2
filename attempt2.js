// Inside the addBeer function, create a new beer object 
// with the new data and push it to a global array 
// called beers.

var beers = [
  // {
  //   name: dave,
  //   category: asdfdf,
  //    rating: 4
  // },
  // {
  //   name: dave,
  //   category: asdfdf,
  //    rating: 6
  // }
  ];

  var ratingArray = [];

  var addBeer = function(name, category, rating){
    var newBeer = {
      name: name,
      category: category,
      rating: rating
    };

    beers.push(newBeer);
  };

  // Calibrates the beer-list ul and ratingArray, then loops through and 
  // re-posts the entire rating array at once as li's to the ul
  var updateBeers = function(){
    $('.beers-list').empty();
    ratingArray = [];
    for(i = 0; i < beers.length; i++){
      ratingArray.push(beers[i].rating);
      $('.beers-list').append('<li>' + beers[i].name + '-' + beers[i].category + '-' + beers[i].rating + '</li>');
    }
  };
    
// Clicking on Post button defines arguments needed to 
// invoke addBeer function. Then the addBeer function is invoked with 
// those arguments. Then updateBeers is invoked, which calibrates and 
// reposts the entire 'beers' array to its ul
$('.post-beer').on("click", function(){
  var name = $('.beer-input').val();
  var category = $('.category-input').val();
  var rating = $('#rating option:selected').val();
  addBeer(name, category, rating);
  updateBeers();
});


// loop through ratingArray (ratings) and print the ul sorted by rating
$('.rank').on("click", function(){
  //empty the beer-list ul and append the li's in descending order
  // 
  alert(ratingArray.sort(function(a, b){
    return b-a;
  })
  );
});

//bubble sort





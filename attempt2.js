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
 
 var addBeer = function(name, category, rating){
    var newBeer = {
      name: name,
      category: category,
      rating: rating
    };

    beers.push(newBeer);
  };
 

$('.post-beer').on("click", function(){
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
    var rating = $('#rating option:selected').val()
    addBeer(name, category, rating);
    updateBeers();
     });


var ratingArray = [];

var updateBeers = function(){
  $('.beers-list').empty()
  ratingArray = [];
  for(i = 0; i < beers.length; i++){
    ratingArray.push(beers[i].rating);
    $('.beers-list').append('<li>' + beers[i].name + '-' + beers[i].category + '-' + beers[i].rating + '</li>')
  }
}

//loop through ratingArray (ratings) and print the ul sorted by rating
$('.rank').on("click", function(){
    var sortedArray = beers[i].sort();
    console.log(sortedArray);
    });

//bubble sort




   
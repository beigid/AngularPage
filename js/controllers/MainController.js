app.controller('MainController', ['$scope', function($scope) {$scope.title=''; $scope.promo="List of Highest rated movies based on IMDB scores"; 
$scope.products = [{
name: 'The Shawshank Redemption', 
price: 8.99, 
pubdate: new Date('1994'), 
cover: 'img/ShawshankRedemptionMoviePoster.jpg',
likes: 0,
dislikes:0}, 
{
name: 'The Godfather',
price: 21,
pubdate: new Date('1970', '02', '24'),
cover: 'img/TheGodfatherMoviePoster.jpg',
likes: 0,
dislikes:0},
{
name: 'The Dark Knight',
price: 5.99,
pubdate: new Date('2007','07','18'),
cover: 'img/TheDarkKnightMoviePoster.jpg',
likes: 0,
dislikes:0},
{
  name: 'The Godfather Part 2',
  price: 9.99,
  pubdate: new Date('1994','07','06'),
  cover: 'img/TheGodfather2MoviePoster.jpg',
  likes: 0,
  dislikes:0},
{
  name: 'Pulp Fiction',
  price: 12,
  pubdate: new Date('1994','09','14'),
  cover: 'img/PulpFictionMoviePoster.png',
  likes: 0,
  dislikes:0},
{
name: "Schindler's List",
price: 7.79,
pubdate: new Date('2016','08','10'),
cover: 'img/SchindlersListMoviePoster.jpg',
likes: 0,
dislikes:0}];
$scope.plusOne = function(yo) {
  $scope.products[yo].likes += 1;
}
$scope.minusOne = function(index) {
  $scope.products[index].dislikes += 1;
}
}])                                                           

var cookingApp = angular.module('homeCooking', ['ui.router']);



angular.module('homeCooking')
.controller('RecipeController', function ($http) {
    this.welcome = 'Enjoy some Home Cooking';
    this.menuItems = ['Recipes', 'Pantry','ShoppingList'];
    //this.recipes = ['Roasted Duck','Bacon Avocado Salad','Mongolian Beef from Slow Cooker',' San Francisco Pork Chops', 'Peking Duck'];
    // promise with anon callback
    $http.get('recipedata').then( (response) => {
    	this.recipes = response.data;
    });
});
cookingApp.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('Recipes', {
      url: '/recipes',
      templateUrl: '../app/views/recipes.html'
    })
    .state('Pantry',{
      uri: '/pantry',
      templateUrl: '../app/views/pantry.html'
    })
    .state('ShoppingList', {
      uri:'/shoppingList',
      templateUrl: '../app/views/shoppingList.html'
    });
  $urlRouterProvider.otherwise('home');
}]);

console.log('app running...');

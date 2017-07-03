
var cookingApp = angular.module('homeCooking', ['ui.router']);



angular.module('homeCooking')
.controller('RecipeController', function () {
    this.welcome = 'Enjoy some Home Cooking';
    this.menuItems = ["Recipes", "Pantry","ShoppingList"];
    this.recipes = ["Roasted Duck","Bacon Avocado Salad","Mongolian Beef from Slow Cooker"," San Francisco Pork Chops", "Peking Duck"];
});
cookingApp.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('Recipes', {
      url: '/recipes',
      templateUrl: '../views/recipes.html'
    })
    .state('Pantry',{
      uri: '/pantry',
      templateUrl: '../views/pantry.html'
    })
    .state('ShoppingList', {
      uri:'/shoppingList',
      templateUrl: '../views/shoppingList.html'
    });
  $urlRouterProvider.otherwise('home');
}]);

console.log('app running...');

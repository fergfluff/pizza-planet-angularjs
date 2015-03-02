app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    },
  ];

  $scope.mains = [
    {
      name: 'Lasagna',
      description: 'Recipe by Grandma.',
      price: 11.95
    },
    {
      name: 'Cloudy with a Chance of Meatballs',
      description: 'Like the children\'s book.',
      price: 13.95
    },
    {
      name: 'Pizza',
      description: 'Better than Domino\'s.',
      price: 15.95
    },
  ];

  $scope.extras = [
    {
      name: 'Salad',
      description: 'From the garden out back.',
      price: 8.95
    },
    {
      name: 'Chicken Noodle Soup',
      description: 'No can of soda on the side.',
      price: 4.95
    },
    {
      name: 'Wine',
      description: 'Ask for a recommendation.',
      price: 9
    },
  ];


}]);
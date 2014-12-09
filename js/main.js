;(function(){
  'use strict';

  angular.module('LibraryApp', ['ngRoute'])

    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/table.html',
        controller: 'LibraryAppController',
        controllerAs: 'laCtrl'
      })
      .when('/new', {
        templateUrl: 'views/form.html',
        controller: 'LibraryAppController',
        controllerAs: 'laCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/show.html',
        controller: 'ShowController',
        controllerAs: 'show'

      })
      .when('/:id/edit', {
        templateUrl: 'views/form.html',
        controller: 'EditController',
        controllerAs: 'laCtrl'

      })
      .otherwise({redirectTo: '/'})
    })

    .controller('EditController', function($http, $routeParams, $location){
      var vm = this;
      var id = $routeParams.id;
      var url = 'https://library-app-angular.firebaseio.com/' + id + '.json';
      $http.get(url)
      .success(function(data){
        vm.newBook = data;

      })
      .error(function(err){
        console.log(err);
      })


    vm.addNewBook = function(){
      $http.put(url, vm.newBook)
      .success(function(data){
        $location.path('/')
      })
      .error(function(err){
        console.log(err);
      });
    }
  })



    .controller('ShowController', function($http, $routeParams){
      var vm = this;
      var id = $routeParams.id;
      $http.get('https://library-app-angular.firebaseio.com/' + id + '.json')
        .success(function(data){
          vm.book = data;
        })
        .error(function(err){
          console.log(err);
        })
    })


    .controller('LibraryAppController', function($http, $routeParams){
      var vm = this;
      console.log($routeParams);
      // i don't get why we're doing this here


      $http.get('https://library-app-angular.firebaseio.com/.json')
      .success(function(data){
        vm.books = data;


      })
      .error(function(err){
        console.log("err");

      });


  vm.addNewBook = function(){
    $http.post('https://library-app-angular.firebaseio.com/.json', vm.newBook)
    .success(function(data){
      vm.books[data.name] = vm.newBook;
      vm.newBook = "";
      //vm.books.push(vm.newBook);
      //vm.newBook = freshBook();
    })

  .error(function(err){
    console.log(err);
  })
};


  vm.delete = function(bookId){
    $http.delete('https://library-app-angular.firebaseio.com/' + bookId + '.json' )
    .success(function(){
      delete vm.books[bookId];
      //var index = vm.books.indexOf(bookId);
      //vm.books.splice(index,1);
    })
    .error(function(err){
      console.log(err);
    })
  };


    });


})();
//

;(function(){
  'use strict';

  angular.module('LibraryApp', [])
    .controller('LibraryAppController', function($http){
      var vm = this;
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
      vm.books.push(vm.newBook);
      vm.newBook = freshBook();
    })

  .error(function(err){
    console.log(err);
  })
};


  vm.delete = function(bookId){
    $http.delete('https://library-app-angular.firebaseio.com/' + bookId + '.json' )
    .success(function(){
      var index = vm.books.indexOf(bookId);
      vm.books.splice(index,1);
    })
    .error(function(err){
      console.log(err);
    })
  };



  vm.newBook = freshBook();

  function freshBook(){
    return{

  }
}

    });


})();
//

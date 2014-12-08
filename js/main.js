;(function(){
  'use strict';

  angular.module('LibraryApp', [])
    .controller('LibraryAppController', function(){
      var vm = this;
      // i don't get why we're doing this here

      vm.books = [
      {
        title: 'I Could Pee on This: And Other Poems by Cats',
        author: 'Francesco Marciuliano',
        price: '8.50',
        image: 'http://ecx.images-amazon.com/images/I/51axz2dw8pL._SY344_BO1,204,203,200_.jpg',
        review: 'I could and did pee on this book.',
        commenteremail: 'KibbyKitty@gmail.com'
      },
      {
        title: 'How to Tell If Your Cat Is Plotting to Kill You',
        author: 'The Oatmeal and Matthew Inman',
        price: '8.99',
        image: 'http://ecx.images-amazon.com/images/I/41%2B57E7XY4L._SL300.jpg',
        review: 'my human knows I am trying to kill him.',
        commenteremail: 'Meowzer@gmail.com'
      },
      {
        title: 'Sorry I Barfed on Your Bed (and Other Heartwarming Letters from Kitty)',
        author: 'Allia Zobel Nolan',
        price: '9.99',
        image: 'http://ecx.images-amazon.com/images/I/51OdPpFcX4L._SX258_BO1,204,203,200_.jpg',
        review: 'So good, I barfed on it... twice.',
        commenteremail: 'Colonel.Meow@gmail.com'

      },
      {
        title: 'Grumpy Cat: A Grumpy Book',
        author: 'Grumpy Cat',
        price: '9.30',
        image: 'http://ecx.images-amazon.com/images/I/51SszqxmPyL._SY344_BO1,204,203,200_.jpg',
        review: 'I read this book once ... It was terrible.',
        commenteremail: 'Mr.Meowington@gmail.com'
      },
        ];

  vm.addNewBook = function(){
    vm.books.push(vm.newBook);
    vm.newBook = freshBook();
  };

  vm.delete = function(library){
    var index = vm.books.indexOf(library);
    vm.books.splice(index,1);
  };



  vm.newBook = freshBook();

  function freshBook(){
    return{

  }
}

    });


})();
//

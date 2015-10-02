$(function() {


  var promise = $.getJSON('api/v1/items');
  promise.done(function() {
    console.log(promise);
  })

  promise();
  console.log('hi')

});


$(function () {

  $('#1').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'get',
      dataType: 'text'
    });
  });

  // $('#2').on('click', function(){
  //   $.ajax({
  //     url: 'http://first-ajax-api.herokuapp.com/ping',
  //     method: 'get',
  //     dataType: 'text'
  //   }).done(function(responseData){
  //     console.log(responseData);
  //     $('#step3456').append(responseData);
  //   }).fail(function(){
  //     $('#step3456').append("It's all gone to poop..");
  //   });
  // });

  $('#2').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'get',
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      $('#step3456').append(responseData);
    }).fail(function(jqHXR, textStatus, errorThrown){
      $('#step3456').append(jqHXR.responseText);
    }).always(function(){
      console.log("No probz..");
    });
  });

  $('#3').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'get',
      data: {
        amount: 3 //adds this number to count
      },
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      $('#step7').append(responseData);
    }).fail(function(){
      $('#step7').append("It's all gone to poop..");
    }).always(function(){
      console.log("No probz..");
    });
  });

  $('#4').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'get',
      data: {
        timezone: 'Pacific/Honolulu'
      },
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      $('#step8').append(responseData);
    }).fail(function(){
      $('#step8').append("It's all gone to poop..");
    }).always(function(){
      console.log("No probz..");
    });
  });

  $('#5').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'get',
      dataType: 'html'
    }).done(function(responseData){
      $('#ul1').append(responseData);
    }).fail(function(){
      $('#step9').append("It's all gone to poop..");
    }).always(function(){
      console.log("No probz..");
    });
  });

});

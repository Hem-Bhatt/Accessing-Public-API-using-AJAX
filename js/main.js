$('document').ready(function (){
  const button = $('#button');
  const input = $('#input');
  let nameList = [];
  let UserNameList = [];
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $.ajax({                  //Using Jquery ajax method to get data from the API!
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
  // console.log();
    const $photoDiv = $('#photos');
    const $modalDiv = $('#modals');


    let someHTML = '<div class="maindiv">';
    for(let i=0; i< 12 ; i +=1){                          // creating the HTML for the employee card
        nameList.push(data.results[i].name.first);
        UserNameList.push(data.results[i].login.username);
        someHTML += '<div class="person '+i+'">';        // adds a class corresponding to the index value of the person
        someHTML += '<img class= "images '+i+'" src="' + data.results[i].picture.large + '"></a></li>';
        someHTML += '<div class="textdata '+i+'">';
        someHTML += '<p class="name '+i+'">'+ capitalizeFirstLetter(data.results[i].name.first)+' '+capitalizeFirstLetter(data.results[i].name.last)  +'</p>';
        someHTML += '<p class="email '+i+'">' +data.results[i].email+ '</p>';
        someHTML += '<p class='+i+'>' +capitalizeFirstLetter(data.results[i].location.city)+ '</p>';
        someHTML += '</div></div>';
    }
  someHTML += '</div>';
  $photoDiv.html(someHTML);
  let someHTML2 = "";
  // Create the 12 modal windows!! && hide them!
  for(let i=0; i< 12 ; i +=1){          // Creating the modal Divs!!!!
    someHTML2 += '<div class="modal" id="'+i+'">';
    someHTML2 += '<div class="modal-content">';
    someHTML2 += '<span class="close">&times;</span>';
    someHTML2 += '<img style="border-radius:50%;" src="' + data.results[i].picture.large + '"></a></li>';
    someHTML2 += '<p class="name">'+ capitalizeFirstLetter(data.results[i].name.first)+' '+capitalizeFirstLetter(data.results[i].name.last)  +'</p>';
    someHTML2 += '<p>' +data.results[i].login.username+ '</p>';
    someHTML2 += '<p>' +data.results[i].email+ '</p>';
    someHTML2 += '<p>' +capitalizeFirstLetter(data.results[i].location.city)+ '</p>';
    someHTML2 += '<p style="border-top: solid grey 1px;padding-top:15px;">' +data.results[i].cell+ '</p>';
    someHTML2 += '<p>' +capitalizeFirstLetter(data.results[i].location.street)+', '+capitalizeFirstLetter(data.results[i].location.state)+' '+data.results[i].location.postcode+ '</p>';
    someHTML2 += '<p> Birthday: ' +data.results[i].dob+ '</p>';
    someHTML2 += '</div></div>';
  }
  $modalDiv.html(someHTML2);            // ADDS all the modal html to the DIV!

  // On click event on the person DIV
  const checker = $('div#1');
  $('.modal').hide();
  $('.person').on('click',function (e){
    let indexNumber = $(this).index();
    $('#'+indexNumber).show();                        // show the modal with the corresponding index

  }); // End of the onclick function on main div

  //On click function on the close button span element

  $('.close').on('click',()=> {
      $('.modal').hide();
    });


    }  // End of the success function


  }); // END OF AJAX CALL

button.on('click',()=>{
  // console.log(input.val());
  // console.log(nameList);
  // console.log(UserNameList);
  $('.person').hide();
  let val = input.val();
  for(let i=0; i< 12 ; i +=1){
  if(nameList[i].startsWith(val) || UserNameList[i].startsWith(val)){
      console.log(`${nameList[i]}`);
      $($(`.person`)[`${i}`]).show();
    }
  }
});

}); // END READY

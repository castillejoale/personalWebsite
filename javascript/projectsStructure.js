//Add projects cells programatically

// import 'projectss';

for (i = 0; i < projects.length; i++) {

  var projectDict = projects[i];
  var id = projectDict["id"]
  var divString = '';

  // if (projectDict["projectSession"] == "iOS") {
  //
  //   divString = divString.concat('<div class="cell" id="">');
  //
  //     divString = divString.concat('<div class="cellContent cellContentApp">');
  //
  //       divString = divString.concat('<video loop preload="none"><source src="" type="video/mp4">Your browser does not support the video tag.</source></video>');
  //
  //       divString = divString.concat('<div class="dynamic">');
  //         divString = divString.concat('<div class="dynamic-textContainer">');
  //           divString = divString.concat('<div class="dynamic-text dynamic-textApp"></div>');
  //         divString = divString.concat('</div>');
  //         divString = divString.concat('<div class="dynamic-timesContainer">');
  //           divString = divString.concat('<div class="dynamic-times dynamic-timesApp"></div>');
  //         divString = divString.concat('</div>');
  //       divString = divString.concat('</div>');
  //
  //     divString = divString.concat('</div>');
  //
  //     divString = divString.concat('<div class="cellView">');
  //
  //       divString = divString.concat('<div class="projectTitle"></div>');
  //
  //       divString = divString.concat('<div class="list" id="listProject">');
  //
  //       for(var j = 0; j < projectDict["projectLinks"].length; j++){
  //         divString = divString.concat('<a target="_blank" href="">');
  //           divString = divString.concat('<div class="listElement listElementProject" id=""></div>');
  //         divString = divString.concat('</a>');
  //       }
  //
  //         divString = divString.concat('<div class="listElement listElementProject text" id=""></div>');
  //
  //       divString = divString.concat('</div>');
  //
  //     divString = divString.concat('</div>');
  //
  //   divString = divString.concat('</div>');
  //
  //   var div = $(divString);
  //   $(".app").append(div);
  //
  //
  //   div.first().attr('id', id);
  //   $('#'.concat(id).concat(' .cellContent')).css( "background-image", projectDict["imageSource"] );
  //   $('#'.concat(id).concat(' .cellContentApp video source')).attr('src', projectDict["videoSource"]);
  //   $('#'.concat(id).concat(' .cellView .projectTitle')).text(projectDict["title"]);
  //
  //   $('#'.concat(id).concat(' .cellContent .dynamic .dynamic-textContainer .dynamic-text')).text( projectDict["projectText"] );
  //   $('#'.concat(id).concat(' .cellContent .dynamic .dynamic-timesContainer .dynamic-times')).text( projectDict["projectTimes"] );
  //
  //   for(var j = 0; j < projectDict["projectLinks"].length; j++){
  //
  //     var element = $('#'.concat(id).concat(' .cellView #listProject .listElement')).eq(j);
  //     var classes = element.attr('class');
  //     element.attr('class', classes.concat(" ".concat(projectDict["projectLinks"][j]["linktype"])));
  //
  //     $('#'.concat(id).concat(' .cellView #listProject')).children().eq(j).attr('href', projectDict["projectLinks"][j]["link"]);
  //
  //   }
  //
  // } else

  if (projectDict["projectSession"] == "other") {

    divString = divString.concat('<div class="cell" id="">');
      divString = divString.concat('<div class="cellContent cellContentProject">');
        divString = divString.concat('<div class="dynamic">');
          divString = divString.concat('<div class="dynamic-textContainer">');
            divString = divString.concat('<div class="dynamic-text dynamic-textProject"></div>');
          divString = divString.concat('</div>');
          divString = divString.concat('<div class="dynamic-toolsContainer">');
            divString = divString.concat('<div class="dynamic-tools dynamic-toolsProject"></div>');
          divString = divString.concat('</div>');
          divString = divString.concat('<div class="dynamic-timesContainer">');
            divString = divString.concat('<div class="dynamic-times dynamic-timesProject"></div>');
          divString = divString.concat('</div>');
        divString = divString.concat('</div>');
      divString = divString.concat('</div>');
      divString = divString.concat('<div class="cellView">');
        divString = divString.concat('<div class="projectTitle"></div>');
        divString = divString.concat('<div class="list" id="listProject">');
        for(var j = 0; j < projectDict["projectLinks"].length; j++){
          divString = divString.concat('<a target="_blank" href="">');
            divString = divString.concat('<div class="listElement listElementProject" id=""></div>');
          divString = divString.concat('</a>');
        }
        divString = divString.concat('<div class="listElement listElementProject text" id=""></div>');
        divString = divString.concat('</div>');
      divString = divString.concat('</div>');
    divString = divString.concat('</div>');

    var div = $(divString);
    $("#done").append(div);

    div.attr('id', id);
    $('#'.concat(id).concat(' .cellContent')).css( "background-image", projectDict["imageSource"] );
    $('#'.concat(id).concat(' .cellContent .dynamic .dynamic-textContainer .dynamic-text')).text( projectDict["projectText"] );
    $('#'.concat(id).concat(' .cellContent .dynamic .dynamic-toolsContainer .dynamic-tools')).text( projectDict["tools"] );
    $('#'.concat(id).concat(' .cellContent .dynamic .dynamic-timesContainer .dynamic-times')).text( projectDict["projectTimes"] );
    $('#'.concat(id).concat(' .cellView .projectTitle')).text(projectDict["title"]);

    for(var j = 0; j < projectDict["projectLinks"].length; j++){
      // $('#'.concat(id).concat(' .cellView #listProject .listElement')).eq(j).attr('id', projectDict["projectLinks"][j]["linktype"]);

      var element = $('#'.concat(id).concat(' .cellView #listProject .listElement')).eq(j);
      var classes = element.attr('class');
      element.attr('class', classes.concat(" ".concat(projectDict["projectLinks"][j]["linktype"])));

      $('#'.concat(id).concat(' .cellView #listProject')).children().eq(j).attr('href', projectDict["projectLinks"][j]["link"]);

    }

  }

}

// function handleHoverOfCellContentProject(ev) {

//   console.log ( 'handleHoverOfCellContentProject' );

// 	var target = $(ev.target);
// 	//Get id (project)
// 	var elId = target.attr('id');
// 	console.log ( 'Target: '+ target.attr('class') );
// 	console.log ( 'The mouse is hovering: '+ elId );

// 	//Show dynamic class
// 	$(target).children().fadeIn(200);

// 	//Disactivate full page scrolling
// 	$('html').css({overflow: 'hidden'});

// };

// function handleLeaveOfDynamic() {

//   console.log ( 'handleLeaveOfDynamic' );

// 	// var target = $(ev.target);
// 	// //Get id (project)
// 	// var elId = target.attr('id');
// 	// console.log ( 'Target: '+ target.attr('class') );
// 	// console.log ( 'The mouse is not hovering: '+ elId );
// 	// console.log ( '1No Hover' );

// 	//Hide dynamic class
// 	if ($(".dynamic").is(":visible")){
// 	    $(".dynamic").fadeOut(200);
// 	}

// 	//Activate full page scrolling
// 	$('html').css({overflow: 'scroll'});

// };


// $(".cellContentProject").mouseover(handleHoverOfCellContentProject);
// $(".dynamic").mouseleave(handleLeaveOfDynamic);



function handleHoverOfText(ev) {

  console.log ( 'handleHoverOfText' );

  var target = $(ev.target).parent().parent().parent().children().eq(0);

  // var elId = target.attr('id');
  // console.log ( 'Target: '+ target.attr('class') );
  // console.log ( 'The mouse is hovering: '+ elId );
  // console.log("hey")

  //Show dynamic class
  $(target).children().fadeIn(200);

  // //Disactivate full page scrolling
  // $('html').css({overflow: 'hidden'});
};

function handleLeaveOfText(ev) {

  console.log ( 'handleLeaveOfText' );

  var target = $(ev.target).parent().parent().parent().children().find(".dynamic");
  console.log ( 'Target: '+ target.attr('class') );
  // //Hide dynamic class
  if (target.is(":visible")){
      target.fadeOut(200);
  }

};


$(".text").mouseover(handleHoverOfText);
$(".text").mouseleave(handleLeaveOfText);

$(function(){
    var mouseY = 0;
    var topValue = 0;
    window.addEventListener("mouseout",function(e){
        mouseY = e.clientY;
        if(mouseY<topValue) {
        	handleLeaveOfDynamic();
        }
    },
    false);
});

//Make all the project info dissapear first
var dynamic = document.getElementsByClassName("dynamic");
for(var i = 0; i < dynamic.length; i++)
{
   $(dynamic.item(i)).fadeOut(0);
}

// //Set text of "view" buttons
// $( ".cellView" ).text( "VIEW" );


// function handleClick(ev) {

//   console.log ( 'handleClick' );

// };

// $("body").mouseclick(handleClick);

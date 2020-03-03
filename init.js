var entryCount = 0;
var displayCount = 0;



var opacity = "100%";
var color = "black";
var rotate = "rotate";
var colorv2 = "grey";
var fontWeight = '100';




//add string to numer to create value

var opacityrand = setInterval(function() {

  opacity = Math.floor(Math.random()*100) + "%";

}, 3 * 1000);


var fontWeightRand = setInterval(function() {

  fontWeight = Math.floor(Math.random()*100);

}, 3 * 1000);




//random opacity generator every 12 seconds

// var rbgrand = 

setInterval(function() {
  
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  color = "rgb(" + r + ", " + g + "," + b + ")";

}, 2 * 1000);







//------------------------------------------------------------

//onclick option for random color generator (FIX IT)

// function greyMuted (r) {
  
//   var r = Math.floor(Math.random() * 255);
//   var g = Math.floor(Math.random() * 255);
//   var b = Math.floor(Math.random() * 255);
//   color = "rgb(" + r + ", " + g + "," + b + ")";

// };

// setInterval(function(dimwit) {
//   var r = Math.floor(Math.random() * 255);
//   var b = Math.floor(Math.random() * 255);
  
//   color = "rgb(" + r + "," + b + ")";
// }, 2 * 1000);

//------------------------------------------------------------





function createLetter(key) {
  entryCount += 1;
  displayCount += 1;
  var cursor = document.querySelector("#cursor");
  var span = document.createElement("span");
  var htmlSel = document.querySelector('html');
  var glowStick = document.querySelector('glow');
  span.innerHTML = key;
  cursor.parentNode.insertBefore(span, cursor);
  span.className = 'zoomInDown'
  
  // if (onclick2();){
  //   span.style.fontsize = 500%;
  // };
  


  if (displayCount < 5) {

  } else if (displayCount < 10) {
    span.style.fontSize = "80%" ;
  } else if (displayCount < 12){
    span.style.fontWeight ='700';
  } else if (displayCount < 15) {
    span.style.fontSize = "60%" ;
  }
    else if (displayCount < 18){
    span.style.fontWeight ='700';
  } else if (displayCount < 20) {
    span.style.fontSize = "50%" ;
  } else if (displayCount < 25) {
    span.style.fontSize = "40%" ;
    // more increments
  } 
  else if (displayCount < 27){
    span.style.fontWeight ='700';
    span.className = 'glow'
  }
  else if (displayCount < 30) {
  span.style.fontsize = "70px"}
   else if (displayCount < 35) {
  span.style.fontsize = "60%"}
   else if (displayCount < 40) {
  span.style.fontsize = "70%"}
   else if (displayCount < 45) {
  span.style.fontsize = "80%"}
  else if (displayCount < 50) {
    span.style.fontsize = "90%";
    span.className = 'flipInX';
  }
  else if (displayCount < 55) {
    span.style.fontSize = "80%" ;
  } 
  else if (displayCount < 57){
    span.style.fontWeight ='700';
  }
  else if (displayCount < 60) {
    span.style.fontSize = "70px" ;
  } else if (displayCount < 65) {
    span.style.fontSize = "50%" ;
  } else if (displayCount < 70) {
    span.style.fontSize = "40%" ;
    // more increments
  } 
  else if (displayCount < 73){
    span.style.fontWeight ='700';
    span.className = 'glow';
  }
  else if (displayCount < 75) {
  span.style.fontsize = "50%"
  span.className = 'glow';}
   else if (displayCount < 80) {
  span.style.fontsize = "60%"}
  else if (displayCount < 83){
    span.style.fontWeight ='700';
  }
   else if (displayCount < 85) {
  span.style.fontsize = "70%"}
   else if (displayCount < 90) {
  span.style.fontsize = "80%"}
  else if (displayCount < 95) {
    span.style.fontsize = "90%";
    span.className = 'zoomInDown';
  }
 else if (displayCount < 100) {
    span.style.fontSize = "80%" ;
  } else if (displayCount < 105) {
    span.style.fontSize = "60%" ;
    span.className = 'glow'
  } else if (displayCount < 110) {
    span.style.fontSize = "50%" ;
  } else if (displayCount < 115) {
    span.style.fontSize = "40%" ;
    // more increments
  } 
  else if (displayCount < 120) {
  span.style.fontsize = "50%"}
   else if (displayCount < 125) {
  span.style.fontsize = "60%"}
   else if (displayCount < 130) {
  span.style.fontsize = "70%"}
   else if (displayCount < 135) {
  span.style.fontsize = "80%"}
  else if (displayCount < 140) {
    span.style.fontsize = "90%";
    span.className = 'glow';
    // htmlSel.scrowllWin();
  }
  else if (displayCount < 145) {
    span.style.fontSize = "80%" ;
  } 
  else if (displayCount < 150) {
    span.style.fontSize = "60%" ;
  } 
  else if (displayCount < 155) {
    span.style.fontSize = "50%" ;
  } 
  else if (displayCount < 160) {
    span.style.fontSize = "40%" ;
    // more increments
  } 
  else if (displayCount < 163) {
  span.style.fontsize = "50%"}
   else if (displayCount < 170) {
  span.style.fontsize = "60%";
  span.className = 'glow';}
   else if (displayCount < 185) {
  span.style.fontsize = "70%"}
   else if (displayCount < 190) {
  span.style.fontsize = "80%"}
  else if (displayCount < 200) {
    span.style.fontsize = "90%";
  }
 else if (displayCount < 205) {
  span.style.fontsize = "80%";}
   else if (displayCount < 210) {
  span.style.fontsize = "160%";}
   else if (displayCount < 215) {
  span.style.fontsize = "40%";
  span.className = 'glow';}
   else if (displayCount < 225) {
  span.style.fontsize = "20%"}
  else if (displayCount < 230) {
    span.style.fontsize = "90%";
  }
  else if (displayCount < 240) {
    span.style.fontSize = "10%" ;
  } else if (displayCount < 250) {
    span.style.fontSize = "20%" ;
  } else if (displayCount < 255) {
    span.style.fontSize = "30%" ;
  } else if (displayCount < 260) {
    span.style.fontSize = "40%" ;
    // more increments
  } 
  else if (displayCount < 263) {
  span.style.fontsize = "50%"}
   else if (displayCount < 270) {
  span.style.fontsize = "60%"}
   else if (displayCount < 285) {
  span.style.fontsize = "70%";
  span.className = 'glow'}
   else if (displayCount < 290) {
  span.style.fontsize = "80%";}
  else if (displayCount < 300) {
    span.style.fontsize = "90%";
  }

  span.style.opacity = opacity;
  span.style.color = color;
  span.style.rotate = rotate;



 

}




function deleteElement() {
  entryCount += 1;
  var letter = document.querySelector("#cursor").previousSibling;
  if (letter) {
    letter.remove();
    displayCount -= 1;
    if (displayCount < 0) {
      displayCount = 0;
    }
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 8) {
    deleteElement();
  }
  if (e.keyCode == 13) {
    createLetter("<br>");
    // document.getElementById("#container").style.color="white";
    // document.style.background.color="black";
  }

  if (e.key == " ") {
    createLetter("&nbsp;");
  }
  

  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("abcdefghijklmnopqrstuvwxyz0123456789?/".includes(e.key.toLowerCase())) {
    createLetter(e.key);
  }
  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);

}

 function onclick2(j){

  var object = document.getElementById('#minuit');
  var area = document.querySelector('body');
  var maincont = document.querySelector('#container');
  var lettercon = document.querySelector('.letterz');
  var teetle = document.querySelector('h1');
  var fx = document.querySelector('.glow');
  var coloredz = true
  dimwit = document.querySelector('dimwit')



  area.style.background = "black";
  maincont.style.color = "white";
  lettercon.style.color = "white";
  maincont.className ='flashed';
  maincont.style.fontWeight = '100';
  teetle.style.color = 'white';
  teetle.style.background = 'black';
  fx.style.visibility = 'visible';




    if (coloredz === true) {
        dimwit.style.visibility = "visible";
        coloredz = false;
} else {
        dimwit.style.visibility = "hidden";
        coloredz = true;
       }


  // maincont.style.fontStyle = 'italic';
  // clearInterval(rbgrand);



};

function onclick3(b) {

var objectv2 = document.getElementById('#solar');
var areav2 = document.querySelector('body');
var maincontv2 = document.querySelector('#container');
var letterconv2 = document.querySelector('.letterz');
var teetle2 = document.querySelector('h1')
// var image = document.querySelector('img')


  // image.style = "visible"
  areav2.style.background = "#b5b5b5";
  maincontv2.style.color = 'white';
  letterconv2.style.color = "#989898ad";
  maincontv2.className ='zoomOut';
  teetle2.style.background = 'yellow';
  teetle2.style.color = 'black';
  teetle2.className('glow').visibility = 'hidden';
  areav2.style.fontsize = '300%';

  // maincontv2.style.filter = 'filter' + ':' + 'invert' + 100 + '%';
  // areav2.style.color = greyMuted();


}

function scrollWin(q) {
  window.scrollTo(0, 500);
}


// var element1 = document.getElementById("#container");

// if (element1.scrollIntoView = true) {



// function() = element1.scrollIntoView();
// element1.scrollIntoView(false);
// element1.scrollIntoView({block: "end"});
// element1.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

// function zoomIn(o){

//   var zooncont = document.querySelector('.zoomInDown');
 

//   span.innerHTML.className = ('.zoomInDown');



// }
// function zoomIn(o){
//   entryCount += 1;
//   displayCount += 1;
//   var cursor = document.querySelector("#cursor");
//   var span = document.createElement("span");
//   span.innerHTML = key;
//   cursor.
//   cursor.parentNode.insertBefore(span, cursor);

//   if (displayCount == 1 ){

//     span.className='.zoomInDown'
//   };

//   // var zooncont = document.querySelector('.zoomInDown');
 

//   span.innerHTML = zooncont



// }










//-----------------------------------------------------------------------------------------


//ATTEMPTED CODE AND LIBRARY REFERENCE:


// var Example = Example || {};

// Example.events = function() {
//     var Engine = Matter.Engine,
//         Render = Matter.Render,
//         Runner = Matter.Runner,
//         Body = Matter.Body,
//         Events = Matter.Events,
//         Composite = Matter.Composite,
//         Composites = Matter.Composites,
//         Common = Matter.Common,
//         MouseConstraint = Matter.MouseConstraint,
//         Mouse = Matter.Mouse,
//         World = Matter.World,
//         Bodies = Matter.Bodies;

//     // create engine
//     var engine = Engine.create(),
//         world = engine.world;

//     // create renderer
//     var render = Render.create({
//         element: document.body,
//         engine: engine,
//         options: {
//             width: 800,
//             height: 600,
//             wireframes: false
//         }
//     });

//     Render.run(render);

//     // create runner
//     var runner = Runner.create();
//     Runner.run(runner, engine);

//     // an example of using composite events on the world
//     Events.on(world, 'afterAdd', function(event) {
//         console.log('added to world:', event.object);
//     });

//     // an example of using beforeUpdate event on an engine
//     Events.on(engine, 'beforeUpdate', function(event) {
//         var engine = event.source;

//         // apply random forces every 5 secs
//         if (event.timestamp % 5000 < 50)
//             shakeScene(engine);
//     });

//     // an example of using collisionStart event on an engine
//     Events.on(engine, 'collisionStart', function(event) {
//         var pairs = event.pairs;

//         // change object colours to show those starting a collision
//         for (var i = 0; i < pairs.length; i++) {
//             var pair = pairs[i];
//             pair.bodyA.render.fillStyle = '#333';
//             pair.bodyB.render.fillStyle = '#333';
//         }
//     });

//     // an example of using collisionActive event on an engine
//     Events.on(engine, 'collisionActive', function(event) {
//         var pairs = event.pairs;

//         // change object colours to show those in an active collision (e.g. resting contact)
//         for (var i = 0; i < pairs.length; i++) {
//             var pair = pairs[i];
//             pair.bodyA.render.fillStyle = '#333';
//             pair.bodyB.render.fillStyle = '#333';
//         }
//     });

//     // an example of using collisionEnd event on an engine
//     Events.on(engine, 'collisionEnd', function(event) {
//         var pairs = event.pairs;

//         // change object colours to show those ending a collision
//         for (var i = 0; i < pairs.length; i++) {
//             var pair = pairs[i];

//             pair.bodyA.render.fillStyle = '#222';
//             pair.bodyB.render.fillStyle = '#222';
//         }
//     });

//     var bodyStyle = { fillStyle: '#222' };

//     // scene code
//     World.add(world, [
//         Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: bodyStyle }),
//         Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: bodyStyle }),
//         Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: bodyStyle }),
//         Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: bodyStyle })
//     ]);

//     var stack = Composites.stack(70, 100, 9, 4, 50, 50, function(x, y) {
//         return Bodies.circle(x, y, 15, { restitution: 1, render: bodyStyle });
//     });
    
//     World.add(world, stack);

//     var shakeScene = function(engine) {
//         var bodies = Composite.allBodies(engine.world);

//         for (var i = 0; i < bodies.length; i++) {
//             var body = bodies[i];

//             if (!body.isStatic && body.position.y >= 500) {
//                 var forceMagnitude = 0.02 * body.mass;

//                 Body.applyForce(body, body.position, { 
//                     x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]), 
//                     y: -forceMagnitude + Common.random() * -forceMagnitude
//                 });
//             }
//         }
//     };

//     // add mouse control
//     var mouse = Mouse.create(render.canvas),
//         mouseConstraint = MouseConstraint.create(engine, {
//             mouse: mouse,
//             constraint: {
//                 stiffness: 0.2,
//                 render: {
//                     visible: false
//                 }
//             }
//         });

//     World.add(world, mouseConstraint);

//     // keep the mouse in sync with rendering
//     render.mouse = mouse;

//     // an example of using mouse events on a mouse
//     Events.on(mouseConstraint, 'mousedown', function(event) {
//         var mousePosition = event.mouse.position;
//         console.log('mousedown at ' + mousePosition.x + ' ' + mousePosition.y);
//         shakeScene(engine);
//     });

//     // an example of using mouse events on a mouse
//     Events.on(mouseConstraint, 'mouseup', function(event) {
//         var mousePosition = event.mouse.position;
//         console.log('mouseup at ' + mousePosition.x + ' ' + mousePosition.y);
//     });

//     // an example of using mouse events on a mouse
//     Events.on(mouseConstraint, 'startdrag', function(event) {
//         console.log('startdrag', event);
//     });

//     // an example of using mouse events on a mouse
//     Events.on(mouseConstraint, 'enddrag', function(event) {
//         console.log('enddrag', event);
//     });

//     // fit the render viewport to the scene
//     Render.lookAt(render, {
//         min: { x: 0, y: 0 },
//         max: { x: 800, y: 600 }
//     });

//     // context for MatterTools.Demo
//     return {
//         engine: engine,
//         runner: runner,
//         render: render,
//         canvas: render.canvas,
//         stop: function() {
//             Matter.Render.stop(render);
//             Matter.Runner.stop(runner);
//         }
//     };
// };

// if (typeof module !== 'undefined') {
//     module.exports = Example[Object.keys(Example)[0]];
// }


//---------------------------------------------------------------------------------------------


// function changeDivColor(key) {
//     if (key === 32 ) {
//         document.getElementById("container").style.color="white";
//     } else if (key == 32) {
//         document.getElementById("container").style.background="black";
//     }
// }




// function changeProperty ('#container', event, color) {
//   if(!"#container" || !event || !.color){

//   }

// }

// function createElement(k){
//   var lowercase = k.toLower();
//   keycount[lowercase] = keycount[lowercase] + 1;
//   console.log(keycount[lowercase]);

// if (keycount[lowercase] = keycount[lowercase] + 1;){




// }




//   // document.getElementByID('container').span.innerHTML = "";
//   // document.deleteElement().style.display = "none";
// };





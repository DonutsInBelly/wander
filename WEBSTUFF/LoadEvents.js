function Event(idI,titleI,descriptionI) {
 
 var divEvent=document.createElement('div');
 var divEventTitle=document.createElement('div');
 var divEventDes=document.createElement('div');
 var divEventButton = document.createElement('button');
 
 divEvent.id = 'event';
 divEventTitle.id = 'eventTitle';
 divEventDes.id = 'eventDescription';
 
 
 
 divEventTitle.innerHTML=titleI;
 divEventDes.innerHTML=descriptionI;
 
 divEvent.appendChild(divEventTitle);
 divEvent.appendChild(divEventDes);
 
 window.alert(document.getElementsByName("addHere")[1]);
 
 //add the event div to the the eventBox div
// document.getElementsByTagName('body')[0].appendChild(divEvent);
 
 var id = idI;
  
 this.join= function(){
	//Send event ID and user name
};
this.on
 
};
//event div calls this js. It the looks at the data base and creates an event div dynamicly for each event. 

// get data from data base
// for each event make an event
//add that div to a child of the eventBox
//

var eventOne= new Event(1,"Moo","The cow goes moo");
var eventOne= new Event(2,"Moo","The cow goes moo");
var eventOne= new Event(3,"Moo","The cow goes moo");
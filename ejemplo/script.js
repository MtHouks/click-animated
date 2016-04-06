function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();

$('.wapper').click(function(event) {
	// alert("hola");
	
	// $('#ima_id').removeClass();
	$('#ima_id').addClass('GoUpBig');
	$(this).one(transitionEvent,
              function(event) {
              	alert("holis");
    // Do something when the transition ends
  });
});
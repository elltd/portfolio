//role change
function changeRole(){
    var x = document.getElementById("role-change");
    if(x.innerHTML == "a graphic designer"){
        x.innerHTML = "an artist";
    }
    else if(x.innerHTML == "an artist"){
        x.innerHTML = "a cat lover";
    }
    else if(x.innerHTML == "a cat lover"){
        x.innerHTML = "a radio DJ";
    }
    else if(x.innerHTML == "a radio DJ"){
        x.innerHTML = "a graphic designer";
    }
}

//role change automatic
function displayWord() {
	var words = document.getElementsByClassName("toggle");
  var wordCounter = 0;
  
  setInterval(updateWord,3000);
  
  function updateWord() {
  	if (wordCounter >= words.length) wordCounter = 0;
  	for(var i = 0; i < words.length; i++) {
    	words[i].classList.remove('active');
    }
		words[wordCounter].classList.add('active');
   	wordCounter++;
  }
}
displayWord();


//tooltip follow cursor
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.project').forEach(function(itemElem){
        itemElem.addEventListener('mousemove', function(e){
            var tooltip = this.querySelector('.tooltiptext');
            if (!tooltip) return; 

            var rect = this.getBoundingClientRect();

            var tooltipX = e.clientX - rect.left;
            var tooltipY = e.clientY - rect.top;

            var offsetX = 20;
            var offsetY = 20;

            tooltip.style.left = (tooltipX + offsetX) + 'px';
            tooltip.style.top = (tooltipY + offsetY) + 'px';
            tooltip.style.visibility = 'visible';
        });

        itemElem.addEventListener('mouseleave', function() {
            var tooltip = this.querySelector('.tooltiptext');
            if (tooltip) {
                tooltip.style.visibility = 'hidden';
            }
        });
    });
});


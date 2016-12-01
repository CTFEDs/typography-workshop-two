var toggleExample = function(currentButton) {
  var example = currentButton.previousElementSibling,
      feature = currentButton.getAttribute('data-feature');

  if (example.className.indexOf(feature) === -1) {
    example.classList.add(feature);
    currentButton.innerHTML = "revert";
  } else {
    example.classList.remove(feature);
    currentButton.innerHTML = "enable";
  }
}

var toggleButtons = document.querySelectorAll(".btn-primary.toggle"),
    toggleButtonsLength = toggleButtons.length;

for (var i = 0; i < toggleButtonsLength; i += 1) {
  toggleButtons[i].addEventListener("click", function() { toggleExample(this) });
}
/*! ctfeds-typography-workshop 01-12-2016 */
for(var toggleExample=function(a){var b=a.previousElementSibling,c=a.getAttribute("data-feature");-1===b.className.indexOf(c)?(b.classList.add(c),a.innerHTML="revert"):(b.classList.remove(c),a.innerHTML="enable")},toggleButtons=document.querySelectorAll(".btn-primary.toggle"),toggleButtonsLength=toggleButtons.length,i=0;toggleButtonsLength>i;i+=1)toggleButtons[i].addEventListener("click",function(){toggleExample(this)});
var toggleExample = function(currentButton) {
  var example = currentButton.previousElementSibling,
      feature = currentButton.getAttribute('data-feature');

  if (example.className.indexOf(feature) === -1) {
    example.classList.add(feature);
    currentButton.innerHTML = "revert";
  } else {
    example.classList.remove(feature);
    currentButton.innerHTML = "enable";
  }
}

var toggleButtons = document.querySelectorAll(".btn-primary.toggle"),
    toggleButtonsLength = toggleButtons.length;

for (var i = 0; i < toggleButtonsLength; i += 1) {
  toggleButtons[i].addEventListener("click", function() { toggleExample(this) });
}
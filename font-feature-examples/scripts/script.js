var toggleExample = function(currentButton) {
  var example = currentButton.previousElementSibling,
      feature = currentButton.getAttribute('data-feature');

  if (example.className.indexOf(feature) === -1) {
    example.classList.add(feature);
  } else {
    example.classList.remove(feature);
  }
}

var toggleButtons = document.querySelectorAll(".btn-primary.toggle"),
    toggleButtonsLength = toggleButtons.length;

for (var i = 0; i < toggleButtonsLength; i += 1) {
  toggleButtons[i].addEventListener("click", function() { toggleExample(this) });
}
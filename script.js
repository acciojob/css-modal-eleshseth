//your JS code here. If required.
// Get the modal element
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const openModalBtn = document.getElementById('openModal');

// Get the <span> element that closes the modal
const closeModalBtn = document.querySelector('.close-modal');

// Open modal when the button is clicked
openModalBtn.onclick = function() {
  modal.style.display = 'flex';
}

// Close the modal when the close button is clicked
closeModalBtn.onclick = function() {
  modal.style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

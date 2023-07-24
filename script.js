// Selecting the modal, overlay, close button, and all elements that trigger modal opening
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelectorAll('.show-modal');

// Function to open the modal and display the overlay
const openModalWindow = () => {
  modal.classList.remove('hidden');   // Remove the 'hidden' class to show the modal
  overlay.classList.remove('hidden'); // Remove the 'hidden' class to show the overlay
};

// Function to close the modal and hide the overlay
const closeModalWindow = () => {
  modal.classList.add('hidden');      // Add the 'hidden' class to hide the modal
  overlay.classList.add('hidden');    // Add the 'hidden' class to hide the overlay
};

// Adding click event listeners to all elements that trigger modal opening
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', openModalWindow);
}

// Adding click event listener to the close button to close the modal
closeModal.addEventListener('click', closeModalWindow);

// Adding click event listener to the overlay to close the modal if clicked outside the modal
overlay.addEventListener('click', closeModalWindow);

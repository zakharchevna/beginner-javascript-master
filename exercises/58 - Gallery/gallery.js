function Gallery(gallery) {
  if(!gallery) {
    throw new Error ('There is no Gallery found');
  }
  const images = Array.from(gallery.querySelectorAll('img'));
  console.log(images);

  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function showImage(el) {
    if(!el) {
      console.log('there is no image to show');
      return;
    }
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.desctiption;
    currentImage = el;
    openModal();
  }
  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function openModal() {
    if(modal.matches('.open')) {
      console.log('It is alredy opened');
      return
    }
    modal.classList.add('open');
    console.log('Opening modal');
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    //TODO: add Event Listener for clicks and keyboard
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    console.log(e.key + ' -> closing modal')
    if (e.key === 'Escape') return closeModal();
    if(e.key === 'ArrowRight') return showNextImage();
    if(e.key === 'ArrowLeft') return showPrevImage();
  }

  

  //There are EventListeners 
  images.forEach((image) => image.addEventListener('click', e => showImage(e.currentTarget)));
  images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      if(e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    })
  })
  modal.addEventListener('click', handleClickOutside);
  
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
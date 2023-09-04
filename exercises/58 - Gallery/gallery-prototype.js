function Gallery(gallery) {
  if(!gallery) {
    throw new Error ('There is no Gallery found');
  }

  this.gallery = gallery;
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');
  

  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  //There are EventListeners 
  this.images.forEach((image) => image.addEventListener('click', e => this.showImage(e.currentTarget)));
  this.images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      if(e.key === 'Enter') {
        this.showImage(e.currentTarget);
      }
    })
  })
  this.modal.addEventListener('click', this.handleClickOutside);
  
}

  

Gallery.prototype.showImage = function(el) {
  if(!el) {
    console.log('there is no image to show');
    return;
  }
  console.log(el);
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.desctiption;
  this.currentImage = el;
  this.openModal();
}
Gallery.prototype.showNextImage = function() {
  this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
}

Gallery.prototype.showPrevImage = function() {
  this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}

Gallery.prototype.openModal = function() {
  if(this.modal.matches('.open')) {
    console.log('It is alredy opened');
    return
  }
  
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);

  this.modal.classList.add('open');
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
}

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  //TODO: add Event Listener for clicks and keyboard
}

Gallery.prototype.handleClickOutside = function(e) {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
}

Gallery.prototype.handleKeyUp = function(e) {
  if (e.key === 'Escape') return this.closeModal();
  if(e.key === 'ArrowRight') return this.showNextImage();
  if(e.key === 'ArrowLeft') return this.showPrevImage();
}


const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
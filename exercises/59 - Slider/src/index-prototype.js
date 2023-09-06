function Slider(slider) {
  if(!(slider instanceof Element)) {
    throw new Error ('There is no slide passed in');
  }
  this.slider = slider;

  this.slides = this.slider.querySelector('.slides');
  const prevButton = this.slider.querySelector('.goToPrev');
  const nextButton = this.slider.querySelector('.goToNext');

  // this.prevButtons = document.querySelectorAll('.goToPrev');
  // this.nextButtons = document.querySelectorAll('.goToNext');
  // this.focusedButton = null;

  // this.prevButtons.forEach(button => {
  //   button.addEventListener('focus', () => {
  //     this.focusedButton = button;
  //   });
  // });
  
  // this.nextButtons.forEach(button => {
  //   button.addEventListener('focus', () => {
  //     this.focusedButton = button;
  //   });
  // });

  // function handleKeyDown(e) {
  //   if (slider.focusedButton) {
  //     if (e.key === 'ArrowRight') {
  //       slider.move();
  //     } else if (e.key === 'ArrowLeft') {
  //       slider.move('back');
  //     }
  //   }
  // }
  
  // slider.addEventListener('keydown', handleKeyDown);
  
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
  
  this.startSlider();
  this.applyClasses();
}

Slider.prototype.startSlider = function() {
  this.current = 
  this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev = 
  this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
}

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
}

Slider.prototype.move = function(direction) {
  const classesToRemove = ['prev', 'next', 'current'];
  this.current.classList.remove(...classesToRemove);
  this.prev.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  // [prev, current, next].forEach(el => el.classList.remove(...classesToRemove));
  if(direction === 'back') {
    [this.prev,this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev, 
      this.current
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current, 
      this.next, 
      this.next.nextElementSibling || this.slides.firstElementChild
    ];
  }
  this.applyClasses();
}

const slider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));


// dogSlider.addEventListener('keyup', (event) => {
//   if (dogSlider.focusedButton) {
//     if (event.key === 'ArrowRight') {
//       dogSlider.move();
//     } else if (event.key === 'ArrowLeft') {
//       dogSlider.move('back');
//     }
//   }
// });
// Add onfocus event to each button




// Add event listener for Arrow keys


// window.addEventListener('focus', () => handleKeyUp)


// function handleKeyUp(e) {
//     console.log(e.key)
//     if(e.key === 'ArrowRight') {
//       move();
//     } else if (e.key === 'ArrowLeft') {
//       move('back');
//     }
//   }

// dogSlider.arrowMove = function() {
//   this.addEventListener('keyup', handleKeyUp);
// }
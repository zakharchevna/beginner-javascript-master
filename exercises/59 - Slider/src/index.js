function Slider(slider) {
  console.log(slider);
  if(!(slider instanceof Element)) {
    throw new Error ('There is no slide passed in');
  }
  let prev;
  let current;
  let next;

  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');
  console.dir(prevButton, nextButton)
  
  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.table({prev, current, next});
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    const classesToRemove = ['prev', 'next', 'current'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    // [prev, current, next].forEach(el => el.classList.remove(...classesToRemove));
    if(direction === 'back') {
      [prev,current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev, 
        current
      ];
    } else {
      [prev, current, next] = [
        current, 
        next, 
        next.nextElementSibling || slides.firstElementChild
      ];
    }
    applyClasses();
  }


  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
  // function handleKeyUp(e) {
  //   console.log(e.key)
  //   if(e.key === 'ArrowRight') {
  //     move();
  //   } else if (e.key === 'ArrowLeft') {
  //     move('back');
  //   }
  // }
  startSlider();
  applyClasses();
}

const slider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));

// dogSlider.addEventListener('keyup', handleKeyUp);


function Gallery(gallery) {
  if(!gallery) {
    throw new Error ('There is no Gallery found');
  }
  const images = Array.from(gallery.querySelectorAll('img'));
  console.log(images);

  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');

  function showImage(el) {
    if(!el) {
      console.log('there is no image to show');
      return;
    }
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
  }


  images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
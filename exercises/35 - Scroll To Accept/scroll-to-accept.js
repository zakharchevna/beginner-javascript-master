function scrollToAccept() {
  const terms = document.querySelector(".terms-and-conditions");
  
  if (!terms) {
    return;
  }

  const watch = document.querySelector(".watch");
  const button = document.querySelector(".accept");

  function obCallBack(load) {
    // console.log(load[0]);
    // console.log(load[0].isIntersecting);
    // console.log(load[0].intersectionRatio);
    if(load[0].intersectionRatio === 1) {
      button.disabled = false;
      ob.unobserve(terms.lastElementChild)
    } 
    // else {
    //   button.disabled = true;
    // }
  }

  const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
  });
}
//   ob.observe(terms.lastElementChild);

//   function handleScrollTerms(event) {
    // console.log(event.currentTarget.scrollTop);
    // console.log(event.currentTarget.scrollHeight);
//   }
  
//   terms.addEventListener("scroll", handleScrollTerms);
// }

// scrollToAccept();
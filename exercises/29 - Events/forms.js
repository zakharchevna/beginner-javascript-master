// console.log('it works');
const wesBosLink = document.querySelector('.wesbos');
wesBosLink.addEventListener('click', function(event) {
  // event.preventDefault();
  const shouldChangePage = confirm("This website might be malicious! Are you sure you want go there?");
  // if(shouldChangePage) {
  //   window.location = event.currentTarget.href;
  // }
  if(!shouldChangePage) {
    event.preventDefault();
  }
  console.log(shouldChangePage);

});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', event => {
  console.log(event); 
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if(name.includes('chad')) {
    alert("Sorry bro");
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);



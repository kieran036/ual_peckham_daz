const aboutButton = document.getElementById('about-button');
aboutButton.textContent = 'Tell me more...'

const moreInfoContainer = document.querySelector('.more-info');

var showMore = false;

function showMoreInfo(){
  console.log('button clicked!');

  showMore = !showMore;

  if(showMore) { // show example of strict ===
    console.log('true!!');
    let information = document.createElement('p');
    information.textContent = 'I really like cheese';
    information.classList.add('info-paragraph');
    moreInfoContainer.appendChild(information);
    aboutButton.textContent = 'Woah! Too much info!'
    aboutButton.classList.add('btn-red');
  } else {
    console.log('false!!');
    let information = moreInfoContainer.querySelector('.info-paragraph');
    if (information) {
      moreInfoContainer.removeChild(information);
      aboutButton.textContent = 'Tell me more...'
      aboutButton.classList.remove('btn-red');
    }
  }
}

aboutButton.addEventListener('click', showMoreInfo);
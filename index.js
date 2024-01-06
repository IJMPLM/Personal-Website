document.addEventListener('DOMContentLoaded', function () {
  const firstSchoolToggle = document.querySelector('.schoolToggle');
  if (firstSchoolToggle) {
    firstSchoolToggle.classList.add('active');
    updateSchoolInfo();
  }
  
  const textList = ["Greetings!","Visitor!","From","John","Michael", "Iwag", "Welcome!", "To My", "Page!", "Enjoy!"];
  const typingElement = document.querySelector('.typed');
  let index = 0;

  function updateText() {
    typingElement.textContent = textList[index];
    index++; 
    console.log(index);

    if (index === 10) {
      clearInterval(intervalId);
    }
  }

  function checkWidth() {
    const currentWidth = parseFloat(getComputedStyle(typingElement).width);

    if (currentWidth < 10) {
      updateText();
    }
  }

  const intervalId = setInterval(checkWidth, 100);
  updateText();
});

function toLore() {
  window.location.href = '/About-Me/lore.html';
}

function toggleActive(element) {
  document.querySelectorAll('.schoolToggle').forEach(item => {
      item.classList.remove('active');
  });

  element.classList.add('active');
  console.log("toggle happened");
  updateSchoolInfo();
}

function toggleContent(element) {
  element.classList.toggle('active');
}

function updateSchoolInfo() {
  const activeDivs = document.querySelectorAll('.schoolToggle.active');
  const schoolInfoElements = document.querySelectorAll('.schoolInfo');

  // Reset the visibility of all schoolInfo elements
  schoolInfoElements.forEach(infoElement => {
    infoElement.style.display = 'none';
  });

  // Show the schoolInfo for the active divs
  activeDivs.forEach(activeDiv => {
    const schoolInfoElement = activeDiv.querySelector('.schoolInfo');
    if (schoolInfoElement) {
      schoolInfoElement.style.display = 'block';
    }
  });

  console.log('School info updated successfully');
}

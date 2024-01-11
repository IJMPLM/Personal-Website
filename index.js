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
  window.location.href = 'About-Me/lore.html';
}

function toggleActive(element) {
  document.querySelectorAll('.schoolToggle').forEach(item => {
      item.classList.remove('active');
  });

  element.classList.add('active');
  console.log("toggle happened");
  updateSchoolInfo();
}

function updateSchoolInfo() {
  const activeDiv = document.querySelector('.schoolToggle.active');
  const schoolInfoElements = document.querySelectorAll('.schoolInfo');
  
  // Reset the visibility of all schoolInfo elements
  schoolInfoElements.forEach(infoElement => {
    infoElement.style.display = 'none';
  });

  switch(activeDiv.id+"Info") {
    case "stasInfo": {
      const whatInfo = document.getElementById('stasInfo');
      whatInfo.style.display = 'flex';
      console.log("stas");
      return 'stas';
    }
    case "pshsInfo": {
      const whatInfo = document.getElementById('pshsInfo');
      whatInfo.style.display = 'flex';
      console.log("pshs");
      return 'pshs';
    }
    case "plmInfo": {
      const whatInfo = document.getElementById('plmInfo');
      whatInfo.style.display = 'flex';
      console.log("plm");
      return 'plm';
    }
  }

  
}

function toggleActive2(element) {
  document.querySelectorAll('.infoToggle').forEach(item => {
      item.classList.remove('active');
  });

  element.classList.add('active');

  toggleContent(element);
}

function toggleContent(element){
  var className = element.classList[0];

  // Hide all contentInfo elements
  var contentInfoElements = document.querySelectorAll('.contentInfo > div');
  contentInfoElements.forEach(function (contentInfoElement) {
      contentInfoElement.style.display = 'none';
  });
  //specify which school header will be selected
  var schoolID = '#'+updateSchoolInfo()+'Info';
  // Display the contentInfo element with the same class as the clicked header
  var correspondingContent = document.querySelector( schoolID+' .contentInfo > .' + className);
  
  console.log(correspondingContent);
  if (correspondingContent) {
      correspondingContent.style.display = 'block';
  }
}

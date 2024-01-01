document.addEventListener('DOMContentLoaded', function () {
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

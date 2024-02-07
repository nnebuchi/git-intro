  alert('Welcome to this interface');

    const inputTxt = document.getElementById('inputTxt');
    const btn = document.getElementById('btn');
    const newDiv = document.getElementById('new');
    btn.addEventListener('click', function() {
      const inputValue = inputTxt.value;
      const newParagraph = document.createElement('p');
      newParagraph.textContent = inputValue;
      newDiv.appendChild(newParagraph);
      inputTxt.value = '';
    });
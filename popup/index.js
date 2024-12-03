function registerScript() {
  const textinput = document.getElementById('text')
   console.log(textinput.value);
   browser.runtime.sendMessage(textinput.value);
  }


const button = document.getElementById('button')
button.addEventListener('click', registerScript)

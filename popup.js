document.querySelectorAll('button[data-value]').forEach(button => {
    button.addEventListener('click', () => {
      const titleValue = button.getAttribute('data-value');
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: activateRadiosByTitle,
          args: [titleValue]
        });
      });
    });
  });
  
  function activateRadiosByTitle(titleValue) {
    document.querySelectorAll('input[type="radio"]').forEach(input => {
      if (input.title === titleValue) {
        input.click()
      }
    });
  }
  
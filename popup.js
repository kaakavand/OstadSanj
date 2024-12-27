document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const professorName = document.getElementById("professorName").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;
  
    // ذخیره داده‌ها در storage مرورگر
    chrome.storage.sync.set({ [professorName]: { rating, comments } }, function () {
      alert("Feedback submitted successfully!");
    });
  
    // پاک کردن فرم
    event.target.reset();
  });
  
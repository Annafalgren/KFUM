const tabBtns = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".content");

if (tabBtns && tabContents) {
  tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const tabData = tabBtn.getAttribute('data-id');

      tabBtns.forEach((btn) => btn.classList.remove('active'));
      tabBtn.classList.add('active');

      tabContents.forEach((content) => {
        content.classList.remove('active');

        if (content.id === tabData) {
          content.classList.add('active');
        }
      });
    });
  });
}

// https://dev.to/serhatbek/vanilla-javascript-tabs-21i8
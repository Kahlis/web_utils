let scrollInterval;
const scrollStep = 10; // Adjust the step value as needed for smoothness

function smoothScroll(direction) {
  clearInterval(scrollInterval);
  scrollInterval = setInterval(() => {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if ((direction === 'up' && st <= 0) || (direction === 'down' && st >= document.documentElement.scrollHeight - window.innerHeight)) {
      clearInterval(scrollInterval);
      return; // Stop scrolling when reaching the top or bottom of the page
    }

    if (direction === 'up') {
      window.scrollBy(0, -scrollStep);
    } else if (direction === 'down') {
      window.scrollBy(0, scrollStep);
    }
  }, 20); // Adjust the interval for smoother scrolling
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    smoothScroll('up');
  } else if (event.key === 'ArrowDown') {
    smoothScroll('down');
  }
});

document.addEventListener('keyup', function() {
  clearInterval(scrollInterval);
});

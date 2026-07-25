document.addEventListener('DOMContentLoaded', () => {

  const dot = document.createElement('div');
  const ring = document.createElement('div');
  
  dot.classList.add('cursor-dot');
  ring.classList.add('cursor-ring');
  
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;


  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;


    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  
  function render() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(render);
  }
  render();

  
  const interactiveElements = document.querySelectorAll('a, button, input, .clickable');
  
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('active');
      ring.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('active');
      ring.classList.remove('active');
    });
  });
});
}
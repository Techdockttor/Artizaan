const productButtons = document.querySelectorAll('.frame-10, .frame-15, .frame-1a, .frame-30, .frame-3e, .frame-button, .frame-button-58, .frame-button-68');

productButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('span:first-child').textContent;
    const message = `You selected: ${productName}`;
    alert(message);
  });
});

const serviceLinks = document.querySelectorAll('.services');

serviceLinks.forEach(link => {
  link.addEventListener('click', () => {
    const message = 'Redirecting to services page...';
    alert(message);
  });
});

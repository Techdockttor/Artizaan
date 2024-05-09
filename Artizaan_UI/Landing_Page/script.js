document.documentElement.style.setProperty('--default-font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif');

document.querySelectorAll('.main-container, .main-container *').forEach(element => {
  element.style.boxSizing = 'border-box';
});

document.querySelectorAll('.social-icons, .social-icons-f, .social-icons-10, .get-started, .frame-carpenter, .frame-Plumber, .frame-Painter').forEach(element => {
  element.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
  });

  element.addEventListener('mouseout', function() {
    this.style.transform = 'none';
  });
});

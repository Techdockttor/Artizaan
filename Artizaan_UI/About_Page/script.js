// Define the custom font in a JSON object
const customFontJSON = {
  "--default-font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei UI', 'Microsoft Yahei', 'Source Han Sans CN', sans-serif"
};

// Parse JSON object and apply custom font to HTML elements
document.addEventListener("DOMContentLoaded", function() {
  Object.keys(customFontJSON).forEach(property => {
    document.documentElement.style.setProperty(property, customFontJSON[property]);
  });
});

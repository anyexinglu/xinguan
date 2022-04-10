const Tesseract = require('tesseract.js');

Tesseract.recognize(
  './assets/2.jpeg',
  'chi_sim',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})

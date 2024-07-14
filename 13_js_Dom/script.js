
const firstParagraph = document.querySelector('p');
console.log("1. First paragraph by tag name:", firstParagraph.textContent);

const secondParagraph = document.querySelector('#third');
const thirdParagraph = document.querySelector('#fourth');
console.log("2. Second paragraph by id:", secondParagraph.textContent);
console.log("   Third paragraph by id:", thirdParagraph.textContent);


const allParagraphs = document.querySelectorAll('p');
console.log("3. All paragraphs as nodeList:", allParagraphs);


allParagraphs.forEach(paragraph => {
  console.log("   Text content:", paragraph.textContent);
});


const fourthParagraph = document.querySelector('#fourth');
fourthParagraph.textContent = "Fourth Paragraph (updated)";


allParagraphs.forEach((paragraph, index) => {
  paragraph.id = `paragraph${index + 1}`;
  paragraph.classList.add('paragraph-class');
});


allParagraphs.forEach(paragraph => {
    paragraph.style.color = 'blue';
    paragraph.style.backgroundColor = '#f0f0f0';
    paragraph.style.border = '1px solid #ccc';
    paragraph.style.fontSize = '16px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
  });
  
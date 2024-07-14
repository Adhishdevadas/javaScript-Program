function tenMostFrequentWords(paragraph, limit = 10) {
    
    const words = paragraph.toLowerCase().split(/\W+/).filter(word => word.length > 0);
  
   
    const wordCount = {};
    words.forEach(word => {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
  
    
    const sortedWords = Object.keys(wordCount)
      .map(word => ({ word, count: wordCount[word] }))
      .sort((a, b) => b.count - a.count);
  

    return sortedWords.slice(0, limit);
  }
  
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  
  console.log(tenMostFrequentWords(paragraph));
  console.log(tenMostFrequentWords(paragraph, 10));
  
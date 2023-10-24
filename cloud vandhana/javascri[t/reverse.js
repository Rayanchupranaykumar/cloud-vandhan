
// to tun connect this through the html page and run it in browser the output is showned in console

function reverseWordsInSentence(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(' ');
  
    // Reverse each word and store them in an array
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = prompt("Enter a sentence:"); // Prompt the user for input
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log(reversedSentence);
  
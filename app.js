function handleInput() {
    // Get the input field element
    const inputField = document.getElementById('inputField');

    // Retrieve the value from the input field
    const inputValue = inputField.value;

    const num = inputValue;

    // Convert the number to words (using the previous function)
    const word = numberToWords(inputValue);

    // Display the result in the paragraph
   document.getElementById('output').innerText = `${num} In Words Is  ${word}`;
}

const numberToWords = (num) => {
  if (num === 0) return 'Zero';

  const belowTwenty = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                       'Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen',
                       'Eighteen','Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const thousands = ['', 'Thousand', 'Million', 'Billion'];

  const helper = (n) => {
    if (n === 0) return '';
    else if (n < 20) return belowTwenty[n] + ' ';
    else if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
    else return belowTwenty[Math.floor(n / 100)] + ' Hundred  ' + helper(n % 100);
  };

  let word = '';
  for (let i = 0, unit = 1000; num > 0; i++, unit *= 1000) {
    const part = num % unit;
    if (part !== 0) {
      word = helper(part) + thousands[i] + ' ' + word;
    }
    num = Math.floor(num / unit);
  }

  return word.trim();
};

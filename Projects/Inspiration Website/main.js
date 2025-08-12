//local and global variables
const randomIND= Math.floor(Math.random * quotes.length)

//functions and events
const printQuote = () => {
  return quotes[randomIND]
}

const printExplanation = () => {
  return explain[randomIND]
}


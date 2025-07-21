const starters = [
  "Today you can",
  "Never forget to",
  "It's never too late to",
  "You have the power to",
  "Believe in your ability to"
];

const messages = [
  "overcome your fears",
  "chase your dreams",
  "start over again",
  "turn the impossible into possible",
  "be the best version of yourself"
];

const endings = [
  "because nothing is stopping you!",
  "you just have to try!",
  "the world is waiting for you!",
  "no one can stand in your way!",
  "take the first step and the rest will follow!"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
  const part1 = getRandomItem(starters);
  const part2 = getRandomItem(messages);
  const part3 = getRandomItem(endings);

  const fullMessage = `${part1} ${part2}, ${part3}`;
  document.getElementById("message").innerText = fullMessage;
}

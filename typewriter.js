const sentence = "hello there from lighthouse labs";


const typeWriter = (sentence) => {
  let delay = 0;
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      if (i !== sentence.length - 1) {
        process.stdout.write(sentence[i]);
        // console.log(sentence[i]);
      }
      else {
        process.stdout.write(sentence[i] + '\n');
        // console.log(sentence[i] + '\n');
      } //delay counter is updating everytime
    }, delay);
    delay += 50;
  }
};



typeWriter(sentence);

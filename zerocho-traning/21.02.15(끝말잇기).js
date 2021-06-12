var word = prompt("Let's Play the Word Game !!");
for (var answer = prompt(word); word[word.length - 1] === answer[0]; ) {
  if (word[word.length - 1] === answer[0]) {
    alert('nice');
    word = answer;
    var answer = prompt(word);
  }
}
alert('U lost !');
location.reload(true);

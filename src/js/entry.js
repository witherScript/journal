function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function () {
  if (this.body) {
    const words = this.body.split(' ');
    return words.length;
  }
  return 0;
}

Entry.prototype.vowelCount = function () {
  const count = this.body.match(/aeiou/ig).length;
  return count;
};

Entry.prototype.consCount = function () {

  const count = this.body.match(/([^aeiou .,!?])/gi);
  return count;
};

Entry.prototype.getTeaser = function () {
  const sentences = this.body.split('. ');
  const firstSentence = sentences[0];
  const words = firstSentence.split(' ');
  if (words.length >= 8) {
    return words.slice(0, 8).join(' ');
  } else {
    return words.join(' ');
  }
};
//TODO: export
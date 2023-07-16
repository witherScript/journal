
function Journal() {
  this.entries = {};
  this.currentId = 0;
};

Journal.prototype.addEntry = function (entry) {
  entry.id = this.assignId();
  this.when = new Date();
  entry.when = entry.when.toString().slice(4, 15);
  this.entries[entry.id] = entry;
};

Journal.prototype.assignId = function () {
  this.currentId += 1; //add Date()
  return this.currentId;
};

Journal.prototype.findEntry = function (id) {
  return this.entries[id];
};

Journal.prototype.deleteEntry = function (id) {
  if (this.entries[id] === undefined) {
    return false;
  }
  delete this.entries[id];
  return true;
};


/*
const myEntry = new Entry("title", "text");
const myJournal = new Journal();
myJournal.addEntry(myEntry);
console.log(myEntry.when);

*/
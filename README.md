
Describe(Entry)
Test: It should create a Entry object with an entryText property
Code:
```javascript

const entryBody = "Hello, this is an entry";
const myEntry =  new Entry(entryBody);

expect(myEntry.body).toBe(entryText);
```

describe(wordCount)
Test: It should return 0 for a body === ''
Code:
```javascript
const myEntry =  new Entry('');
expect(myEntry.wordCount()).toBe(0)
```

describe(vowelCount)
Test: It should count the number of vowels in a string
Code:
```javascript

describe(consCount)
Test: It should count the number of consonants in a string
```
Code:


describe(Journal)
Test: It should return an empty object Entries, which contains a list of key-value pairs such that key: id and value: Entry object
Code:
```javascript
const myJournal = new Journal();
expect(myJournal.entries).toBe({});
```



describe(Journal.prototype.getEntry(id))
Test: It should retrun an entry by referencing the ID number
Code: 

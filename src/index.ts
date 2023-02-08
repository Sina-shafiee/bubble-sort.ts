import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';
import { CharacterCollection } from './CharacterCollection';

// const numbers = new NumbersCollection([10, 21, 0, 20, -1]);

// console.log(numbers.data);
// numbers.sort();
// console.log(numbers.data);

// const linkedList = new LinkedList();

// linkedList.add(50);
// linkedList.add(10);
// linkedList.add(140);

// linkedList.print();
// linkedList.sort();
// linkedList.print();

const characters = new CharacterCollection('zhello');

console.log(characters.data);
characters.sort();
console.log(characters.data);

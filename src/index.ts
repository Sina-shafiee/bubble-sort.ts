import { Sorter } from './Sorter';
// import { CharacterCollection } from './CharacterCollection';
// import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

// const numbers = new CharacterCollection('sina');
// const sort = new Sorter(numbers);

// console.log(sort);

// sort.sort();

// console.log(sort);

const linkedList = new LinkedList();

linkedList.add(300);
linkedList.add(200);
linkedList.add(500);

const sort = new Sorter(linkedList);

sort.sort();

linkedList.print();

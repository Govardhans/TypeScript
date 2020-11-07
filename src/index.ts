import {Sorter} from './Sorter'
import {NumbersCollection} from './NumbersCollection'
import {Characterscollection} from './CharactersCollection'
import {LinkedList} from './LinkedList'

const numbersCollection = new NumbersCollection([100,-5,0,8,11]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterscollection = new Characterscollection('XBaB');
characterscollection.sort();
console.log(characterscollection.data);

const linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

linkedList.print();
linkedList.sort();
console.log('After Sorting');
linkedList.print();

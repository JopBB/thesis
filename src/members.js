import Task from '~/src/Task.js';
import Person from '~/src/Person.js';
export default{
	members:[
		new Person("Tommy", [
			new Task(new Date('5 april 2018'),"Code schrijven", 1, 0),
			new Task(new Date('6 april 2018'),"Nog meer code schrijven", 1, 0),
			new Task(new Date('12 april 2018'),"Paper schrijven", 1, 0)
			]),
		new Person("Lisa", [
			new Task(new Date('7 april 2018'),"Tommy's Code reviewen", 0, 1),
			new Task(new Date('5 april 2018'),"Introduction paper schrijven", 0, 0)
			]),
		new Person("Denny", [
			new Task(new Date('5 april 2018'),"Start Related Work", 0, 1),
			new Task(new Date('12 april 2018'),"Finish Related Work", 0, 0)
			])
	]
}
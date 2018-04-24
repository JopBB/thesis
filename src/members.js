import Task from '~/src/Task.js';
import Person from '~/src/Person.js';
export default{
	members:[
		new Person("Tommy", [
			new Task(new Date('5 april 2018'),"Code schrijven", true, false),
			new Task(new Date('6 april 2018'),"Nog meer code schrijven", true, false),
			new Task(new Date('12 april 2018'),"Paper schrijven", true, false)
			]),
		new Person("Lisa", [
			new Task(new Date('7 april 2018'),"Tommy's Code reviewen", false, true),
			new Task(new Date('5 april 2018'),"Introduction paper schrijven", false, false)
			]),
		new Person("Denny", [
			new Task(new Date('5 april 2018'),"Start Related Work", false, true),
			new Task(new Date('12 april 2018'),"Finish Related Work", false, false)
			])
	]
}
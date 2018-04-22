import Task from '~/src/Task.js';
import Person from '~/src/Person.js';
export default{
	members:[
		new Person("Tommy", [
			new Task(new Date('5 april 2018'),"Code schrijven"),
			new Task(new Date('6 april 2018'),"Nog meer code schrijven"),
			new Task(new Date('12 april 2018'),"Paper schrijven")
			]),
		new Person("Lisa", [
			new Task(new Date('7 april 2018'),"Tommy's Code reviewen"),
			new Task(new Date('5 april 2018'),"Introduction paper schrijven")
			]),
		new Person("Denny", [
			new Task(new Date('5 april 2018'),"Start Related Work"),
			new Task(new Date('12 april 2018'),"Finish Related Work")
			])
	]
}
import Task from '~/src/Task.js';
import Person from '~/src/Person.js';
export default{
	members:[
		new Person("Tommy", [
			new Task(new Date('5 may 2018 23:00' ),"Write code for login-form", true, true),
			new Task(new Date('6 may 2018 23:00'),"Review related work section 3 and 4 by Denny", true, false),
			new Task(new Date('12 may 2018 23:00'),"Write related work, section 1 and 2", true, false),
			new Task(new Date('12 may 2018 23:00'),"Write related work, section 7 and 8", true, false),
			new Task(new Date('19 may 2018 23:00'),"Finish prototype", true, false),
			new Task(new Date('24 may 2018 23:00'),"Write conclusion and abstract for paper", true, false),
			new Task(new Date('4 june 2018 23:00'),"Finish the paper", true, false)
			]),
		new Person("Lisa", [
			new Task(new Date('5 may 2018 23:00'),"Write introduction of paper", false, false),
			new Task(new Date('5 may 2018 23:00'),"Write part 1 of methods of paper", false, false),
			new Task(new Date('12 may 2018 23:00'),"Review code for login-form", false, false),
			new Task(new Date('12 may 2018 23:00'),"Review code for webshop", false, false),
			new Task(new Date('19 may 2018 23:00'),"Write part 2 and 3 of methods of paper", false, false),
			new Task(new Date('4 june 2018 23:00'),"Finish the paper", false, false)
			]),
		new Person("Denny", [
			new Task(new Date('5 may 2018 23:00'),"Write Related Work section 3 and 4", false, true),
			new Task(new Date('12 may 2018 23:00'),"Write  Related Work section 5 and 6", false, false),
			new Task(new Date('19 may 2018 23:00'),"Start writing results", false, false),
			new Task(new Date('19 may 2018 23:00'),"Finish up results and analysis", false, false),
			new Task(new Date('4 june 2018 23:00'),"Finish the paper", false, false)
			])
	]	
}
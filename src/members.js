import Task from '~/src/Task.js';
import Person from '~/src/Person.js';
import ReviewTask from '~/src/ReviewTask.js';
export default{
	members:[
		new Person("Tommy", [
			new Task(new Date('5 may 2018 23:00' ),"Write code for login-form", true),
			new Task(new Date('12 may 2018 23:00'),"Write related work, section 1 and 2", false),
			new Task(new Date('12 may 2018 23:00'),"Write related work, section 7 and 8", false),
			new Task(new Date('19 may 2018 23:00'),"Finish prototype", false),
			new Task(new Date('24 may 2018 23:00'),"Write conclusion and abstract for paper", false),
			new Task(new Date('4 june 2018 23:00'),"Finish the paper", false)
			],[
			new ReviewTask(new Date('8 may 2018 23:00'), "Review \'Write Related Work section 3 and 4\' by Denny")
			]),
		new Person("Lisa", [
			new Task(new Date('5 may 2018 23:00'),"Write introduction of paper", false),
			new Task(new Date('5 may 2018 23:00'),"Write part 1 of methods of paper", false),
			new Task(new Date('19 may 2018 23:00'),"Write part 2 and 3 of methods of paper", false),
			new Task(new Date('4 june 2018 23:00'),"Finish the paper", false)
			],[
			new ReviewTask(new Date('8 may 2018 23:00'), "Review \'Start writing results\' by Denny")
			]),
		new Person("Denny", [
			new Task(new Date('5 may 2018 23:00'),"Write Related Work section 3 and 4", true),
			new Task(new Date('12 may 2018 23:00'),"Write  Related Work section 5 and 6", false),
			new Task(new Date('19 may 2018 23:00'),"Start writing results", true),
			new Task(new Date('19 may 2018 23:00'),"Finish up results and analysis", false),
			new Task(new Date('4 june 2018 23:00'),"Finish the paper", false)
			],[
			new ReviewTask(new Date('8 may 2018 23:00'), "Review \'Write code for login-form\' by Tommy")
			])
	]	
}
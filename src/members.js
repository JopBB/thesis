//PARTICIPANT IS FREE-RIDER MEMBERS-FILE

import Task from '~/src/Task.js';
import Person from '~/src/Person.js';
import ReviewTask from '~/src/ReviewTask.js';
export default{
	participantIsSlacker:true,
	members:[
		new Person("Participant", [
			new Task(new Date('5 june 2018 21:00' ),"Write code for location-module", false, 2, 1),
			new Task(new Date('5 june 2018 21:00'),"Read and write about paper by Jackson from 1998, see Mendeley", false, 2, 1),
			new Task(new Date('12 june 2018 21:00' ),"Write code for Route-generator", false, 4, 1),
			new Task(new Date('12 june 2018 21:00' ),"Finish up the location-module", false, 4, 1),
			new Task(new Date('24 june 2018 21:00'),"Finish prototype", false, 3, 1),
			new Task(new Date('29 june 2018 21:00'),"Write conclusion and abstract for paper", false, 2, 1),
			new Task(new Date('4 july 2018 21:00'),"Finish the paper", false, 4, 1)
			],[
			new ReviewTask(new Date('8 june 2018 21:00'), "Review \'Write Related Work section 1 and 2\' by Denny")
			]),
		new Person("Lisa", [
			new Task(new Date('5 june 2018 21:00'),"Write introduction of paper", true, 1, 1),
			new Task(new Date('12 june 2018 21:00'),"Write part 1 of methods of paper", true, 2, 1),
			new Task(new Date('19 june 2018 21:00'),"Write part 2 and 3 of methods of paper", false, 1, 1),
			new Task(new Date('4 july 2018 21:00'),"Finish the paper", false, 2, 1)
			],[
			new ReviewTask(new Date('8 june 2018 21:00'), "Review \'Start writing results\' by Denny")
			]),
		new Person("Denny", [
			new Task(new Date('5 june 2018 21:00'),"Write Related Work section 1 and 2", true, 2, 1),
			new Task(new Date('12 june 2018 21:00'),"Write  Related Work section 5 and 6", true, 3, 1),
			new Task(new Date('19 june 2018 21:00'),"Start writing results tables 3 and 4", true, 2, 1),
			new Task(new Date('26 june 2018 21:00'),"Finish up results and analysis", false, 2, 1),
			new Task(new Date('4 july 2018 21:00'),"Finish the paper", false, 2, 1)
			],[
			new ReviewTask(new Date('8 june 2018 21:00'), "Review \'Write code for login-form\' by Participant")
			]),
		new Person("Tommy", [
			new Task(new Date('5 june 2018 21:00'),"Write Related Work section 3 and 4", true, 2, 1),
			new Task(new Date('12 june 2018 21:00'),"Write  Related Work section 7 and 8", true, 3, 1),
			new Task(new Date('19 june 2018 21:00'),"Start writing results tables 1 and 2", true, 2, 1),
			new Task(new Date('26 june 2018 21:00'),"Finish up results and analysis", false, 2, 1),
			new Task(new Date('4 july 2018 21:00'),"Finish the paper", false, 2, 1)
			],[
			new ReviewTask(new Date('8 june 2018 21:00'), "Review \'Write code for login-form\' by Participant")
			])
	]	
}
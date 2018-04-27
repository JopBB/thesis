export default class Person{
	constructor(name, tasks, reviewTasks){
		this.name = name;
		this.tasks=tasks;
		this.reviewTasks = reviewTasks;
		this.amountOfSlackingDone=0;
	}
	addSlack(){
		this.amountOfSlackingDone++;
	}
}
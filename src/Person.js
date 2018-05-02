export default class Person{
	constructor(name, tasks, reviewTasks){
		this.name = name;
		this.tasks=tasks;
		this.reviewTasks = reviewTasks;
	}
	amountOfSlackingDone(){
		var result=0;
		for(var i; i<this.tasks.length; i++){
			if(tasks[i].isPastDeadline()){
				result++;
			}
		}
		return result;
	}
}
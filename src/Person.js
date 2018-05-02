export default class Person{
	constructor(name, tasks, reviewTasks){
		this.name = name;
		this.tasks=tasks;
		this.reviewTasks = reviewTasks;
	}
	amountOfSlackingDone(){
		var result=0;
		console.log(this.tasks.length);
		for(var i=0; i<this.tasks.length; i++){
			if(this.tasks[i].isPastDeadline()){
				result++;
			}
		}
		return result;
	}
}
export default class Person{
	constructor(name, tasks, reviewTasks){
		this.name = name;
		this.tasks=tasks;
		this.reviewTasks = reviewTasks;
	}
	amountOfSlackingDone(){
		var result=0;
		for(var i=0; i<this.tasks.length; i++){
			if(this.tasks[i].isSlacked()){
				result++;
			}
		}
		for(var j=0; j<this.reviewTasks.length; j++){
			if(this.reviewTasks[j].isSlacked()){
				result++;
			}
		}
		return result;
	}
}
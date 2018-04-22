export default class Person{
	constructor(name, tasks){
		this.name = name;
		this.tasks=tasks;
		this.amountOfSlackingDone=0;
	}
	addSlack(){
		this.amountOfSlackingDone++;
	}
}
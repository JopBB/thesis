export default class ReviewTask{
	constructor(deadline, label){
		this.deadline = deadline.toString().substring(4, 10);
		this.label=label;
		this.done=false;
	}
	switchDone(){
		this.done = !this.done;
	}
}
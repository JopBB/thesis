export default class ReviewTask{
	constructor(deadline, label, isMine){
		this.deadline = deadline.toString().substring(4, 10);
		this.label=label;
		this.isMine=isMine;
		this.done=false;
	}
	switchDone(){
		this.done = !this.done;
	}
}
export default class Task{
	constructor(deadline, label){
		this.deadline = deadline.toString().substring(0, 10);
		this.label=label;
		this.uploaded=0;
		this.done=0;
		this.reviewed=0;
	}
	switchDone(){
		this.done = !this.done;
	}
	switchReviewed(){
		this.reviewed = !this.reviewed;
	}
	switchUploaded(){
		this.uploaded = 1;
	}

}
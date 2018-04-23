export default class Task{
	constructor(deadline, label, isMine, uploaded){
		this.deadline = deadline.toString().substring(0, 10);
		this.label=label;
		this.isMine=isMine;
		this.uploaded=uploaded;
		this.reviewed=0;
		this.done=0;
	}
	switchDone(){
		this.done = !this.done;
	}
	switchReviewed(){
		this.reviewed = !this.reviewed;
		console.log(this.label + " is now reviewed = " + this.reviewed)
	}
	switchUploaded(){
		this.uploaded = 1;
	}

}
export default class Task{
	constructor(deadline, label, isMine, uploaded){
		this.deadline = deadline.toString().substring(4, 10);
		this.label=label;
		this.isMine=isMine;
		this.uploaded=uploaded;
		this.reviewed=0;
		this.done=0;
		this.canBeReviewed=0;
		this.canBeUploaded=0;
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
	switchCanBeReviewed(){
		this.canBeReviewed=1;
	}
	switchCanBeUploaded(){
		this.canBeUploaded =1;
	}

}
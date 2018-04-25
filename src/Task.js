export default class Task{
	constructor(deadline, label, isMine, uploaded){
		this.deadline = deadline.toString().substring(4, 10);
		this.label=label;
		this.isMine=isMine;
		this.uploaded=uploaded;
		this.reviewed=false;
		this.canBeReviewed=false;
		this.canBeUploaded=false;
	}
	switchReviewed(){
		this.reviewed = !this.reviewed;
	}
	switchUploaded(){
		this.uploaded = true;
	}
	switchCanBeReviewed(){
		this.canBeReviewed=true;
	}
	switchCanBeUploaded(){
		this.canBeUploaded =true;
	}
	done(){
		return (this.uploaded && this.reviewed)
	}
	isReview(){
		return this.label.toLowerCase().substring(0,6)==="review"
	}
}
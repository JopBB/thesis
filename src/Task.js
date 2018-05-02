import currentDateState from '~/src/currentDateState.js';
export default class Task{
	constructor(deadline, label, uploaded){
		this.deadline = deadline.toString().substring(4, 10);
		this.label=label;
		this.uploaded=uploaded;
		this.canBeReviewed=false;
		this.canBeUploaded=false;
		this.review=undefined;
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
		return (this.uploaded && this.reviewed())
	}
	reviewed(){
		return this.review!==undefined;
	}
	isPastDeadline(){
		console.log(currentDateState.currentDate)
		 return new Date(this.deadline + ' 2018') < currentDateState.currentDate;
	}
}
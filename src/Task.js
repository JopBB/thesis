import currentDateState from '~/src/currentDateState.js';
export default class Task{
	constructor(deadline, label, uploaded, minDaysNeeded, version){
		this.deadline = deadline.toString().substring(4, 10);
		this.label=label;
		this.uploaded=uploaded;
		this.minDaysNeeded = minDaysNeeded;
		this.canBeReviewed=false;
		this.canBeUploaded=false;
		this.review=undefined;
		this.oldTask=false;
		this.version=version;
		this.isReassigned = false;
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
		 return new Date(this.deadline + ' 2018 23:00') < currentDateState.currentDate;
	}
	isSlacked(){
		return (this.isPastDeadline() && !this.uploaded) || (this.isPastDeadline() && this.review==='bad');
	}
}
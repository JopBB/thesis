import currentDateState from '~/src/currentDateState.js';
export default class ReviewTask{
	constructor(deadline, label){
		this.deadline = deadline.toString().substring(4, 10);
		this.label=label;
		this.done=false;
	}
	switchDone(){
		this.done = !this.done;
	}
	isPastDeadline(){
		 return new Date(this.deadline + ' 2018') < currentDateState.currentDate;
	}
	isSlacked(){
		return (this.isPastDeadline() && !this.done);
	}
}
export default{
  currentDate: new Date(Date.now()),
  nextWeek(){
    var newDate = new Date(this.currentDate);
    newDate.setDate(this.currentDate.getDate() + 7);
    this.currentDate = newDate
  },
  previousWeek(){
    var newDate = new Date(this.currentDate);
    newDate.setDate(this.currentDate.getDate() -7);
    this.currentDate = newDate
  },
  currentDateString(){
    return this.currentDate.toString().substring(4,10);
    }
}
  
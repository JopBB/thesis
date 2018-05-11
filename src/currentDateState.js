export default{
  currentDate: new Date('1 june 2018 21:00'),
  nextDay(){
    var newDate = new Date(this.currentDate);
    newDate.setDate(this.currentDate.getDate() + 1);
    newDate.setHours(1)
    this.currentDate = newDate
  },
  previousDay(){
    var newDate = new Date(this.currentDate);
    newDate.setDate(this.currentDate.getDate() -1);
    newDate.setHours(1)
    this.currentDate = newDate
  },
  currentDateString(){
    return this.currentDate.toString().substring(4,10);
    }
}
  
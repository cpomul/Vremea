export default class DateTimeDisplay {
  constructor() {
    this.currentDate = new Date();
  }

  displayDateTime() {
    const currentDateString = `${this.currentDate.getFullYear()}-${
      this.currentDate.getMonth() + 1
    }-${this.currentDate.getDate()}`;
    const currentTimeString = `${this.currentDate.getHours()}:${this.currentDate.getMinutes()}:${this.currentDate.getSeconds()}`;
    return `${currentDateString} | ${currentTimeString}`;
  }
  updateTimeContinuously() {
    setInterval(() => {
      this.currentDate = new Date();
      const dateTimeP = document.querySelector("#dateTimeP");
      dateTimeP.textContent = this.displayDateTime();
    }, 1000);
  }
}

// const workingMeetings = (startWorkDay, finishWorkDay, startWorkMetting, finishWorkMetting) => {

// }
function printCustomTime(timeString) {
  let time = new Date(`2024-04-04T${timeString}`);
  let hours = time.getHours();
  let minutes = time.getMinutes();
  console.log(`Заданное время: ${hours}:${minutes}`);
}

printCustomTime('15:30');

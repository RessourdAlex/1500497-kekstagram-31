const workingMeetings = (...numbers) => {
  const dateArray = [];

  for (let j = 0; j <= 2; j += 1){
    const checkFormatDate = numbers[j].split(':');

    for (let i = 0; i <= 1; i += 1){
      if (checkFormatDate[i].length === 1) {
        checkFormatDate[i] = `0${checkFormatDate[i]}`;
      }
    }

    numbers[j] = checkFormatDate.join(':');
    const time = new Date(`2000-01-01T${numbers[j]}`);

    dateArray.push(time);

    const hours = time.getHours();
    const minutes = time.getMinutes();

    if (isNaN(`${hours}`) || isNaN(`${minutes}`)) {
      throw new Error(`Недопустимый формат даты: "${numbers[j]}" !`);
    }
  }

  const endMetting = dateArray[2];

  endMetting.setMinutes(endMetting.getMinutes() + numbers[3]);

  if (dateArray[0] <= dateArray[2] && dateArray[1] >= endMetting) {
    return true;
  } else {
    return false;
  }
};

const startWorkDay = '9:00';
const finishWorkDay = '18:00';
const startWorkMetting = '15:06';
const finishWorkMetting = 172;

try{
  console.log(workingMeetings(startWorkDay, finishWorkDay, startWorkMetting, finishWorkMetting));
} catch (error){
  console.error(error.message);
}

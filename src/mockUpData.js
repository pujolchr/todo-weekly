import task from './task';


const MOCKUP_DATA = {
  pool: task.populateList(),
  weekDays: {
    monday: task.populateList(),
    tuesday: task.populateList(),
    wednesday: task.populateList(),
    thursday: task.populateList(),
    friday: task.populateList(),
    saturday: task.populateList(),
    sunday: task.populateList(),
  },
};

export default MOCKUP_DATA;

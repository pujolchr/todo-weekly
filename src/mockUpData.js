import task from './taskFunction';


const MOCKUP_DATA = {
  pool: task.populateList(1),
  monday: task.populateList(3),
  tuesday: task.populateList(8),
  wednesday: task.populateList(4),
  thursday: task.populateList(9),
  friday: task.populateList(2),
  saturday: task.populateList(0),
  sunday: task.populateList(7),
};

export default MOCKUP_DATA;

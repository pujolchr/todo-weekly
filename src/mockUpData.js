import { populateList } from './taskFunction';


const MOCKUP_DATA = {
  pool: populateList(1),
  monday: populateList(3),
  tuesday: populateList(8),
  wednesday: populateList(4),
  thursday: populateList(9),
  friday: populateList(2),
  saturday: populateList(0),
  sunday: populateList(7),
};

export default MOCKUP_DATA;

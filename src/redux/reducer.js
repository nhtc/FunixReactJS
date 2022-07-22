import { DEPARTMENTS, STAFFS } from '../shared/staffs';

export const initialState = {
	staffs: STAFFS,
	departments: DEPARTMENTS,
	newStaff: null,
	selectedStaff: null,
};

export const Reducer = (state = initialState, action) => {
	return state;
};

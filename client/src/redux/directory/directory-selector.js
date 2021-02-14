import {createSelector} from 'reselect'

//select the whole directory state
const selectDirectory = state => state.directory;


// select the current user from the whole user state
export const selectSections = createSelector(
    [selectDirectory], (directory) => directory.sections
);
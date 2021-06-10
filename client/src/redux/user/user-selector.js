import { createSelector } from 'reselect';

const selectuser = state => state.user; // input selector

export const selectCurrentUser = createSelector( // output selector what uses input selector and return a portion of global state
    [selectuser],
    user => user.currentUser
)


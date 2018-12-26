import { Action } from '@ngrx/store';

export const LOAD_EXPORTDATA = 'LOAD_EXPORTDATA';
export const ADD_EXPORTDATA = 'ADD_EXPORTDATA';

export function exportPCDReducer(state, action: Action) {
    // tslint:disable-next-line:indent
    switch (action.type) {
        case LOAD_EXPORTDATA:
            return action.payload;
        case ADD_EXPORTDATA:
            /* let a = [];
            state.forEach(element => {
                a.push(element);
            });
            a.push(action.payload); */
            return action.payload;
        default:
            return state;
    }
}

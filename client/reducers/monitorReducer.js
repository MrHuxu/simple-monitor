import { RECEIVE_RECORD, SELECT_RECORD } from '../actions/monitorActions';

export function monitor (state = {
  category: 'validaton',
  records: [],
  selectedRecords: []
}, action) {
  switch (action.type) {
    case RECEIVE_RECORD:
      return Object.assign({}, {
        category: state.category,
        records: [action.content, ...state.records],
        selectedRecords: state.selectedRecords
      });

    case SELECT_RECORD:
      return Object.assign({}, {
        category: state.category,
        records: state.records,
        selectedRecords: [action.content, ...state.selectedRecords]
      });

    default:
      return state;
  }
};
import { RECEIVE_RECORD } from '../actions/monitorActions';

export function monitor (state = {
  category: 'validaton',
  records: []
}, action) {
  switch (action.type) {
    case RECEIVE_RECORD:
      return Object.assign({}, {
        category: state.category,
        records: [action.content, ...state.records]
      });

    default:
      return state;
  }
};
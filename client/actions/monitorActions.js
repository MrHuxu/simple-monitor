var socket = io();

export const RECEIVE_RECORD = 'RECEIVE_RECORD';
export function receiveRecord (data) {
  return {
    type: RECEIVE_RECORD,
    content: data
  };
}

export const SELECT_RECORD = 'SELECT_RECORD';
export function selectRecord (data) {
  return {
    type: SELECT_RECORD,
    content: data
  };
}
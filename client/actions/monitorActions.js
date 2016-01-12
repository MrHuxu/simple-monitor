var socket = io();

export const RECEIVE_RECORD = 'RECEIVE_RECORD';
export function receiveRecord (data) {
  return {
    type: RECEIVE_RECORD,
    content: data
  };
}
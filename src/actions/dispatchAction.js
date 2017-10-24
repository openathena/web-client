
export default function (action) {
  return function(payload, dispatch) {
    dispatch(action(payload));
  }
};

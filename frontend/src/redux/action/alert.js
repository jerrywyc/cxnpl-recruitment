
//update alert Infor
export const updateAlert = (infor) => (dispatch) => {
    // ...
    dispatch({
        type: 'ALERT',
        payload: infor
      });
  };
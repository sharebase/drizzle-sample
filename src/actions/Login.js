// src/actions/Ranking.js
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = 'http://localhost:8080/sharecoin-web/';
const APP_ID = 'x';

// リクエスト開始
const startRequest = categoryId => ({
  type: 'START_REQUEST',
  payload: { categoryId },
});
// レスポンス受信
const receiveData = (categoryId, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: Object.assign({ categoryId, error, response }),
});
// リクエスト完了
const finishRequest = (categoryId, data) => ({
  type: 'FINISH_REQUEST',
  payload: {
    categoryId, data,
    'error': true
  },
});

// ランキングを取得する
export const fetchLogin = categoryId => {
  // redux-thunkを使った非同期処理
  return async (dispatch, getState) => {
    dispatch(startRequest(categoryId));
    console.log(dispatch);
    console.log('getstate');
    console.log(getState());
    var hogehoge = getState().hogehoge;
    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId,
    });
    var data4f;
    try {
      // const responce = await fetch(`${API_URL}?${queryString}`);
      // const data = {await responce.json();}
      const data = "";
      data4f = "";
      console.log(data)

      dispatch(receiveData(categoryId, null, data));
    } catch (err) {
      console.log("errorlog start")
      console.log(err)
      dispatch(receiveData(categoryId, err));
    }
    dispatch(finishRequest("finish", data4f));
  };
};

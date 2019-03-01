import { INCREMENT, DECREMENT } from '../actions'

// 初期状態はオブジェクトとして定義しておく必要がある
const initialState = { value: 0 }

// Actionsから渡ってきたイベントを整理して返す関数
// index.jsに渡せるようにexportする
export default (state = initialState, action) => {
	// はじめにimportしてきたActionの引数に渡ってきた内容で処理を分ける
	switch (action.type) {
		case INCREMENT: 
			return { value: state.value + 1 }
		case DECREMENT: 
			return { value: state.value - 1 }
		default: 
			return state//初期値は0を返す
	}
}
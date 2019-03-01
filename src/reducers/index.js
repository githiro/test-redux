import { combineReducers } from 'redux'// combineReducersは、通常大量に書くことになる./reducers内のreducerを１つにまとめる機能を持つ
import count from './count'// ここにcombineしたいものを片っ端から書いていくことになる

// 今回は１つだけ
export default combineReducers({ count })

// 複数の場合は以下のように記述する
// export default combineReducers({ count, baa, foo })
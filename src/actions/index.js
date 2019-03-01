// ActionとはJSのオブジェクトのこと
// Typeの値はユニークでなければならない

// Actionを返す、Action Creatorを作成する

// Actionを定義する
// この定義はResucerでも使用するのでexport対象
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// Actionを返す関数を定義する
// ここでは、View側で使用するComponentでImportし、あるイベントを掴んだとき、
// 当該のActionCreatorをInvokeして適切な状態遷移を実行させるための仕組み自体を作成している
export const increment = () => ({
	type: INCREMENT
})

export const decrement = () => ({
	type: DECREMENT
})
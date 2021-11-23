/**
 * const, let等の変数宣言
 */

//  var val1 = "var変数";
//  console.log(val1);

//  // var は変数の再宣言、上書きができてしまう
//  val1 = "val1を上書き";
//  console.log(val1);
//  var val1 = "var変数を再宣言"; // 意図しない再宣言が起こるかもも
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let上書き";
// console.log(val2);

// // letは再宣言不可　(SyntaxError : 書いた時点で直ぐ検知可能)
// let val2 = "let変数再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可 (TypeError)
// // val3 = "const上書き";

// // const変数は再宣言不可 (SyntaxError)
// const val3 = "const再宣言";

// const val4 = {
//   name: "emo",
//   age: 33,
// };
// console.log(val4);

// // constオブジェクト変数のプロパティは変更可
// val4.name = "田中";
// val4.address = "富山";
// console.log(val4);

// const配列の中身を書き換え可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey')
// console.log(val5);

/**
 * テンプレート文字列
 *
 * 文字列の中にJavaScriptの変数を埋め込める
 */
// const name = "emo";
// const age = 33;

// // 「私の名前はemoです。年齢は33歳です。」

// // 従来の方法
// const msg1 = "私の名前は" + name + "です。年齢は" + age + "歳です。"
// console.log(msg1);

// // テンプレート文字列を用いた方法
// const msg2 = `私の名前は${name}です。年齢は${age}歳ですわよ。`
// console.log(msg2);

/**
 * アロー関数
 */

// 従来の関数の書き方

// const func1 = function (str) {
//   return `指定されたのは「${str}」だよ。`;
// };

// console.log(func1("ほら"));

// // アロー関数
// const func2 = (str) => `指定されたのは「${str}」だよね。`;

// console.log(func2("ほら"));

// const func3 = (x, y) => x + y;
// console.log(func3(3, 5));

// 従来とアロー関数はthisの扱いが異なる

/**
 * 分割代入
 */
// const myProfile = {
//   name: "代打",
//   age: "8",
// };

// const msg1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(msg1);

// const {age,name} = myProfile;
// const msg2 = `名前は${name}です。年齢は${age}です。。`;
// console.log(msg2);

// const myProfile = ['emo', '99'];
// const msg3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(msg3);

// const [age,name] = myProfile;
// const msg4 = `私の名前は${name}です。年齢は${age}歳です。。`;
// console.log(msg4);

/**
 * デフォルト値、引数など
 */
// const sayHallo = (name = '謎の人') => {
//   console.log(`こんにちは！ ${name}サン。`);
// };
// sayHallo('おまえ');

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [9, 2, 3];
// // console.log(arr1);
// // console.log(...arr1);

// const summry = (x, y) => x+y;
// console.log(...arr1);
// console.log(summry(...arr1)); // 要素が順番に設定されていく

// 配列をまとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;

// // この場合は参照が引きつがえるため、元の配列も書き換わってしまう
// console.log(arr4);
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ['tanaka', 'sato', 'abe', 'yamaguche'];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => name);
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index + 1} 番目は ${name} です。`));

// const numArr = [1, 2, 3, 4, 5];
// const oddArr = numArr.filter((num) => (num % 2) === 1); // 条件に一致するものだけ取り出す

// console.log(oddArr);

// const newNameArr = nameArr.map((name) => name === 'sato' ? name : name + 'さん');
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数字を入力して下さい。";
// console.log(formattedNum);

// const checkSum = (x, y) => 100 < (x + y) ? '100超えとるやん' : 'ええでー';
// console.log(checkSum(50,60));
// console.log(checkSum(50,50));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります。")
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります。")
// }

// || は左側がfalseとなるとき右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は右側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました。"
// console.log(fee2);

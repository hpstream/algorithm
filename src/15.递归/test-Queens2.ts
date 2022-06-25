import {Test} from "../12.sort/utils/times";
import {placeQueens} from "./Queens2";

let n = 4;
Test(`${n}皇后`, () => {
  let ways = placeQueens(n);
  console.log(`${n}皇后一共有${ways}中摆法`);
});

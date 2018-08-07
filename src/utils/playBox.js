/* eslint-disable */

export const gamePlay = {
  // 阶乘
  factorial (n) {
    let result = 1
    while(n > 1){// 1*5*4*3*2，1*n*(n-1)*(n-2)*...*2
      result *= n
      n--
    }
    return result
  },
  // 五星 五星组选 组选120, 二星 组选复式
  // needNum 几个值成一注， selectedArr选中的数字数组
  zuxuanFushi: function(needNum, selectedArr) {
    if (selectedArr.length < needNum) return 0
    return this.factorial(selectedArr.length)/(this.factorial(needNum)*this.factorial(selectedArr.length - needNum))
  },
  // 一注中
  // 组选60 组选20 组选10 组选5：单号的个数brrNeedNum，selectedArr选中的重号数字数组，selectedBrr选中的单号
  // 组选30：重号的个数brrNeedNum，selectedArr选中的单号数字数组，selectedBrr选中的重号
  zuxuanChongh (brrNeedNum, selectedArr, selectedBrr) {
    let arrLen = selectedArr.length
    let brrLen = selectedBrr.length
    if (arrLen < 1 || brrLen < brrNeedNum) return 0
    let result = 0
    for(let i = 0; i < arrLen; i++) {
      console.log(selectedBrr, selectedArr[i])
      if (selectedBrr.indexOf(selectedArr[i]) >= 0) { // 有重复的
        if (brrLen - 1 >= brrNeedNum) {
          // 可以进行组合
          result += this.factorial(brrLen-1)/(this.factorial(brrNeedNum) * this.factorial(brrLen-1-brrNeedNum))
        }
      } else {
        result += this.factorial(brrLen)/(this.factorial(brrNeedNum) * this.factorial(brrLen-brrNeedNum))
      }
    }
    return result
  },
  // 二星 复式
  erxingFushi (selectedArr, selectedBrr) {
    return selectedArr.length * selectedBrr.length
  },
  // 组合的列表
  combination (arr, arrNum, result) {
    var result = result ? result : []
	  let len = arr.length
    let outLoopNum = len - arrNum
    let arrCopy = arr.slice(0);
	  let item = arrCopy.shift();
	  item = item.constructor === Array ? item : [item];
    (function func(item, arrCopy) {
      var itemc;
      var arrCopyC = arrCopy.slice(0);
      var margin = arrNum - item.length
    
      if( margin == 0){
        result.push(item);
        return;
      }
      if( margin == 1){
        for(var j in arrCopy){
          itemc = item.slice(0);
          itemc.push(arrCopy[j]);
          result.push(itemc);
        }			
      }		
      if(margin > 1){
        itemc = item.slice(0);
        itemc.push(arrCopyC.shift());
        func(itemc, arrCopyC);

        if(item.length + arrCopyC.length >= arrNum){
          func(item, arrCopyC);
        }
      }
    })(item, arrCopy)

    if(arrCopy.length >= arrNum){
      return this.combination(arrCopy, arrNum, result);
    } else {
      return result;
    }
  }
}
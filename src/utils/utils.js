/* eslint-disable */
// 随机选择号码 0-len之前的整数，不包括len
export const randomNum = (len) => {
  if (len <= 0) return 
  return Math.floor(Math.random() * len)
}
// 数组去重
export const distinct = (arr) => {
  if (arr.length <= 1) return arr
  let result = [],
      len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if(arr[i] == arr[j]){
        j = ++i;
      }
    }
    result.push(arr[i])
  }
  return result
}
// 保留两位小数
export const returnFloat = (value) => {
  var value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
}

// 倒计时
export const countDown = (overTimer) => {
  let date = parseInt(overTimer / 3600 / 24)
  let hour = Math.floor(overTimer / 3600)
  let min = Math.floor(overTimer / 60 % 60)
  let sec = Math.floor(overTimer % 60)
  let count = ''
  if (hour >= 10) {
    count += hour + ':'
  } else if (hour < 10 && hour > 0) {
    count += '0' + hour + ':'
  } else {
    count += '00:'
  }
  if (min > 0 && min < 10) {
    count += '0' + min
  } else if (min >= 10) {
    count += min
  } else {
    count += '00'
  }
  if (sec >= 10) {
    count += ':' + sec
  } else if (sec < 10 && sec > 0) {
    count += ':0' + sec
  } else {
    count += ':00'
  }
  return count
}

// 日期格式化
export const dateFomat = (fmt, date) => { //author: meizz 
  date = new Date(date)
  var o = {
    "M+": date.getMonth() + 1, //月份   
    "d+": date.getDate(), //日   
    "h+": date.getHours(), //小时   
    "m+": date.getMinutes(), //分   
    "s+": date.getSeconds(), //秒   
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
    "S": date.getMilliseconds() //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

// 保留几位小数 如果小数点后面<fixedNum 不处理
export const toFixedNum = (data, fixedNum = 3) => {
  if (!data) return ''
  if (typeof data == 'number') return data.toFixed(fixedNum)
  if (typeof data == 'string') {
    let arr = data.split('.')
    if (arr.length <= 1 || arr[1].length <= fixedNum) return data
    return arr[0] + '.' + arr[1].slice(0, fixedNum)
  }
}
// 微信环境
export const isWeixin = () => {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

// 五行里面包含的数字
export const wuxingNumber = [{
    name: '金',
    nameEn: 'gold',
    numList: ['04', '05', '18', '19', '26', '27', '34', '35', '48', '49']
  },
  {
    name: '木',
    nameEn: 'wood',
    numList: ['01', '08', '09', '16', '17', '30', '31', '38', '39', '46', '47']
  },
  {
    name: '水',
    nameEn: 'water',
    numList: ['06', '07', '14', '15', '22', '23', '36', '37', '44', '45']
  },
  {
    name: '火',
    nameEn: 'fire',
    numList: ['02', '03', '10', '11', '24', '25', '32', '33', '40', '41']
  },
  {
    name: '土',
    nameEn: 'soil',
    numList: ['12', '13', '20', '21', '28', '29', '42', '43']
  }
]

// 色波颜色
export const seboNumber = [{
    name: '红波',
    nameEn: 'red',
    numList: ['01', '02', '07', '08', '12', '13', '18', '19', '23', '24', '29', '30', '34', '35', '40', '45', '46']
  },
  {
    name: '绿波',
    nameEn: 'green',
    numList: ['05', '06', '11', '16', '17', '21', '22', '27', '28', '32', '33', '38', '39', '43', '44', '49']
  },
  {
    name: '蓝波',
    nameEn: 'blue',
    numList: ['03', '04', '09', '10', '14', '15', '20', '25', '26', '31', '36', '37', '41', '42', '47', '48']
  }
]

export const shengxiaoNumber = [{
  name: '狗',
  nameEn: 'dog',
  numList: ['01', '13', '25', '37', '49']
}, {
  name: '猪',
  nameEn: 'pig',
  numList: ['12', '24', '36', '48']
}, {
  name: '鼠',
  nameEn: 'rat',
  numList: ['11', '23', '35', '47']
}, {
  name: '牛',
  nameEn: 'cow',
  numList: ['10', '22', '34', '46']
}, {
  name: '虎',
  nameEn: 'tiger',
  numList: ['09', '21', '33', '45']
}, {
  name: '兔',
  nameEn: 'rabbit',
  numList: ['08', '20', '32', '44']
}, {
  name: '龙',
  nameEn: 'dragon',
  numList: ['07', '19', '31', '43']
}, {
  name: '蛇',
  nameEn: 'snake',
  numList: ['06', '18', '30', '42']
}, {
  name: '马',
  nameEn: 'horse',
  numList: ['05', '17', '29', '41']
}, {
  name: '羊',
  nameEn: 'sheep',
  numList: ['04', '16', '28', '40']
}, {
  name: '猴',
  nameEn: 'monkey',
  numList: ['03', '15', '27', '39']
}, {
  name: '鸡',
  nameEn: 'chick',
  numList: ['02', '14', '26', '38']
}]

/**
 * 显示游戏下注内容的标注
 * 1：大小单双清
 * 2：输入号码
 * 3：，
 * 4：五行，龙虎，
 * 5：，
 * 6: 特码，
 * 7：两面
 */
export const gameShowList = [1, 2, 3, 4, 5, 6, 7]

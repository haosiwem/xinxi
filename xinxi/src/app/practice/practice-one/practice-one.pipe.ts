import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'uppercaseConversion'})
export class UppercaseConversionPipe implements PipeTransform {
  transform(value: number, exponent: string): any {
    const reg = /^\d{1,3}(\.\d{1,2})?$/;
    if (reg.test(String(value))) {
      return this.onToUppercase(value);
    } else {
      return '最多三位整数，两位小数';
    }
  }

  onToUppercase(num) {
    const numUppercase = '零壹贰叁肆伍陆柒捌玖';
    const moneyUppercase = '分角元拾佰';
    // tslint:disable-next-line:prefer-const
    let uppercaseNum = [];
    let isSpot = false;
    if (num.indexOf('.') !== -1) {
      num = (num * 100).toString();
      isSpot = true;
    }
    Math.floor(num);
    for (let i = num.length; i > 0; i--) {
      uppercaseNum.push(numUppercase[num[num.length - i]]);
      if (isSpot) {
        uppercaseNum.push(moneyUppercase[i - 1]);
      } else {
        uppercaseNum.push(moneyUppercase[i + 1]);
      }
    }
    for (let n = 0; n < uppercaseNum.length; n++) {
      if (uppercaseNum[n] + uppercaseNum[n + 1] + uppercaseNum[n + 2] === '零拾零') {
        uppercaseNum.splice(n, 3);
      } else if (uppercaseNum[n] + uppercaseNum[n + 1] === '零拾') {
        uppercaseNum.splice(n + 1, 1);
      } else if (uppercaseNum[n] + uppercaseNum[n + 1] === '零元') {
        uppercaseNum.splice(n, 1);
      } else if (uppercaseNum[n] === '零') {
        uppercaseNum.splice(n, 2);
      }
    }
    return uppercaseNum.join('');
  }
}

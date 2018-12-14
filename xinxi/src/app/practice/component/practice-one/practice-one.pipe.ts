import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'uppercaseConversion'})
export class UppercaseConversionPipe implements PipeTransform {
  transform(value: number, exponent: string): any {
    const reg = /^\d{1,3}(\.\d{1,2})?$/;
    if (reg.test(String(value))) {
      return this.onToUppercase(value);
    } else if (String(value) === '') {
      return '';
    } else {
      return '最多三位整数，两位小数';
    }
  }

  onToUppercase(n) {
    const fraction = ['角', '分'];
    const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit = ['元', '拾', '佰'];

    let s = '';

    for (let i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);

    let p = '';
    for (let j = 0; j < unit.length && n > 0; j++) {
      p = digit[n % 10] + unit[j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + s;
    return s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
  }
}

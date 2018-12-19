/**
 * Created by zack on 10/11/17.
 */
import {Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {isNullOrUndefined} from 'util';

// todo:支持正则表达式
// todo:支持指定类型输出
@Component({
  selector: 'z-input',
  templateUrl: './z-input.component.html',
  styleUrls: ['./z-input.component.css']
})
export class ZInputComponent implements OnInit {

  /**
   * 预设值
   */
  presetRegexDict = {
    0: /^(0|[1-9][0-9]{0,4})$/g, // 0-99999数字
    1: /^(0|[1-9][0-9]{0,4})(\.\d{0,2})?$/g, // 可以保留两位小数的数字0-99999.99
    2: /^(0|[1-9][0-9]{0,4})(\.\d?)?$/g, // 可以保留一位小数的数字0-99999.99
  };

  private presetRegexValue: any;

  @Input() placeholder = '';

  @Input() required = false;

  @Input() is_disabled = false;

  @Input()
  /* 使用预设值,优先级低，如果设置了正则则优先使用正则 */
  set presetRegex(index: any) {
    if (!this.regex) {
      this.regex = this.presetRegexDict[index];
    }
    this.presetRegexValue = index;
  }

  get presetRegex(): any {
    return this.presetRegexValue;
  }

  @Input()
  ignoreSpace: boolean = true;

  @Input()
    /* 输入值类型,可选number,string,默认为string*/
  inputType: string = 'string';

  @Input()
    /* 输入类型为number时是否可以为空 */
  numberNullable: boolean = true;

  private regexValue: RegExp;

  @Input()
  /* 设置正则表达式(支持string与RegExp) */
  set regex(regex: any) {
    if (regex instanceof RegExp) {
      this.regexValue = regex;
    } else {
      this.regexValue = new RegExp(regex);
    }
  }

  get regex(): any {
    return this.regexValue;
  }

  private inputTextValue: any = '';
  /* 约定写法 构建双向绑定 */
  @Output() inputTextChange = new EventEmitter();

  @Output() inputUIChange = new EventEmitter();

  @Input()
  get inputText() {
    switch (this.inputType) {
      case 'string':
        return this.inputTextValue;
      case 'number':
        if (this.numberNullable && (isNullOrUndefined(this.inputTextValue) || this.inputTextValue === '')) {
          return '';
        }
        return Number(this.inputTextValue);
    }
    return this.inputTextValue;
  }

  /* 绑定输入 */
  set inputText(val) {
    setTimeout(() => {
      switch (this.inputType) {
        case 'string': {
          this.inputElement.nativeElement.value = val;
          this.inputTextValue = val;
          this.inputTextChange.emit(val);
        }
          break;
        case 'number': {
          if (this.numberNullable && (isNullOrUndefined(val) || val === '')) {
            this.inputElement.nativeElement.value = val;
            this.inputTextValue = val;
            this.inputTextChange.emit('');
          } else {
            this.inputElement.nativeElement.value = Number(val);
            this.inputTextValue = Number(val);
            this.inputTextChange.emit(Number(val));
          }
        }
          break;
      }
    }, 0);
  }

  @ViewChild('inputElement') inputElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  /* 处理按下事件 */
  onKeyDown(event: any) {

    if (!this.regex) {
      // 无验证则直接跳过
      return;
    }

    const keyCode = event.which;

    if (keyCode == SpecialKeyCode.SpaceBar && this.ignoreSpace) {
      // 输入操作都忽略空格
      event.preventDefault();
    }

    for (let key in SpecialKeyCode) {
      if (key == keyCode) {
        // 特殊输入略过即可
        return;
      }
    }

    const start = this.inputElement.nativeElement.selectionStart;
    const end = this.inputElement.nativeElement.selectionEnd;

    const preValue = event.target.value;
    const newValue = preValue.substring(0, start) + event.key + preValue.substring(end);
    // 重置匹配索引
    this.regex.lastIndex = 0;
    if (!this.regex.test(newValue)) {
      // 新值无效，则阻止此次输入
      event.preventDefault();
    }

  }

  /* 输入时进行数据处理 */
  onInput(event: any) {
    this.inputUIChange.emit(event.target.value);
    // 在输入完成时校验是否为正确格式，如果非正确则清空
    if (!this.regex) {
      return;
    }
    // 重置匹配索引
    this.regex.lastIndex = 0;
    if (!this.regex.test(event.target.value)) {
      event.target.value = '';
    }
  }

  /* 检测文本变化时机进行数据绑定 */
  onInputTextChanged(event: any) {
    this.inputText = event.target.value;
  }
}

enum SpecialKeyCode {
  Enter = 13,
  UpArrow = 38,
  DownArrow = 40,
  LeftArrow = 37,
  RightArrow = 39,
  Escape = 27,
  SpaceBar = 32,
  Ctrl = 17,
  Alt = 18,
  Tab = 9,
  Shift = 16,
  CapsLock = 20,
  WindowsKey = 91,
  WindowsOptionKey = 93,
  Backspace = 8,
  Home = 36,
  End = 35,
  Insert = 45,
  Delete = 46,
  PageUp = 33,
  PageDown = 34,
  NumLock = 144,
  PrintScreen = 44,
  ScrollLock = 145,
  PauseBreak = 19,
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
}


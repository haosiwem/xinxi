import {Injectable, NgModule, OnInit} from '@angular/core';

export class MomentService implements OnInit {
  momentMessage = [];

  constructor() {
  }

  momentAdd(message) {
    this.momentMessage.push(message);
  }

  ngOnInit() {
  }
}

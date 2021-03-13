import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';
@Component({
selector: 'app-home-menu',
templateUrl: './categorymenu.component.html',
styleUrls: ['./categorymenu.component.css']
})
export class CategoryMenuComponent {
@Input()
title: string;
count = 0;
constructor() {}
countNumber() {
    this.count = this.count + 1;
}
}

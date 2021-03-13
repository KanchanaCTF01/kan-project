import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';
@Component({
selector: 'app-home-nav-search',
templateUrl: './searchbar.component.html',
styleUrls: ['./searchbar.component.css']
})
export class SearchBarComponent {
@Input()
title: string;
count = 0;
constructor() {}
countNumber() {
    this.count = this.count + 1;
}
}

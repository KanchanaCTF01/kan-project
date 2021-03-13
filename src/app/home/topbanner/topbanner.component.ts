import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';
@Component({
selector: 'app-home-topbanner',
templateUrl: './topbanner.component.html',
styleUrls: ['./topbanner.component.css']
})
export class TopBannerComponent {
@Input()
title: string;
count = 0;
constructor() {}
countNumber() {
    this.count = this.count + 1;
}
}

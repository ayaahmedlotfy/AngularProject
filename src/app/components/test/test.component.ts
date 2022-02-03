import { Component, ElementRef } from '@angular/core';
import {AfterViewInit, ViewChild ,ViewChildren} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {
    @ViewChild('divelement') mydiv!:ElementRef;
    @ViewChildren('divelements') mydivs! :any;


  ngAfterViewInit(): void {
    console.log((this.mydiv.nativeElement as HTMLDivElement).innerHTML);
    console.log(this.mydivs);

  }

}

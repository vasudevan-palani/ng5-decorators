import {
    Compiler, Component,Input, Injector, VERSION, ViewChild, NgModule, NgModuleRef,
    ViewContainerRef, AfterViewInit, OnInit
} from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { OnEvent, EmitBefore, EmitAfter} from './event';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  content = '<h1>\n  I am content from the server, just normal HTML\n</h1>\n<my-component name="hello">I am the projected content!</my-component>';

  @EmitBefore("AppComponent/submit")
  submit(test){
    console.log("In Submit",this);
  }

  @OnEvent("AppComponent/submit")
  test(){
    console.log("In test");
  }

  @OnEvent("AppComponent/submit")
  test1(){
    console.log("In test1");
  }

}

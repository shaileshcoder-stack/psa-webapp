import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import {  FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ExampleService } from 'src/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts: any[] = [];
  constructor(private exampleService: ExampleService) {}
  ngOnInit(): void {
    this.loaddata()
}
loaddata() {
  this.exampleService.getdata().subscribe(
    (data) =>{
      console.log("data received",data);
      this.posts =data;
    },
    (error) => {
      console.error("error occured",error)
    }
  )
}
}
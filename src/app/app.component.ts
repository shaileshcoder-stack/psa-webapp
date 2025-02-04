import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import {  FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ExampleService } from 'src/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
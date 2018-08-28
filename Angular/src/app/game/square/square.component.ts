import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  private _stateService: StateService;

  @Input() column: number;
  @Input() row: number;

  constructor(stateService: StateService) {
    this._stateService = stateService;
  }

  ngOnInit() {
  }

  _handleSquareClick() {
  	console.log('Click on square', this.row, this.column);
    this._stateService.updateValue(this.row, this.column);
  }

}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { StateService, State } from './../state.service';
import { MyhttpService } from './../../myhttp.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	private _status: string = 'fetching';

  constructor(route: ActivatedRoute, stateService: StateService, myhttpService: MyhttpService) {
  	if (route.snapshot.data.continue) {
  		myhttpService.getSavedGame().subscribe((state:State) => {
  			stateService.state = state;
  			this._status = 'success';
  		}, error => {
  			this._status = error.statusText;
  		});
  	} else {
  		stateService.reset();
  		this._status = 'success';
  	}
  }

  ngOnInit() {
  }

}

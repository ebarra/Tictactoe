import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { StateService, State } from './../state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(route: ActivatedRoute, stateService: StateService) {
  	if (route.snapshot.data.continue) {
  		stateService.state = {
			  "turn": "PLAYER0",
			  "values": [
			    [ "X", "X", "-"],
			    [ "X","0","-"],
			    ["0","-","-"]
			  ]
			};
  	} else {
  		stateService.reset();
  	}
  }

  ngOnInit() {
  }

}

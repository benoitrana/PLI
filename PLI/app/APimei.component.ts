import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ap-imei',
  templateUrl: 'app/APimei.template.html'
})

export class APimeiComponent {
	constructor() {  }
	@Input() completed;
	@Output() childEvent: EventEmitter<any> = new EventEmitter();
	printInput: boolean = true;
	pannelClass: string;
	
	ngDoCheck(completed) {
		for (var i = 0; i < this.completed.length; i++)
			if (this.completed[i].component == 'apimei')
				this.pannelClass = this.completed[i].class;
	}

	saveStep(deviceValue){
		this.childEvent.emit(
				{status: 'completed', etape: 3}
		);
	}

	ignoreStep(value){
		this.printInput = false;
		//this.printInput = true;
		this.saveStep('deviceValue');
	}
}
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ap-simlocker',
  templateUrl: 'app/APSimlocker.template.html',
})

export class APSimlockerComponent {
	constructor() {  }
	@Input() completed;
	@Output() childEvent: EventEmitter<any> = new EventEmitter();
	pannelClass: string;
	
	ngDoCheck(completed) {
		for (let i = 0; i < this.completed.length; i++)
			if (this.completed[i].component == 'apsimlocker')
				this.pannelClass = this.completed[i].class;
	}

	saveStep(deviceValue){
		this.childEvent.emit(
				{status: 'completed', etape: 5}
		);
	}
}


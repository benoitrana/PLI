import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ap-model',
  templateUrl: 'app/APModel.template.html'
})

export class APModelComponent {
	constructor() {  }
	@Input() completed;
	@Output() childEvent: EventEmitter<any> = new EventEmitter();
	pannelClass: string;

	ngDoCheck(completed) {
		for (var i = 0; i < this.completed.length; i++)
			if (this.completed[i].component == 'apmodel')
				this.pannelClass = this.completed[i].class;
	}

	saveStep(deviceValue){
		this.childEvent.emit(
				{status: 'completed', etape: 2}
		);
	}
}


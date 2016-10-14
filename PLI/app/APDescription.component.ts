import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ap-description',
  templateUrl: 'app/APDescription.template.html'
})

export class APDescriptionComponent {
	constructor() {  }
	@Input() completed;
	@Output() childEvent: EventEmitter<any> = new EventEmitter();
	pannelClass: string;

	ngDoCheck(completed) {
		for (var i = 0; i < this.completed.length; i++)
			if (this.completed[i].component == 'apdescription')
				this.pannelClass = this.completed[i].class;
	}

	saveStep(deviceValue){
		this.childEvent.emit(
				{status: 'completed', etape: 7}
		);
	}
}

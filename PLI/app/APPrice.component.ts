import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ap-price',
  templateUrl: 'app/APPrice.template.html'
})

export class APPriceComponent {
	constructor() {  }
	@Input() completed;
	@Output() childEvent: EventEmitter<any> = new EventEmitter();
	pannelClass: string;

	ngDoCheck(completed) {
		for (var i = 0; i < this.completed.length; i++)
			if (this.completed[i].component == 'apprice')
				this.pannelClass = this.completed[i].class;
	}

	saveStep(deviceValue){
		this.childEvent.emit(
				{status: 'completed', etape: 6}
		);
	}
}


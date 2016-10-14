import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ap-capacity',
  templateUrl: 'app/APCapacity.template.html',
})

export class APCapacityComponent {
	@Input() completed;
	@Output() childEvent: EventEmitter<any> = new EventEmitter();
	printInput: boolean = true;
	pannelClass: string;
	
	ngDoCheck(completed) {
		for (let i = 0; i < this.completed.length; i++)
			if (this.completed[i].component == 'apcapacity')
				this.pannelClass = this.completed[i].class;
	}

	saveStep(deviceValue){
		this.childEvent.emit(
				{status: 'completed', etape: 4}
		);
	}
}


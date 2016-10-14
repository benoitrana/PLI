import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ap-brand',
  templateUrl: 'app/APBrand.template.html',
})

export class APBrandComponent {
	constructor() {  }
	@Output() childEvent: EventEmitter<any> = new EventEmitter();
	completed: string = 'panel-danger';
	
	saveStep(){
		this.completed = 'panel-success';
		this.childEvent.emit(
				{status: 'completed', etape: 1}
			);
		}
}


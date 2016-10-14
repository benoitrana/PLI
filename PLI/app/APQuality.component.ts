import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ap-quality',
  templateUrl: 'app/APQuality.template.html'
})

export class APQualityComponent {
	constructor() {  }
	@Input() completed;
	@Output() childEvent: EventEmitter<any> = new EventEmitter();
	pannelClass: string;
	blockquote = [
		{name: 'blockquotesuccess', className: 'blockquote-success', class: '', selected: false},
		{name: 'blockquotewarning', className: 'blockquote-warning', class: '', selected: false},
		{name: 'blockquotedanger', className: 'blockquote-danger', class: '', selected: false}
	];
	
	ngDoCheck(completed) {
		for (var i = 0; i < this.completed.length; i++)
			if (this.completed[i].component == 'apquality')
				this.pannelClass = this.completed[i].class;
	}

	saveStep(deviceValue){
		this.childEvent.emit(
				{status: 'completed', etape: 7}
		);
	}

	selectedQuality(who){
		for (let i = 0; i < this.blockquote.length; i++)
		{
			if (who == this.blockquote[i].name)
			{
				this.blockquote[i].class = this.blockquote[i].className;
				this.blockquote[i].selected = true;
			}
			else
			{
				this.blockquote[i].class = '';
				this.blockquote[i].selected = false;
			}
		}
	}
}


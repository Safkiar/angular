import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{ title: string; text: string }>();

  enteredTitle = '';
  enteredText = '';

  ngOnInit(): void {
    console.log('oninit');
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
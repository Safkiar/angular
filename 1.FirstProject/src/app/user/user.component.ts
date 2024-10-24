import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  @Input({ required: true }) selected!: boolean;

  // singnals
  // select = output<string>()

  // signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // @Input
  get imagePath() {
    // return 'assets/users/' + this.avatar;
    // object desctructuring
    return 'assets/users/' + this.user.avatar;
  }

  // signal input()
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  onSelectUser() {
    // object desctructuring
    // this.select.emit(this.id)
    this.select.emit(this.user.id);
  }
}

// SIGNAL VS ZONE

// export class UserComponent {

//   // z
//   // selectedUser = DUMMY_USERS[randomIndex]
//   // S
//   // selectedUser = signal(DUMMY_USERS[randomIndex])

//   // z
//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser.avatar}
//   // S - take singnal from selectedUser
//   // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

//   onSelectUser() {
//     // z
//     // this.selectedUser = DUMMY_USERS[randomIndex]
//     // S
//     // this.selectedUser.set(DUMMY_USERS[randomIndex])
//   }
// }

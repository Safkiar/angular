import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { MessagesService } from '../message.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  // imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  // messages = input.required<string[]>();
  private messageService = inject(MessagesService);
  // messages$ = this.messageService.messages$;
  messages = this.messageService.allMessages;
  // messages = this.messageService.allMessages;
  // private cdRef = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);

  // messages: string[] = [];

  // get messages() {
  //   return this.messageService.allMessages;
  // }

  // ngOnInit(): void {
  //   const subscription = this.messageService.messages$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.cdRef.markForCheck();
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}

// ChangeDetectionStrategy.OnPush is a strategy to improve performance by limiting when Angular checks for changes in the component. Instead of automatically running change detection for every event or data change (like it does in the default ChangeDetectionStrategy.Default), it only runs when specific triggers occur:

// .subscribe() is a method used to listen to changes in an Observable. When you subscribe to an observable, you provide a callback function that runs whenever the observable emits a new value or changes. Here,

import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  title = 'ringOfFire';

  constructor() {
    const aCollection = collection(this.firestore, 'cards')
    this.items$ = collectionData(aCollection);
  }

  getCardsRef() {
    return collection(this.firestore, 'cards');
  }

  // getCurrentCardRef() {
  //   return doc(collection(this.firestore, colId), docId)
  // }
}

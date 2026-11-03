import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonButton, IonCard, IonCardContent
} from '@ionic/angular';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
  count: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonButton, IonCard, IonCardContent
  ],
})
export class HomePage {
  menu: MenuItem[] = [
    { id: 1, name: 'Hamburguesa Clásica', price: 15000, emoji: '🍔', count: 0 },
    { id: 2, name: 'Papas Francesas', price: 6000, emoji: '🍟', count: 0 },
    { id: 3, name: 'Gaseosa 400ml', price: 4000, emoji: '🥤', count: 0 },
  ];

  addItem(item: MenuItem) {
    item.count++;
  }

  removeItem(item: MenuItem) {
    if (item.count > 0) {
      item.count--;
    }
  }

  getTotalItems(): number {
    return this.menu.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice(): number {
    return this.menu.reduce((sum, item) => sum + (item.price * item.count), 0);
  }

  formatPrice(value: number): string {
    return '$' + value.toLocaleString('es-CO');
  }
}

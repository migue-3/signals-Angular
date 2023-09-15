import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  // public menuItems: MenuItem[] = [
  //   { title: 'contador', route: 'counter' },
  //   { title: 'Mutaciones', route: 'properties' },
  //   { title: 'Usuario', route: 'user-info' }
  // ]

  //creamos la misma propiedad pero ahora como una SIGNAL
  public menuItems = signal<MenuItem[]>([
     { title: 'contador', route: 'counter' },
     { title: 'Mutaciones', route: 'properties' },
     { title: 'Usuario', route: 'user-info' }
  ]);



}

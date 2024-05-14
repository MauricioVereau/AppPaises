import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: `
  button{
  background-color: var(--color3);
  }
  button:hover{
  background-color: var(--color4);
  }
  `
})
export class SidebarComponent {

}

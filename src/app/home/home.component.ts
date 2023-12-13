import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{data}}
    </p>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  @Input('parentData') data!: any ;

}

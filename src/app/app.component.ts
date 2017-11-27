import { Component } from '@angular/core';

@Component({ //decorator
  selector: 'app-root', // app-root is a tag in index.html
  templateUrl: './app.component.html', //views that are used by the components.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

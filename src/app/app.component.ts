
// This is where you import any services you need
import { Component } from '@angular/core';

// Obtained from the import above
// This is what makes this a component
// @ symbol is called a decorator

@Component({
  selector: 'app-root', // in index.html there is this '<app-root></app-root>'
  templateUrl: './app.component.html', // template used with this tag
  styleUrls: ['./app.component.css'] // css used with this tag
})

// This is where the methods and class is defined. this is accessible by the template
export class AppComponent {
  title = 'app';
}

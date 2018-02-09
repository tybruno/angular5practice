
// This is where you import any services you need
import { Component } from '@angular/core';

// Obtained from the import above
// This is what makes this a component
// @ symbol is called a decorator

@Component({
  selector: 'app-root', // in index.html there is this '<app-root></app-root>'
  templateUrl: './app.component.html', // template used with this tag. This should be used when there is a lot of HTML used!
  styleUrls: ['./app.component.css'] // css used with this tag
 // template: '<h1> Inline html example</h1>' // THis is an example of inline template. This should only be used when there is only a small amount of html used

})

// This is where the methods and class is defined. this is accessible by the template
export class AppComponent {
  title = 'app';
}

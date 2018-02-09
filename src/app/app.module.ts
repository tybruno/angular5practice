import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { AboutComponent } from './about/about.component'; // added when we created a new component


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    AboutComponent // added when we created a new component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

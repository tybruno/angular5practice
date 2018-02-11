import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this

// This is where we set up our paths!!!!
const routes: Routes = [
  {
    path: '',
    component: MyNewComponentComponent
  },
  {
    // Route parameter ':id'. you can have as many route parameters as you want. Ex: about/:id/:whatever
    path: 'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

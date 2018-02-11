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
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmicalculatorComponent } from './component/emicalculator/emicalculator.component';

const routes: Routes = [
  { path: '', redirectTo: "/emicalculator", pathMatch: 'full' },
  {path: 'emicalculator', component:EmicalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

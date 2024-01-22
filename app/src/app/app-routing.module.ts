import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { TablePageComponent } from './table-page/table-page.component';
import { LoginComponent } from './login/login.component';
import { RowInfoComponent } from './row-info/row-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add this route
  { path: 'table', component: TablePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'row-info/:id', component: RowInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes , withComponentInputBinding())
  ]
})
export class AppRoutingModule {}
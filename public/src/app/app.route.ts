import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {FactoryFormComponent} from './components/factory-form/factory-form.component';
import {ContentComponent} from './components/content/content.component';

/**
 * Create routes structure
 */
const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'factory-form', component: FactoryFormComponent },
  { path: 'content', component: ContentComponent},
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

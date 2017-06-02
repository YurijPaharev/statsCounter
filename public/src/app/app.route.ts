import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {FactoryFormComponent} from './components/factory-form/factory-form.component';
import {ContentComponent} from './components/content/content.component';

/**
 * Create routes structure
 */
const routes: Routes = [
  { path: '',   redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, children: [
    { path: '', redirectTo: 'content', pathMatch: 'full' },
    { path: 'content', component: ContentComponent },
    { path: 'factory-form', component: FactoryFormComponent }
    ]
  }
//   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

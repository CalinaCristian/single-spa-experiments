import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { Home } from './pages/home';
import { PageOne } from './pages/page-1';
import { PageTwo } from './pages/page-2';
import { Subpage } from './pages/subpage';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'page1', component: PageOne },
  { path: 'page2', component: PageTwo,
    children: [{
      path: 'subpage', component: Subpage
    }]
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/ng-app-18' }
  ]
})
export class AppRoutingModule { }

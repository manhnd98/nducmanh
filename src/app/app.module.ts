import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScullyLibModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
      { path: '**', component: AppComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

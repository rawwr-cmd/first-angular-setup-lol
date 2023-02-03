//module is exported as class in angular
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

enableProdMode();
@NgModule({
  imports: [BrowserModule],
  // Declarations in Angular refer to the process of registering a
  // component, directive, pipe, or service with the Angular application.
  declarations: [AppComponent],
  // list of components for bootstraping other
  bootstrap: [AppComponent],
})
export class AppModule {}

// In Angular, "bootstrapping" refers to the process of
// launching or starting an Angular application. When an Angular
// application starts, the root module (also known as the "bootstrap module")
// is automatically loaded, and its
// components are used to render the application in the browser.

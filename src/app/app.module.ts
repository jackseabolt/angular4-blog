import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component'
import { AppComponent } from './app/app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { CheckedComponent } from './checked/checked.component';

@NgModule({
  declarations: [
    AppComponent, 
    PostComponent, 
    FormComponent, 
    HeaderComponent,
    CheckedComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

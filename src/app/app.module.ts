import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component'
import { AppComponent } from './app/app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent, 
    PostComponent, 
    FormComponent, 
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

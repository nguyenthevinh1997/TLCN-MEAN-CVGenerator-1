import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InfomationComponent } from './infomation/infomation.component';
import { EditorComponent } from './editor/editor.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TemplateComponent } from './template/template.component';
import { A4ZoneComponent } from './a4-zone/a4-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    InfomationComponent,
    EditorComponent,
    ContactInfoComponent,
    TemplateComponent,
    A4ZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

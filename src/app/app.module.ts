import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { arr_routing } from "./routing";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatCheckboxModule, MatDialogModule } from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ViewMoreComponent } from './customer/view-more/view-more.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MainNavComponent,
    ViewMoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    arr_routing,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,

    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  entryComponents:[
    ViewMoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

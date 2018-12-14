import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SearchBar } from '@angular/ionic';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatListModule,
  
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
// import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FilterPipe} from './shared/filter.pipe';


@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule,

    MatButtonModule, MatIconModule,
    MatTabsModule, FlexLayoutModule,ScrollDispatchModule,
  MatFormFieldModule, MatCardModule,MatListModule,MatInputModule, MatAutocompleteModule],
  declarations: [AppComponent, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

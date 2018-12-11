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
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatIconModule,
  MatRadioModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCardModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { GroupByPipe } from './shared/groupby.pipe';
import { KeyValuePipe } from './shared/key-value.pipe';
import { UnCamelCasePipe } from './shared/un-camel-case.pipe';
// import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FilterPipe} from './shared/filter.pipe';


@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule,
  MatExpansionModule,
    MatButtonModule, MatIconModule,
    MatTabsModule, FlexLayoutModule,ScrollDispatchModule,
  MatFormFieldModule, MatCardModule,MatListModule, MatGridListModule, MatInputModule, MatAutocompleteModule],
  declarations: [AppComponent, GroupByPipe, KeyValuePipe, UnCamelCasePipe, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

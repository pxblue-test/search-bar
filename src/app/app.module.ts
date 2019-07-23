import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FilterPipe} from './shared/filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, MatToolbarModule,
  
    MatButtonModule, MatIconModule,
    MatTabsModule, FlexLayoutModule,
  MatFormFieldModule,MatListModule, MatInputModule],
  declarations: [AppComponent, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

const MaterialComponents = [
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})

export class MaterialModule { }

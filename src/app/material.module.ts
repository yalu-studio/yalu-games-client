import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatPaginatorModule } from '@angular/material/paginator';

// import {
//    MatBadgeModule,
//    MatSidenavModule,
//    MatListModule,
//    MatGridListModule,
//    MatSelectModule,
//    MatRadioModule,
//    MatChipsModule,
//    MatTooltipModule,
//    MatTableModule,
//    MatPaginatorModule
// } from '@angular/material';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatButtonToggleModule,
      MatIconModule,
      MatSnackBarModule,
      MatDatepickerModule,
      MatNativeDateModule
      // MatSidenavModule,
      // MatBadgeModule,
      // MatListModule,
      // MatGridListModule,
      // MatSelectModule,
      // MatRadioModule,
      // MatChipsModule,
      // MatTooltipModule,
      // MatTableModule,
      // MatPaginatorModule
   ],
   exports: [
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatButtonToggleModule,
      MatIconModule,
      MatSnackBarModule,
      MatDatepickerModule,
      MatNativeDateModule
      // MatSidenavModule,
      // MatBadgeModule,
      // MatListModule,
      // MatGridListModule,
      // MatSelectModule,
      // MatRadioModule,
      // MatChipsModule,
      // MatTooltipModule,
      // MatTableModule,
      // MatPaginatorModule
   ],
   providers: [
      // MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }

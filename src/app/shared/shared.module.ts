import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
//Directives
import { HighlightDirective } from '../shared/directive/highlight.directive';
//Pipes
import { ExponentialPipe } from '../shared/pipe/exponential.pipe'
//Components
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { FibonacciPipe } from './pipe/fibonacci.pipe';




@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    FibonacciPipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    QuicklinkModule
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    FibonacciPipe
  ]
})
export class SharedModule { }

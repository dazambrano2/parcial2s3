import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorList } from './actor-list/actor-list';
import { ActorDetail } from './actor-detail/actor-detail';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ActorList,
    ActorDetail
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ActorList],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ActorModule { }

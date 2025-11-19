import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetail } from './actor-detail';

describe('ActorDetail', () => {
  let component: ActorDetail;
  let fixture: ComponentFixture<ActorDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorList } from './actor-list';

describe('ActorList', () => {
  let component: ActorList;
  let fixture: ComponentFixture<ActorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

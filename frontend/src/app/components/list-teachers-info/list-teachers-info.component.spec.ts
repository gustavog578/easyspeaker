import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeachersInfoComponent } from './list-teachers-info.component';

describe('ListTeachersInfoComponent', () => {
  let component: ListTeachersInfoComponent;
  let fixture: ComponentFixture<ListTeachersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeachersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeachersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

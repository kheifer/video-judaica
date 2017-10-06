import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorabiliaListComponent } from './memorabilia-list.component';

describe('MemorabiliaListComponent', () => {
  let component: MemorabiliaListComponent;
  let fixture: ComponentFixture<MemorabiliaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorabiliaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorabiliaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

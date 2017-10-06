import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorabiliaDetailComponent } from './memorabilia-detail.component';

describe('MemorabiliaDetailComponent', () => {
  let component: MemorabiliaDetailComponent;
  let fixture: ComponentFixture<MemorabiliaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorabiliaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorabiliaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorabiliaShopComponent } from './memorabilia-shop.component';

describe('MemorabiliaShopComponent', () => {
  let component: MemorabiliaShopComponent;
  let fixture: ComponentFixture<MemorabiliaShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorabiliaShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorabiliaShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

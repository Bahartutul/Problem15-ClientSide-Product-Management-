import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMasterPageComponent } from './product-master-page.component';

describe('ProductMasterPageComponent', () => {
  let component: ProductMasterPageComponent;
  let fixture: ComponentFixture<ProductMasterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMasterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

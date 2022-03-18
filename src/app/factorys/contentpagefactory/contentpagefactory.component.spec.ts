import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentpagefactoryComponent } from './contentpagefactory.component';

describe('ContentpagefactoryComponent', () => {
  let component: ContentpagefactoryComponent;
  let fixture: ComponentFixture<ContentpagefactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentpagefactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentpagefactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

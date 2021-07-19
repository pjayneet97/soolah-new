import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetAvailabilitySuccessPage } from './set-availability-success.page';

describe('SetAvailabilitySuccessPage', () => {
  let component: SetAvailabilitySuccessPage;
  let fixture: ComponentFixture<SetAvailabilitySuccessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAvailabilitySuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetAvailabilitySuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

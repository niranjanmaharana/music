import { TestBed } from '@angular/core/testing';

import { ActivityMonitorService } from './activity-monitor.service';

describe('ActivityMonitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityMonitorService = TestBed.get(ActivityMonitorService);
    expect(service).toBeTruthy();
  });
});

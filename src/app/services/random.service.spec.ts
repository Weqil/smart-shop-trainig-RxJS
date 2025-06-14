import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomService', () => {
  let service: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('random number >= min and number <= max',()=>{
    let min = 0
    let max = 100
    expect(service.generateRandomForMinMax(min,max)).toBeGreaterThanOrEqual(min)
    expect(service.generateRandomForMinMax(min,max)).toBeLessThanOrEqual(max)
  })
});

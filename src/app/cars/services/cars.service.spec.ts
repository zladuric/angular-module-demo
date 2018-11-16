import { CarsService } from './cars.service';
import { of as observableOf } from 'rxjs';
import { environment } from '../../../environments/environment';
import createSpy = jasmine.createSpy;

const mockCars = [{
  'Name': 'chevrolet chevelle malibu',
  'Miles_per_Gallon': 18,
  'Cylinders': 8,
  'Displacement': 307,
  'Horsepower': 130,
  'Weight_in_lbs': 3504,
  'Acceleration': 12,
  'Year': '1970-01-01',
  'Origin': 'USA',
},
  {
    'Name': 'buick skylark 320',
    'Miles_per_Gallon': 15,
    'Cylinders': 8,
    'Displacement': 350,
    'Horsepower': 165,
    'Weight_in_lbs': 3693,
    'Acceleration': 11.5,
    'Year': '1970-01-01',
    'Origin': 'USA',
  },
  {
    'Name': 'plymouth satellite',
    'Miles_per_Gallon': 18,
    'Cylinders': 8,
    'Displacement': 318,
    'Horsepower': 150,
    'Weight_in_lbs': 3436,
    'Acceleration': 11,
    'Year': '1970-01-01',
    'Origin': 'USA',
  },
  {
    'Name': 'amc rebel sst',
    'Miles_per_Gallon': 16,
    'Cylinders': 8,
    'Displacement': 304,
    'Horsepower': 150,
    'Weight_in_lbs': 3433,
    'Acceleration': 12,
    'Year': '1970-01-01',
    'Origin': 'USA',
  },
  {
    'Name': 'ford torino',
    'Miles_per_Gallon': 17,
    'Cylinders': 8,
    'Displacement': 302,
    'Horsepower': 140,
    'Weight_in_lbs': 3449,
    'Acceleration': 10.5,
    'Year': '1970-01-01',
    'Origin': 'USA',
  }];

fdescribe('CarsService', () => {
  let service: CarsService;
  let mockClient: any;
  beforeEach(() => {
    mockClient = {
      get: createSpy(),
    };
    mockClient.get.and.callFake(() => observableOf(mockCars));
    service = new CarsService(mockClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of cars', (done) => {
    service.getCars()
      .subscribe((cars) => {
        expect(cars.length).toEqual(5);
        expect(mockClient.get.calls.count()).toEqual(1);
        expect(mockClient.get.calls.first().args).toEqual([environment.carsUrl]);
        done();
      });
  });
});

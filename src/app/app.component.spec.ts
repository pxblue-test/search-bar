import {FilterPipe} from './shared/filter.pipe';

describe('Pipe: Default', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('providing no value returns fallback', () => {
    let items = [
  {"number":1,"president":"George Washington","birth_year":1732,"death_year":1799,"took_office":"1789-04-30","left_office":"1797-03-04","party":"No Party"},
  {"number":2,"president":"John Adams","birth_year":1735,"death_year":1826,"took_office":"1797-03-04","left_office":"1801-03-04","party":"Federalist"},
  {"number":3,"president":"Thomas Jefferson","birth_year":1743,"death_year":1826,"took_office":"1801-03-04","left_office":"1809-03-04","party":"Democratic-Republican"},
  {"number":4,"president":"James Madison","birth_year":1751,"death_year":1836,"took_office":"1809-03-04","left_office":"1817-03-04","party":"Democratic-Republican"},
  {"number":5,"president":"James Monroe","birth_year":1758,"death_year":1831,"took_office":"1817-03-04","left_office":"1825-03-04","party":"Democratic-Republican"}];

  let filter = pipe.transform(items, 'george');
    expect(filter.length).toEqual(1);
  });

});


import { FilterPipe } from './filter.pipe';

describe('MyFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});

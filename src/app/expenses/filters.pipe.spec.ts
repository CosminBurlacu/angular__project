import { FiltersPipe } from './filters.pipe';

describe('FiltersPipe', () => {
  it('create an instance', () => {
    const pipe = new FiltersPipe();
    expect(pipe).toBeTruthy();
  });

  let pipe = new FiltersPipe();

  it('should return empty array if no expenses are provided', () => {
    const items = [];

    const filtered = pipe.transform(items, 'test');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });

  it('should return unfiltered expenses if no search value is provided', () => {
    const items = [];
    items.push({ id: 1, name: 'test' });

    const filtered = pipe.transform(items, undefined);

    expect(filtered).toEqual(items);
  });
});

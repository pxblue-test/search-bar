import { FilterPipe } from './filter';
const data = [
    { "number": 1, "president": "George Washington", "birth_year": 1732, "death_year": 1799, "took_office": "1789-04-30", "left_office": "1797-03-04", "party": "No Party" },
    { "number": 2, "president": "John Adams", "birth_year": 1735, "death_year": 1826, "took_office": "1797-03-04", "left_office": "1801-03-04", "party": "Federalist" },
    { "number": 3, "president": "Thomas Jefferson", "birth_year": 1743, "death_year": 1826, "took_office": "1801-03-04", "left_office": "1809-03-04", "party": "Democratic-Republican" },
    { "number": 4, "president": "James Madison", "birth_year": 1751, "death_year": 1836, "took_office": "1809-03-04", "left_office": "1817-03-04", "party": "Democratic-Republican" },
    { "number": 5, "president": "James Monroe", "birth_year": 1758, "death_year": 1831, "took_office": "1817-03-04", "left_office": "1825-03-04", "party": "Democratic-Republican" }
]

describe('Filter Pipe', () => {
    let pipe: FilterPipe;

    beforeEach(() => {
        pipe = new FilterPipe();
    });

    it('filters by name', () => {
        let filter = pipe.transform(data, 'george');
        expect(filter.length).toEqual(1);
        filter = pipe.transform(data, ' james');
        expect(filter.length).toEqual(2);
        filter = pipe.transform(data, 'Eddie');
        expect(filter.length).toEqual(0);
    });

    it('filters by took office year', () => {
        let filter = pipe.transform(data, '17');
        expect(filter.length).toEqual(3);
        filter = pipe.transform(data, '18');
        expect(filter.length).toEqual(3);
        filter = pipe.transform(data, '99');
        expect(filter.length).toEqual(0);
    });

    it('filters by party', () => {
        let filter = pipe.transform(data, 'democrat');
        expect(filter.length).toEqual(3);
        filter = pipe.transform(data, 'federal');
        expect(filter.length).toEqual(1);
        filter = pipe.transform(data, 'green');
        expect(filter.length).toEqual(0);
    });

});


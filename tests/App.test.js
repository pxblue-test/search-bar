import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
const data = [
    { "president": "XXX", "took_office": "1111", "party": "AAA" },
    { "president": "YYY", "took_office": "2222", "party": "ZZZ" },
    { "president": "ZZZ", "took_office": "3333", "party": "CCC" }
]

Enzyme.configure({ adapter: new Adapter() })

describe('App Tests ', function () {
    it('App Renders', () => {
        const tree = renderer.create(
            <App />
        ).toJSON();
        console.log("tree", tree)
        expect(tree).toMatchSnapshot();
    });
    it('filters search results', () => {
        const app = shallow(<App />);
        app.instance().setState({
            data,
            results: data,
        });
        app.instance().setState({ query: 'x' });
        app.instance().onSearch();
        expect(app.state().results.length).toEqual(1);

        app.instance().setState({ query: 'z' });
        app.instance().onSearch();
        expect(app.state().results.length).toEqual(2);

        app.instance().setState({ query: '1' });
        app.instance().onSearch();
        expect(app.state().results.length).toEqual(1);

        app.instance().setState({ query: 'm' });
        app.instance().onSearch();
        expect(app.state().results.length).toEqual(0);

    });
});
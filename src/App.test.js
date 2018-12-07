import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('filters search results correctly', () => {
  const app = shallow(<App/>).dive();
  app.instance().setState({list: [
    {"president":"XXX","took_office":"1111","party":"AAA"},
    {"president":"YYY","took_office":"2222","party":"ZZZ"},
    {"president":"ZZZ","took_office":"3333","party":"CCC"}
  ]});
  app.instance().setState({query:'x'});
  let filtered = app.instance().searchResults();
  expect(filtered.length).toEqual(1);
  app.instance().setState({query:'z'});
  filtered = app.instance().searchResults();
  expect(filtered.length).toEqual(2);
  app.instance().setState({query:'1'});
  filtered = app.instance().searchResults();
  expect(filtered.length).toEqual(1);
  app.instance().setState({query:'m'});
  filtered = app.instance().searchResults();
  expect(filtered.length).toEqual(0);
});


function searchResults(){
  const query = this.state.query.toLowerCase().trim();
  return this.state.list.filter((item) => {
    if(item.president.toLowerCase().trim().indexOf(query) >= 0){return true;}
    if(item.party.toLowerCase().trim().indexOf(query) >= 0){return true;}
    if(item.took_office.toLowerCase().trim().indexOf(query) >= 0){return true;}
    return false;
  });
}
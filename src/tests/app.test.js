import React from 'react';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';
import {mount, configure} from 'enzyme';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

describe('App component tests', () => {

   test('Snapshot renders', () => {
      const app = renderer.create(<App />);
      const tree = app.toJSON();
      expect(tree).toMatchSnapshot();
   });

   describe('Rendering test', () => {
      const app = mount(<App />);

      it('renders textarea input', () => {
         expect(app.find('#text-area').length).toEqual(1);
      });

      it('renders button', () => {
         expect(app.find('.parse-button').length).toEqual(1);
      });

      it('renders output', () => {
         expect(app.find('.result').length).toEqual(1);
      });
   });

   const app = mount(<App />, { attachTo: document.body });

   describe('Input test', () => {
      it('testing input ability of textarea', () => {
         const input = app.find('#text-area');
         input.at(0).instance().value = 'Hello, world!';
         expect(input.instance().value).toBe('Hello, world!');
      });
   });

   describe('Parsing test', () => {
      const button = app.find('.parse-button');
      const input = app.find('#text-area');
      const output = app.find('.result');

      it('parsing empty string', () => {
         input.at(0).instance().value = '';
         button.at(0).simulate('click');
         expect(output.text()).toBe('');
      });

      it('parsing string "Hello, world!"', () => {
         input.at(0).instance().value = 'Hello, world!';
         button.at(0).simulate('click');
         expect(output.text()).toBe('Hello, world!');
      });

      it('parsing link "https://www.google.ru/"', () => {
         input.at(0).instance().value = 'https://www.google.ru/';
         button.at(0).simulate('click');
         expect(output.text()).toBe('<a href=" https://www.google.ru/ ">https://www.google.ru/</a>');
      });
   });
});

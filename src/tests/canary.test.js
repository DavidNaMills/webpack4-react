import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('doesnt kill the canary', ()=>{
    expect(true).toBeTruthy();
});

it('Canary Snapshot', ()=>{
    const comp = renderer.create(<App />);
    const app = comp.toJSON();
    expect(app).toMatchSnapshot();
});
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../src/components/Header'
import Nav from '../../src/components/Nav'

test('Should render Header correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header/>)

    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('Should render Nav correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Nav/>)

    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

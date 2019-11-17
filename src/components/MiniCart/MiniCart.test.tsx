
import React, { cloneElement, ReactNode } from 'react'
import { MiniCart } from './MiniCart'
import { mount, ReactWrapper } from 'enzyme'
import { mockProducts } from '../../mocks/mockProducts'
import { Popover } from 'antd'

describe('<ProductCard />', () => {

  let wrapper: ReactWrapper
  const updateQuantity = jest.fn()
  const removeFromCart = jest.fn()
  const cart = [{
    product: mockProducts.results[1],
    quantity: 1
  },
  {
    product: mockProducts.results[2],
    quantity: 1
  },
  {
    product: mockProducts.results[3],
    quantity: 2
  }]

  beforeEach(() => {
    wrapper = mount(
      <MiniCart
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    )
  })

  it('Should show correct quantity', () => {
    expect(wrapper.find(Popover).length).toEqual(1)
    expect(wrapper.find('p.current').text()).toEqual('4')
  })

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})

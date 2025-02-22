/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({id, currentQuantity}) {

    const dispatch = useDispatch();
  return (
    <div className='flex gap-1 items-center md:gap-3'>
        <Button type='round' onClick={() => dispatch(increaseItemQuantity(id))}>+</Button>
        <span className='font-medium text-sm'>{currentQuantity}</span>
        <Button type='round' onClick={() => dispatch(decreaseItemQuantity(id))}>-</Button>
    </div>
  )
}

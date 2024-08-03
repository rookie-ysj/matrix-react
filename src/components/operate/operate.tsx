import './index.scss'
import { useCustomSelector } from '../../hooks/useStore.ts';
import { useEffect } from 'react';
import { KeyBoardOperation, keyDown } from '../../utils/control.ts';

export default function Operate() {
  const curBlock = useCustomSelector(state => state.currentBlock);

  function keyDownWithData(key: Parameters<typeof keyDown>[0]) {
    return keyDown(key, curBlock.block)
  }

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      keyDownWithData(e.key)
    });
  });
  return (
    <div className='operate'>
      <button onClick={() => keyDownWithData(KeyBoardOperation.LEFT)}>左边</button>
      <button onClick={() => keyDownWithData(KeyBoardOperation.RIGHT)}>右边</button>
    </div>
  )
}
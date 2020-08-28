import useState from '../../src/hooks/useState'

test('useState:boolean', () => {
  const [state, setState] = useState<boolean>(false);
  setState(true);
  expect(state.value).toEqual(true);
  expect(Object.isSealed(state)).toEqual(true)
  state.value = false
  expect(state).not.toEqual(false);
});

test('useState:number', () => {
  const [state, setState] = useState<number>(0);
  setState(1);
  expect(state.value).toEqual(1);
  expect(Object.isSealed(state)).toEqual(true)
  state.value = 2
  expect(state).not.toEqual(2);
});


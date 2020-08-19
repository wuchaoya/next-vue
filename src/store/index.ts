import { reactive, inject,readonly } from 'vue';

export interface StateProps {
  account: string,
  password: string,
}

export interface StoreProps {
  setAccount: (value: string) => void,
  setPassword: (value: string) => void,
  readonly state: StateProps
}

export const stateSymbol = Symbol('state');

export const createState = () => {
  
  const state = reactive({
    account: '',
    password: '',
  });
  
  const setAccount = (value: string) => state.account = value;
  
  const setPassword = (value: string) => state.password = value;
  
  return { setAccount, setPassword, state: readonly(state) };
  
}

export const useState: () =>StoreProps  = () => inject(stateSymbol);



import {action, observable, computed} from 'mobx';
import {inject} from 'vue';

export interface PropertyPropsType {
  name: string;
  age: number;
}

export interface StorePropsType extends PropertyPropsType {
  falseAge: () => number;
  setProperty: (property: PropertyPropsType) => void
}

export class store <Props>{
  
  constructor(property: PropertyPropsType) {
    this.setProperty(property)
  }
  
  @observable name
  
  @observable age;
  
  @computed get falseAge() {
    return this.age += 1
  }
  
  @action.bound setProperty(property) {
    this.name = property.name;
    this.age = property.age;
  }
  
}


const InstantiationStore = new store<StorePropsType>({name: 'jm',age: 18})

export default InstantiationStore;

export const stateSymbol = Symbol('state');

// @ts-ignore
export const useState: () => StorePropsType = () => inject(stateSymbol);

import { AbstractList } from './AbstractList';


export class ArrayList<T> extends AbstractList<T>{
  constructor() {
    super()
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }

  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }
  contains(obj: T): boolean {
    throw new Error('Method not implemented.');
  }
  add(obj: T): void;
  add(obj: T): void;
  add(obj: any): void {
    throw new Error('Method not implemented.');
  }
  get(i: number): T {
    throw new Error('Method not implemented.');
  }
  set(i: number, obj: T): T {
    throw new Error('Method not implemented.');
  }
  remove(i: number): T {
    throw new Error('Method not implemented.');
  }
  indexOf(Obj: T): number {
    throw new Error('Method not implemented.');
  }
}
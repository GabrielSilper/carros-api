import ICar from './ICar';

export type NewEntity<T> = Omit<ICar, '_id'>;

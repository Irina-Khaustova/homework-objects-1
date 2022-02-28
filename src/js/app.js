import orderByProps from './orderByProps';

const obj = {
  name: 'мечник',
  health: 20,
  level: 2,
  attack: 80,
  defence: 40,
};
orderByProps(obj, ['name', 'level']);

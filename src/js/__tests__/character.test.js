import { Character } from '../class/character.js';

test('create a character with valid parameters', () => {
  const character = new Character('Archer', 'Bowman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Archer',
    type: 'Bowman'
  };
  expect(character).toEqual(correct);
});

test('error for invalid name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
  expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
});

test('error for invalid type', () => {
  expect(() => new Character('Archer', 'InvalidType')).toThrow('Тип должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
});
import { Character } from '../character.js'

test('create a character with valid parameters', () => {
  const character = new Character('Archer', 'Bowman', 25, 25);
  expect(character.name).toBe('Archer');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('error for invalid name', () => {
  expect(() => new Character('A', 'Bowman', 25, 25)).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
  expect(() => new Character('VeryLongName', 'Bowman', 25, 25)).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
});

test('error for invalid type', () => {
  expect(() => new Character('Archer', 'InvalidType', 25, 25)).toThrow('Тип должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
});
/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('abreham', new Date(2010, 1, 1), []);
const c2 = new Candidate('abrham', new Date(2010, 1, 6), []);
const c3 = new Candidate('abriham', new Date(2010, 1, 8), []);
const c4 = new Candidate('Biruk', new Date(2011, 2, 1), []);
const c5 = new Candidate('birhanu', new Date(2012, 6, 9), []);
const c6 = new Candidate('berhanu', new Date(2012, 6, 7), []);
const c7 = new Candidate('Beruk', new Date(2011, 2, 6), []);

test('duplicate Count 1', () => {
  expect(Utils.duplicateCount([c1, c2, c3, c4, c5, c6, c7])).toEqual(3);
});

test('duplicate Count 2', () => {
  expect(Utils.duplicateCount([c4, c5, c7])).toEqual(1);
});

test('duplicate Count 3', () => {
  expect(Utils.duplicateCount([c1, c2, c4, c7])).toEqual(2);
});

test('duplicate Count 4', () => {
  expect(Utils.duplicateCount([c4, c5, c6])).toEqual(1);
});
test('duplicate Count 5', () => {
  expect(Utils.duplicateCount([c1, c4, c5])).toEqual(0);
});

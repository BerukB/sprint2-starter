/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate, Skill } from '../../common/model';

const c1 = new Candidate('abreham', new Date(2010, 1, 1), [new Skill('S1'), new Skill('S2', 0), new Skill('S3', 1)]);
const c2 = new Candidate('abrham', new Date(2010, 1, 6), [new Skill('S1', 1), new Skill('S2', 2)]);
const c3 = new Candidate('abriham', new Date(2010, 1, 8), [new Skill('S1', 2)]);
const c4 = new Candidate('Alex', new Date(2011, 4, 1), [new Skill('S1', 0), new Skill('S2', 1), new Skill('S3', 2)]);
const c5 = new Candidate('birhanu', new Date(2012, 6, 1), [new Skill('S1', 1), new Skill('S2', 2), new Skill('S3', 0)]);
const c6 = new Candidate('berhanu', new Date(2012, 6, 7), [new Skill('S1', 2)]);
const c7 = new Candidate('abraham', new Date(2010, 2, 6), [new Skill('S1', 1), new Skill('S2', 2)]);

test('possible Duplicates 1', () => {
  expect(
    Utils.possibleDuplicates(c1, [c2, c3, c4, c5, c6, c7]))
    .toEqual(
      [c2, c3]
    );
});

test('possible Duplicates 2', () => {
  expect(
    Utils.possibleDuplicates(c5, [c1, c2, c3, c4, c6]))
    .toEqual(
      [c6]
    );
});

test('possible Duplicates 3', () => {
  expect(
    Utils.possibleDuplicates(c4, [c1, c2, c3, c5, c6]))
    .toEqual(
      []
    );
});

test('possible Duplicates 4', () => {
  expect(
    Utils.possibleDuplicates(c7, [c1, c2, c3, c4, c5, c6]))
    .toEqual(
      []
    );
});

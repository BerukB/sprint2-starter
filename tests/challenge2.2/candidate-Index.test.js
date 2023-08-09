/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate, Skill } from '../../common/model';

const c1 = new Candidate('abreham', new Date(2010, 1, 1), [
  new Skill('S1'),
  new Skill('S2', 0),
  new Skill('S3', 1)
]);
const c2 = new Candidate('abrham', new Date(2010, 1, 6), [
  new Skill('S1', 1),
  new Skill('S2', 2)
]);
const c3 = new Candidate('abriham', new Date(2010, 1, 8), [new Skill('S1', 2)]);
const c4 = new Candidate('Alex', new Date(2011, 4, 1), [
  new Skill('S1', 0),
  new Skill('S2', 1),
  new Skill('S3', 2)
]);
const c5 = new Candidate('birhanu', new Date(2012, 6, 1), [
  new Skill('S1', 1),
  new Skill('S2', 2),
  new Skill('S3', 0)
]);
const c6 = new Candidate('berhanu', new Date(2012, 6, 7), [new Skill('S1', 2)]);
const c7 = new Candidate('abraham', new Date(2010, 2, 6), [
  new Skill('S1', 1),
  new Skill('S2', 2)
]);

test('candidate Index 1', () => {
  expect(Utils.candidateIndex([c1, c2, c3, c4, c5, c6, c7])).toEqual({
    ABRHM: [c1, c2, c3, c7],
    ALX: [c4],
    BRHN: [c5, c6]
  });
});

test('candidate Index 2', () => {
  expect(Utils.candidateIndex([c4, c5, c7])).toEqual({
    ABRHM: [c7],
    ALX: [c4],
    BRHN: [c5]
  });
});

test('candidate Index 3', () => {
  expect(Utils.candidateIndex([c1, c2, c4])).toEqual({
    ABRHM: [c1, c2],
    ALX: [c4]
  });
});

test('candidate Index 4', () => {
  expect(Utils.candidateIndex([c4, c5, c6])).toEqual({
    ALX: [c4],
    BRHN: [c5, c6]
  });
});

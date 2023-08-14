/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Candidate, Skill } from '../../common/model';

const c1 = new Candidate('C1', new Date(2010, 1, 1), [new Skill('S1'), new Skill('S2', 0), new Skill('S3', 1)]);
const c2 = new Candidate('C2', new Date(2011, 2, 1), [new Skill('S1', 1), new Skill('S2', 2)]);
const c3 = new Candidate('C3', new Date(2012, 3, 1), [new Skill('S1', 2)]);
const c4 = new Candidate('C4', new Date(2010, 4, 1), [new Skill('S1', 0), new Skill('S2', 1), new Skill('S3', 2)]);
const c5 = new Candidate('C5', new Date(2011, 5, 1), [new Skill('S1', 1), new Skill('S2', 2), new Skill('S3', 0)]);
const c6 = new Candidate('C6', new Date(2012, 6, 1), [new Skill('S1', 2)]);

test('Order By Weighted Skills', () => {
  expect(
    Utils.orderByWeightedSkills([c1, c2, c3]))
    .toEqual(
      [c2, c3, c1]
    );
});

test('Order By Weighted Skills', () => {
  expect(
    Utils.orderByWeightedSkills([c4, c5, c6]))
    .toEqual(
      [c4, c5, c6]
    );
});

test('Order By Weighted Skills', () => {
  expect(
    Utils.orderByWeightedSkills([c1, c2, c4]))
    .toEqual(
      [c4, c2, c1]
    );
});

test('Order By Weighted Skills', () => {
  expect(
    Utils.orderByWeightedSkills([c3, c2]))
    .toEqual(
      [c2, c3]
    );
});

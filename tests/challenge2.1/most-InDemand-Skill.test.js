/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job, Skill } from '../../common/model';

const j1 = new Job(
  'job1',
  '',
  [
    new Skill('S1', 0),
    new Skill('S2', 1),
    new Skill('S3', 2),
    new Skill('S4', 1)
  ],
  undefined,
  new Date(2023, 1, 1)
);
const j2 = new Job(
  'job2',
  '',
  [new Skill('S1', 2), new Skill('S2', 1), new Skill('S3', 0)],
  undefined,
  new Date(2023, 3, 1)
);
const j3 = new Job(
  'job3',
  '',
  [new Skill('S1', 1), new Skill('S2', 2)],
  undefined,
  new Date(2023, 3, 1)
);
const j4 = new Job(
  'job4',
  '',
  [new Skill('S1', 2)],
  undefined,
  new Date(2023, 1, 1)
);
const j5 = new Job(
  'job5',
  '',
  [new Skill('S3', 2), new Skill('S4', 1)],
  undefined,
  new Date(2023, 1, 1)
);
const j6 = new Job(
  'job6',
  '',
  [new Skill('S1', 2), new Skill('S2', 1)],
  undefined,
  new Date(2023, 1, 1)
);
test('mostInDemandSkill', () => {
  expect(Utils.mostInDemandSkill([j1, j2, j3, j6])).toEqual(['S1', 'S2']);
});

test('mostInDemandSkill', () => {
  expect(Utils.mostInDemandSkill([j4, j3])).toEqual(['S1']);
});

test('mostInDemandSkill', () => {
  expect(Utils.mostInDemandSkill([j3, j5])).toEqual(['S1', 'S2', 'S3', 'S4']);
});

test('mostInDemandSkill', () => {
  expect(Utils.mostInDemandSkill([j4])).toEqual(['S1']);
});

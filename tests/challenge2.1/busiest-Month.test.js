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
  [new Skill('S1', 2), new Skill('S2', 2)],
  undefined,
  new Date(2023, 1, 1)
);
const j5 = new Job('job5', '', [], undefined, new Date(2023, 1, 1));
const j6 = new Job('job6', '', [], undefined, new Date(2023, 3, 1));
const j7 = new Job('job7', '', [], undefined, new Date(2023, 2, 1));
const j8 = new Job('job8', '', [], undefined, new Date(2023, 2, 1));

test('busiestMonth', () => {
  expect(Utils.busiestMonth([j1, j2, j3])).toEqual(['3']);
});

test('busiestMonth', () => {
  expect(Utils.busiestMonth([j4, j5, j6])).toEqual(['1']);
});

test('busiestMonth', () => {
  expect(Utils.busiestMonth([j1, j2, j3, j4])).toEqual(['1', '3']);
});

test('busiestMonth', () => {
  expect(Utils.busiestMonth([j1, j2, j3, j4, j7, j8])).toEqual(['1', '2', '3']);
});

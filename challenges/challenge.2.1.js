/* eslint-disable no-unused-vars */
import { Job, Candidate, Skill } from '../common/model.js';

/**
 * Part 1: Basic utility functions.
 *
 * The challenge is to create optimal solutions for implementing some of the
 * common utility functions that we will need to build our ATS solution.
 *
 *
 */

/**
 * Filter the given jobs list and return only jobs that start between the given
 * start and end dates.
 *
 * @param {Array<Job>} jobs
 * @param {Date} startDate
 * @param {Date} endDate
 */
const filterByDate = (jobs, startDate, endDate) => {
  return jobs.filter((job) => {
    return startDate <= job.startDate && job.startDate <= endDate;
  });
};

/**
 * Filter the given candidates list and return only candidates that are born
 * on or after the given date.
 *
 * @param {Array<Candidate>} candidates
 * @param {Date} date
 */
const filterByBornAfter = (candidates, date) => {
  // ----- Challenge 2.1.2 - Complete the function here ---- //
  return candidates.filter((candidate) => {
    return candidate.dateOfBirth >= date;
  });
};

/**
 * Sort the given candidate list, so that candidates with most skills,
 * regardless of the levels, are at the beginning.
 *
 * @param {*} candidateList
 * @returns
 */
const orderBySkills = (candidateList) => {
  return candidateList.sort((a, b) => {
    return b.skills.length - a.skills.length;
  });
};

/**
 * Sort the given candidate list, so that candidates with more valuable skills,
 * are at the beginning.
 * Each skill will be weighed as follows: Expert levels count as 10, Advanced levels count as 5, Beginner levels count as 1
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */

const orderByWeightedSkills = (candidateList) => {
  candidateList.forEach((candidates) => {
    const weight = candidates.skills.reduce((sumSkill, currentValue) => {
      if (currentValue.level === 2) {
        return sumSkill + 10;
      } else if (currentValue.level === 1) {
        return sumSkill + 5;
      } else {
        return sumSkill + 1;
      }
    }, 0);

    candidates.weight = weight;
  });

  return candidateList.sort((a, b) => b.weight - a.weight);
};

/**
 * Return the ratio of female/male candidates in the list
 * @param {Array<Candidate>} candidateList
 * @returns a floating point number indicating the ratio
 */
const genderRatio = (candidateList) => {
  let numberOfMale = 0;
  let numberOfFemale = 0;

  candidateList.forEach((candidate) => {
    if (candidate.gender === 'M') {
      numberOfMale++;
    } else numberOfFemale++;
  });
  return numberOfFemale / numberOfMale;
};

/**
 * Return the month with the highest number of jobs starting,
 * indicated by the startDate property of each Job.
 * @param {Array<Job>} jobs
 * @returns number (0-11)
 */
const busiestMonth = (jobs) => {
  const monthCount = {};

  jobs.forEach((job) => {
    const currentMonth = job.startDate.getMonth();
    monthCount[currentMonth] = (monthCount[currentMonth] || 0) + 1;
  });

  const maxMonth = Math.max(...Object.values(monthCount));

  const busyMonths = [];
  for (const month in monthCount) {
    if (monthCount[month] === maxMonth) {
      busyMonths.push(month);
    }
  }

  return busyMonths;
};

/**
 * Return the skill name that is required the most in the given list of Jobs,
 * indicated by the requiredSkills property of each Job.
 *
 * @param {Array<Job>} jobs
 */

const mostInDemandSkill = (jobs) => {
  const skillCount = {};

  jobs.forEach((job) => {
    const demandedSkill = job.requiredSkills;

    for (const skill of demandedSkill) {
      const skillDemand = skill.name;
      skillCount[skillDemand] = (skillCount[skillDemand] || 0) + 1;
    }
  });

  const maxSkill = Math.max(...Object.values(skillCount));
  const mostDemandedSkills = [];
  for (const skill in skillCount) {
    if (skillCount[skill] === maxSkill) {
      mostDemandedSkills.push(skill);
    }
  }
  return mostDemandedSkills;
};

export {
  filterByDate,
  filterByBornAfter,
  orderBySkills,
  orderByWeightedSkills,
  genderRatio,
  busiestMonth,
  mostInDemandSkill
};

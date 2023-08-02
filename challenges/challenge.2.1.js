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
  // ----- Challenge 2.1.1 - Complete the function here ---- //
  let filteredDate = [];

  for (let value of jobs) {

    if (startDate <= value.startDate && value.startDate <= endDate) {

      filteredDate.push(value);

    }

  }

  return filteredDate;

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

  let filteredCandidates = [];

  for (let value of candidates) {

    if (value.dateOfBirth >= date) {
      filteredCandidates.push(value);
    }
  }
  return filteredCandidates;
};

/**
 * Sort the given candidate list, so that candidates with most skills,
 * regardless of the levels, are at the beginning.
 *
 * @param {*} candidateList
 * @returns
 */
const orderBySkills = (candidateList) => {
  for (let i = 1; i < candidateList.length; i++) {

    let current = candidateList[i].skills.length;
    let temp = candidateList[i];
    let j = i - 1;
    while (j >= 0 && candidateList[j].skills.length < current) {
      candidateList[j + 1] = candidateList[j];
      j--;
    }
    candidateList[j + 1] = temp;
  }

  return candidateList;

};

/**
 * Sort the given candidate list, so that candidates with more valuable skills,
 * are at the beginning.
 * Each skill will be weighed as follows: Expert levels count as 10, Advanced levels count as 5, Beginner levels count as 1
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */

const sumSkill = (skill) => {
  if(skill.length == 1){
    return skill.value;
  }else if(skill.length <=0){
    return 0;
  }
  
    let sum = 0;
    for (let value of skill) {
      sum += value.level;
    }
    return sum;
  }

const orderByWeightedSkills = (candidateList) => {
  for (let i = 1; i < candidateList.length; i++) {
    
    let currentSumSkill = sumSkill(candidateList[i].skills);
    let currentCandidate = candidateList[i];
    let j = i - 1;

    while (j >= 0 && sumSkill(candidateList[j].skills) < currentSumSkill) {
      candidateList[j + 1] = candidateList[j];
      j--
    }
    candidateList[j + 1] = currentCandidate;
  }

  return candidateList;

  return candidateList;
};

/**
 * Return the ratio of female/male candidates in the list
 * @param {Array<Candidate>} candidateList
 * @returns a floating point number indicating the ratio
 */
const genderRatio = (candidateList) => {

  let numberOfMale = 0;
  let numberOfFemale = 0;

  for (let value of candidateList) {

    if (value.gender === 'M') {
      numberOfMale++;
    } else
      numberOfFemale++;
  }

  return numberOfFemale / numberOfMale;
};

/**
 * Return the month with the highest number of jobs starting,
 * indicated by the startDate property of each Job.
 * @param {Array<Job>} jobs
 * @returns number (0-11)
 */
const busiestMonth = (jobs) => {

  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  let busiestDate = [];
  let count = 1;

  for (let value of jobs) {
    let temp = 0;

    for (let val of jobs) {

      if (value.startDate.getMonth() == val.startDate.getMonth()) {
        temp++;
      }
    }
    if (temp == count && !busiestDate.includes(value.startDate.getMonth())) {

      count = temp;
      busiestDate.push(value.startDate.getMonth());

    } else if (temp > count) {

      count = temp;
      busiestDate.length = 0;
      busiestDate.push(value.startDate.getMonth());

    }

  }

  return busiestDate.map(index => months[index]);

};

/**
 * Return the skill name that is required the most in the given list of Jobs,
 * indicated by the requiredSkills property of each Job.
 *
 * @param {Array<Job>} jobs
 */

const mergSkills = (jobs) => {

  const mergedArray = [...jobs[0].requiredSkills];

  for(let i=1; i<jobs.length; i++){
    mergedArray.push(...jobs[i].requiredSkills);
  }
  
  
  return mergedArray
}

const mostInDemandSkill = (jobs) => {

  let mergedArray = mergSkills(jobs);

  let repo = [];
  let counter = 1;

for(let i in mergedArray){
  let temp = 0;
  
  for (let j in mergedArray){
      if(mergedArray[i]==mergedArray[j]){
          temp++;
      }
  }
  if(temp == counter &&  !repo.includes(mergedArray[i])){
      counter = temp;
      repo.push( mergedArray[i]);
  }
  else if( temp > counter){
      counter = temp;
      repo.length = 0;
      repo.push( mergedArray[i]);
  }
}
return repo;


};

export { filterByDate, filterByBornAfter, orderBySkills, orderByWeightedSkills, genderRatio, busiestMonth, mostInDemandSkill };

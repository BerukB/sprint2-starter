// eslint-disable-next-line no-unused-vars
import { Candidate, Job } from '../common/model.js';

/**
 * Part 3: Job matching
 * ------------------------------------------
 *
 */

/**
 * This function returns true only if the candidateSkill is a match
 * for the job skill:
 * - the names are identical, regardless of case
 * - the candidate's skill level is higher or equal to the job skill level
 *
 *
 * @param {Skill} candidateSkill
 * @param {Skill} jobSkill
 */
const skillsMatch = (candidateSkill, jobSkill) => {
  // const cS = candidateSkill.skills;
  // const jS = jobSkill.requiredSkills;

  // for (let value of cS) {
  //   let cSkill = value.name;
  //   console.log(cSkill);
  //   for (let key of jS) {
  //     let jSkill = key.name;
  //     if (cSkill == jSkill) {
  //       return true;
  //     }
  //   }
  // }
  const cSName = candidateSkill.name.toLowerCase();
  const jSName = candidateSkill.name.toLowerCase();
  const cSLevel = candidateSkill.level;
  const jSLevel = jobSkill.level;

  return cSName === jSName && jSLevel >= cSLevel;
};

/**
 * Returns true if the candidate meets the gender requirements
 * of the given job. If the job has no gender requirements, all candidates
 * are suitable.
 *
 * @param {Candidate} candidate
 * @param {Job} job
 */
const suitableGender = (candidate, job) => {
  // ----- Challenge 2.3.2 - Complete the function here ---- //
  return (
    candidate.gender === job.requiredGender || job.requiredGender === undefined
  );
};

/**
 *
 * This function returns a number between 0 and 100 indicating the suitability
 * of the candidate for the given job. Rules are as follows:
 * - 20% of the score is allocated for gender suitablity.
 * - 80% is reserved for matching skills. A candidate who has all the skills required by the job will
 * get 80%.
 * The result will be rounded to the closest whole number.
 *
 * @param {String} name
 * @returns String
 */
const suitabilityScore = (candidate, job) => {
  // ----- Challenge 2.3.3 - Complete the function here ---- //

  return 0;
};

/**
 * The 'hotness' of a candidate is defined by the number of jobs
 * for which their suitability score is greater than 80.
 * This function returns the highest 'hotness' score from the candidates list
 * and the provided jobs list.
 *
 * @param {Array<Candidate>} candidates
 * @param {Array<Job>} jobs
 * @returns number
 */
const hottestCandidate = (candidates, jobs) => {
  // ----- Challenge 2.3.4 - Complete the function here ---- //

  return 0;
};

export { skillsMatch, suitableGender, suitabilityScore, hottestCandidate };

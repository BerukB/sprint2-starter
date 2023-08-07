/* eslint-disable no-unused-vars */
import { Candidate } from "../common/model.js";

/**
 * Part 2: Duplicate Candidate Detection
 * ------------------------------------------
 *
 * One of the challenges when building an ATS is preventing duplicate entries in the candidate database.
 * We want to prevent scenarios where the same person, knowingly or otherwise, get registered multiple times using different
 * phone numbers or email.
 * This is especially difficult with Ethiopian names where the same name can be written in different ways:
 * - eg: ብርሃኔ = Berhane, Birhane, Birhanie, Birhanne etc
 * - eg: ብስራት = Bisrat, Bsrat, Besrat, Bsrate, Bissrat
 * - eg: አብረሃም = Abreham, Abrham, Abraham, Abriham
 */

/**
 * One strategy for detecting duplicate names is to compare normalized versions of each name.
 * 1. Vowels are often used interchangeably, so we will remove all instances of vowels, ** EXCEPT in the first character **.
 *      eg. Abreham -> Abrhm, Birhanie -> Brhn
 * 2. We will remove double letters. Eg. Bissrat -> Bssrt -> Bsrt
 * 3. We'll remove all non-character letters, eg. spaces, '-' or '/'; Wolde Mariam -> Wld Mrm -> Wldmrm
 * 3. we'll make all characters uppercase. Abreham -> Abrhm -> ABRHM
 *
 * This function returns a normalized version of the given string, according to the
 * above rules.
 *
 * @param {String} name
 * @returns String
 */
const normalizedName = (name) => {
  const vowels = /([aeiouAEIOU])/g;
  const regex = /[^a-zA-Z]/g;
  const firstLetter = name.charAt(0);
  const noVowels = name.replace(vowels, "");
  const noRegex = noVowels.replace(regex, "");
  const preparedName = firstLetter.concat(noRegex);

  let finalizedName = "";

  for (const value of preparedName) {
    if (!finalizedName.includes(value)) {
      finalizedName += value;
    }
  }
  const upperCase = finalizedName.toUpperCase();

  return upperCase;
};

/**
 * This function compares two candidates and returns true if all of the following are true:
 * - the candidates' normalized names are identical
 * - their dates of birth have no more than 10 days difference.
 *
 * @param {Candidate} candidate1
 * @param {Candidate} candidate2
 * @returns true or false
 */
const areSimilarCandidates = (candidate1, candidate2) => {
  const candidate1Name = normalizedName(candidate1.name);
  const candidate2Name = normalizedName(candidate2.name);
  const candidate1Dob = candidate1.dateOfBirth;
  const candidate2Dob = candidate2.dateOfBirth;
  const dobDifferenceInMs = Math.abs(
    candidate1Dob.getTime() - candidate2Dob.getTime()
  );
  const dobDifferenceInDays = Math.floor(
    dobDifferenceInMs / (1000 * 60 * 60 * 24)
  );

  if (candidate1Name === candidate2Name && dobDifferenceInDays < 10) return true;

  return false;
};

/**
 * Given a candidate, return possible duplicates of this candidate
 * in the given candidateList.
 *
 * @param {Candidate} newCandidate
 * @param {Array<Candidate>} candidateList
 */
const possibleDuplicates = (newCandidate, candidateList) => {
  const possibleDup = candidateList.filter((candiddates) => {
    return areSimilarCandidates(newCandidate, candiddates);
  });

  return possibleDup;
};

/**
 * We want to transform the given candidate list into a dictionary index
 * that enable us to lookup a normalized name and get all the corresponding candidates.
 * A sample output may be:
 * { 'ABRHM' -> [ Candidate {name: 'Abraham', ...},
 *                Candidate {name: 'Abreham', ...},
 *              ],
 *   'BRHN'  -> [ Candidate {name: 'Berhane', ...},
 *                Candidate {name: 'Brhanne', ...},
 *              ]
 * }
 *
 * @param {Array<Candidate>} candidateList
 * @returns
 */
const candidateIndex = (candidateList) => {
  const candidateIndex = {};

  candidateList.forEach((candidate) => {
    const normalName = normalizedName(candidate.name);
    if (candidateIndex.hasOwnProperty(normalName)) {
      candidateIndex[normalName].push(candidate);
    } else candidateIndex[normalName] = [candidate];
  });

  return candidateIndex;
};

/**
 * Find the number of (likely) duplicates in the given list,
 * according to the rules implemented in the areSimilarCandidates function.
 *
 * The candidateList can be a very large list, so the solution should only traverse the list once.
 *
 * @param {Array<Candidate>} candidateList
 *
 * @returns
 */
const duplicateCount = (candidateList) => {
  // ------ Challenge 2.2.5 - Complete the function here ---- //\
  const possibleDup = candidateIndex(candidateList);
  let dupCount = 0;

  for (const keys in possibleDup) {
    if (possibleDup[keys].length > 1) {
      dupCount++;
    }
  }

  return dupCount;
};

export {
  normalizedName,
  areSimilarCandidates,
  possibleDuplicates,
  duplicateCount,
  candidateIndex
};

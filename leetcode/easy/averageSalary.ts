// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary.
// Answers within 10-5 of the actual answer will be accepted.

function average(salary: number[]): number {
  const l = salary.length;
  return salary.sort((a,b) => a - b).slice(1,l-1).reduce((acc,el) => acc + el,0)/(l-2);
};

/*
Write a function that checks if a given value is an instance of a given class or superclass.
For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
*/

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || !classFunction) {
    return false;
  }
  while(obj !== null){
    if(obj?.constructor === classFunction) return true;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

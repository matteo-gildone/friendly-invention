import { classObj } from "../data/class";

const isClassAllowed = (allowedClasses, className) =>
  allowedClasses.indexOf(className) > -1;

const getClass = (k) => classObj[k];

export { isClassAllowed, getClass };

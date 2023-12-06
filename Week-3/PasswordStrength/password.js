/*The password is at least 8 characters long.
The password does not contain the string "password".
The password contains at least one uppercase character. */

const isStrongPassword = (userpwd) => {
  if (
    userpwd.length >= 8 &&
    !userpwd.includes("password") &&
    userpwd !== userpwd.toLowerCase()
  ) {
    return true;
  }
  return false;
};

console.log(isStrongPassword("Qwerty123"));
console.log(isStrongPassword("sfsd3"));
console.log(isStrongPassword("password3"));

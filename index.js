require('datejs');

function combineUsers(...args) {
  // Define the variable combinedObject
  const combinedObject = {
    users: []
  };

  // Loop through args to isolate each internal array
  for (const userArray of args) {
    // Using a spread operator, merge arrays into the users attribute
    combinedObject.users.push(...userArray);
  }

  // Add merge_date using datejs formatting
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
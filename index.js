// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance < 400) {
    return "This one is on me!";
  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return (city='NYC') ? 'Ok, sounds good.'
  : (city!='NYC') ? 'No go.'
}


  /* Goal - Does the city = NYC? Yes = return ok, No = return no go
   1. A => return '
   2. B => 'No go'
  */

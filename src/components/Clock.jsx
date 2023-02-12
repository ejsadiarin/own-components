/**
 * PROBLEM:
 * This component @function WrongClock() tries to set the <h1>’s CSS class to "night" during the time from midnight to six hours in the morning,
 * and "day" at all other times. However, it doesn’t work. Can you fix this component? 
 * 
 * You can verify whether your solution works by temporarily changing the computer’s timezone.
 * When the current time is between midnight and six in the morning, the clock should have inverted colors!
 * 
 * Hint: Rendering is a calculation, it shouldn’t try to “do” things. Can you express the same idea differently?
*/

// FIX THIS:
function WrongClock({ time }) {
  let hours = time.getHours();
  if (hours >= 0 && hours <= 6) {
    document.getElementById('time').className = 'night';
  } else {
    document.getElementById('time').className = 'day';
  }
  return (
    <h1 id="time">
      {time.toLocaleTimeString()}
    </h1>
  );
}

// SOLUTION:
function Clock({ time }) {
  let hours = time.getHours();
  let className;

  if (hours <= 0 && hours >= 6) {
    className = 'night';
  } else {
    className = 'day';
  }

  return (
    <h1 id="time">
      {time.toLocaleTimeString()}
    </h1>
  );
}

export default Clock;
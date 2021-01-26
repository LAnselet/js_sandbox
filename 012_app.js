// 012 Template Literals
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miamo';

// Without template string (es5)
// html =
//   '<ul>' +
//   '<li>Name: ' +
//   name +
//   '</li>' +
//   '<li>Name: ' +
//   age +
//   '</li>' +
//   '<li>Name: ' +
//   job +
//   '</li>' +
//   '<li>Name: ' +
//   city +
//   '</li>' +
//   '</ul>';

function hello() {
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

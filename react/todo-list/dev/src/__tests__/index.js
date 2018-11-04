const expect = require('chai').expect;
const hello = str => `Hello, ${typeof(str) === 'string' ? str : 10}`;


describe(
	'func «hello',
	it(
		'not empty',
		() => {
			expect(
				hello('Vasya')
			).not.to.be.a('string');
		}
	)
);
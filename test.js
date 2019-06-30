import test from 'ava';
import scopedRegex from '.';

const matches = [
	'@sindresorhus',
	'@std',
	'@foo-bar/',
	'@foo',
	'@foo_bar/'
];

const nonMatches = [
	'df',
	'foo-bar',
	'unicorn.rainbow',
	'foo/bar',
	'@foo89/.bar',
	'@foo89/_bar',
	'@sindresorhus/df',
	'@std/gz',
	'@foo-bar/unicorn.rainbow',
	'@foo/x',
	'@foo_bar/foo89'
];

test('scopedRegex', t => {
	for (const match of matches) {
		t.true(scopedRegex({exact: true}).test(match));
	}

	for (const nonMatch of nonMatches) {
		t.false(scopedRegex({exact: true}).test(nonMatch));
	}

	for (const match of matches) {
		t.is((scopedRegex().exec(`foo ${match} bar`) || [])[0], match);
	}
});

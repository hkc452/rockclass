import test from 'ava';
import rockClass from '.';

test('main', t => {
	t.is(rockClass('x'), 'x');
	t.is(rockClass('x', 'y'), 'x y');
	t.is(rockClass(null, 'x', undefined, NaN, 0, 4, true, 'y', false, ''), 'x y');
	t.is(
		rockClass('x', {
			y: true,
			nope: false,
			z: 'foo'
		}),
		'x y z'
	);
	t.is(
		rockClass(
			'x',
			{
				y: true,
				nope: false,
				z: 'foo'
			},
			[
				'kc',
				{
					awesome: true
				}
			]
		),
		'x y z kc awesome'
	);
	t.is(
		rockClass(
			'x',
			{
				y: true,
				nope: false,
				z: 'foo'
			},
			[
				'kc',
				{
					awesome: true
				},
				[
					'ironman',
					{
						husk: false,
						captain: true
					}
				]
			]
		),
		'x y z kc awesome ironman captain'
	);
});

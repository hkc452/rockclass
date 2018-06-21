# rockclass [![Build Status](https://www.travis-ci.org/hkc452/rockclass.svg?branch=master)](https://www.travis-ci.org/hkc452/rockclass) [![gzip size](http://img.badgesize.io/https://cdn.jsdelivr.net/npm/rockclass/index.js?compression=gzip)](https://cdn.jsdelivr.net/npm/rockclass/index.js)

> Conditionally join CSS class names together - Especially useful with React

## Inspired by [class-names](https://github.com/sindresorhus/class-names) but support array input


## Install

```
$ npm install rockclass
```


## Usage

```js
rockClass('unicorn', 'rainbow');
//=> 'unicorn rainbow'

rockClass('unicorn', ['rainbow']);
//=> 'unicorn rainbow'

rockClass({awesome: true, foo: false}, 'unicorn', {rainbow: false});
//=> 'awesome unicorn'

rockClass('unicorn', null, undefined, 0, 1, {foo: null});
//=> 'unicorn'

const buttonType = 'main';
rockClass({[`button-${buttonType}`]: true});
//=> 'button-main'
```

```jsx
const Button = props => {
	console.log(props);
	/*
	{
		type: 'success',
		small: true
	}
	*/

	const buttonClass = rockClass(
		'button',
		{
			[`button-${props.type}`]: props.type,
			'button-block': props.block,
			'button-small': props.small
		}
	);

	console.log(buttonClass);
	//=> 'button button-success button-small'

	return <button className={buttonClass}>…</button>;
};
```


## API

### rockClass(…input)

Conditionally join CSS class names together.

#### input

Type: `string` `Object` `Array`

Accepts a combination of strings objects and Array. Only object keys with truthy values are included. Anything else is ignored.


## FAQ

### How is it different from [`class-names`](https://github.com/sindresorhus/class-names)?

- support array input.


## Related

- [react-extras](https://github.com/sindresorhus/react-extras) - Useful components and utilities for working with React
- [class-names](https://github.com/sindresorhus/class-names) - Conditionally join CSS class names together - Especially useful with React

## License

MIT © [hkc](https://github.com/hkc452)

# rockclass

> Conditionally join CSS class names together - Especially useful with React

## Inspired by [class-names](https://github.com/sindresorhus/class-names) but support array prop


## Install

```
$ npm install @hkc/rockclass
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

Type: `string` `Object`

Accepts a combination of strings and objects. Only object keys with truthy values are included. Anything else is ignored.


## FAQ

### How is it different from [`class-names`](https://github.com/sindresorhus/class-names)?

- support array input. Just use the spread operator.


## Related

- [react-extras](https://github.com/sindresorhus/react-extras) - Useful components and utilities for working with React
- [class-names](https://github.com/sindresorhus/class-names) - Conditionally join CSS class names together - Especially useful with React

## License

MIT © [hkc](https://github.com/hkc452)

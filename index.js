'use strict';
module.exports = (...args) => {
	const ret = new Set();
	const allows = ['[object String]', '[object Object]', '[object Array]'];
	const {toString} = Object.prototype;
	const validateStringClass = key => {
		if (!(key = key.replace(/^\s+|\s+$/, ''))) {
			return;
		}
		ret.add(key);
	};
	const validateObjectClass = objClass => {
		for (const [key, value] of Object.entries(objClass)) {
			if (value) {
				validateStringClass(key);
			}
		}
	};
	const validateArrayClass = arrayClass => {
		for (const item of arrayClass) {
			const type = toString.call(item);
			if (allows.indexOf(type) === -1) {
				continue;
			}
			switch (type) {
				case '[object Array]':
					validateArrayClass(item);
					break;
				case '[object Object]':
					validateObjectClass(item);
					break;
				default:
					validateStringClass(item);
					break;
			}
		}
	};

	validateArrayClass(args);

	return [...ret].join(' ');
};

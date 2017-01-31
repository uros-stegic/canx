
export let store = {
			categories: [
						{ name: "Uppercase",
						 	value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
						{	name:  "Lowercase",
						 	value: "abcdefghijklmnopqrstuvwxyz" },
						{	name: "Numbers",
						 	value: "0123456789" },
						{	name: "Math",
						 	value: "[]{}().*/\\!@#$%^&_-+=><" }
						],
			user : {
				id : 1,
				name: 'Pera Peric',
				email: 'pera@peric.com',
				pass: '123456',
				avatar: ''
			}
};

export function initialStore(state = [], action){
	return state;
}

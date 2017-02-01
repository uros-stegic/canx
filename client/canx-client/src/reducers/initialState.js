export default {
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
				jwt: '123123',
				id : 1,
				name: 'Pera Peric',
				email: 'pera@peric.com',
				pass: '123456',
				avatar: '',
        draw: {}
			},
      logged: !!localStorage.jwt,
}

export function getFilteredCategory(categories, category) {
	let filteredCategory = categories.filter((cat) => {
				if(cat.name.toLowerCase() === category.toLowerCase())
					return true
				return false
		})

		if(filteredCategory.length !== 0)
			return filteredCategory[0]
		else
		//TODO: catch and manage exception
			return {name: 'error', value : ''}
}

export function getBeforeLetter(categories, props) {
		let category = getFilteredCategory(categories, props.category)
		let ind = category.value.indexOf(props.letter)

		if(ind !== -1)
			if(ind === 0)
					return category.value[category.value.length - 1]
			else
					return category.value[ind-1]
		return "x"
}

export function getAfterLetter(categories, props) {
		let category = getFilteredCategory(categories, props.category)
		let ind = category.value.indexOf(props.letter)

		if(ind !== -1)
			if(ind === category.value.length - 1)
					return category.value[0]
			else
					return category.value[ind+1]
		return "x"
}

export function getBeforeCategory(categories, category) {
		let cat = getFilteredCategory(categories, category)
		console.log(categories)
		let ind = categories.indexOf(cat)

		if(ind !== -1)
			if(ind === 0)
					return categories[categories.length - 1].name
			else
					return categories[ind-1].name
}

export function getAfterCategory(categories, category) {
		let cat = getFilteredCategory(categories, category)

		let ind = categories.indexOf(cat)

		if(ind !== -1)
			if(ind === categories.length - 1)
					return categories[0].name
			else
					return categories[ind+1].name
}

export function testName(name) {
		return !(name.length === 0);
}

export function testPass(password) {
		return !(password.length < 6)
}

export function testConfirmPass(confPass, pass) {
		return !(confPass !== pass || confPass.length < 6 )
}

export function testEmail(email) {
      let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regEx.test(email)
}

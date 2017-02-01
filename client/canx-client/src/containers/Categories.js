import React from 'react' 
import {Link} from 'react-router' 

class Categories extends React.Component {
   	constructor(...args) {
		super(...args) 
		this.state = {
			categories: [{name: "Uppercase",
						  value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
						  },
						  {name:  "Lowercase",
						   value: "abcdefghijklmnopqrstuvwxyz"
						  },
						  {name: "Numbers",
						   value: "0123456789"
							},
						  {name: "Math",
						   value: "[]{}().*/\\!@#$%^&_-+=><"
							}]
		}
	} 

	render() {
		return (
    	  <div className='category-container'>
			     <h1 className='profile-title'>CATEGORIES</h1>
		  	      {this.state.categories.map((cat,ind) => <Link key={ind} to={'/categories/'+cat.name.toLowerCase() }>
                                                        <div className='category-row'> {cat.name} </div>
                                                      </Link>)}
		  </div>
    	) 
	} 
}

export default Categories 

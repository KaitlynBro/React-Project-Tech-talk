import React from 'react';
import ReactDOM from 'react-dom';


{/* header */}
class Header extends React.Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						<li>Tt</li>
					</ul>
					<ul>
						<li>About</li>
						<li>Categories</li>
						<li>Write A Post</li>
					</ul>
				</nav>
				<div className="headerTitleAndImage">
					<h1>Tech talk</h1>
					<button>skip to main content</button>
				</div>
			</header>
		)
	}
}

{/*description of website*/}

class WebsiteDescription extends React.Component {
	render() {
		return (
			<div>
				<h2>we are Tech talk</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quas temporibus. Alias numquam maiores cupiditate veritatis porro adipisci dignissimos cumque iure accusantium voluptatibus odit provident minima repudiandae delectus error aperiam reiciendis saepe maxime tenetur laudantium consequatur assumenda, rem ad harum dolorum. Nulla reprehenderit, debitis. Dolore corrupti, pariatur. Nihil, recusandae, assumenda.
				</p>
			</div>
		)
	}
}

{/*buttons of all the tech categories available*/}

class TechCategoryButtons extends React.Component {
	render() {
		return(
			<div>
				<button>HTML</button>
				<button>CSS</button>
				<button>Javascript / jQuery</button>
				<button>React</button>
			</div>
		)
	}
}


{/*all tech categories*/}
class TechTopicCategories extends React.Component {
	render() {
		return(
			<div>
				{/*tech categories go here*/}
			</div>
		)
	}
}

{/*form for user to fill out tech talk*/}
class Form extends React.Component {
	render() {
		return(
			<form action="Post">
				{/*form element for user to fill out tech talk goes here*/}
			</form>
		)
	}
}


class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<WebsiteDescription />
					<TechCategoryButtons />
					<TechTopicCategories /> {/*hasnt been created yet*/}
					<Form />
				</main>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));


{/*how can i make all my buttons and all my tech topics go into components if they will each say differnt things */}

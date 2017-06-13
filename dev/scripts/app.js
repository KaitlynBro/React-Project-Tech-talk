import React from 'react';
import ReactDOM from 'react-dom';
import $, {ajax } from 'jquery'

//set up firebase app
  var config = {
    apiKey: "AIzaSyAKdMtENFgaXH4WHQhU-IvNZF2aHUuiA-M",
    authDomain: "tech-talk-78716.firebaseapp.com",
    databaseURL: "https://tech-talk-78716.firebaseio.com",
    projectId: "tech-talk-78716",
    storageBucket: "tech-talk-78716.appspot.com",
    messagingSenderId: "930656443899"
  };
  firebase.initializeApp(config);

const dbRef = firebase.database().ref('/');


 //shorthand for typing firebase.auth
 const auth = firebase.auth();

/* header component*/
class Header extends React.Component {
	render() {
		return (
			<div>
				<header>
					<nav>
						<ul className="logo">
							<li>Tt</li>
						</ul>
						<ul className="mainNav">
							<a href="#about"><li>About</li></a>
							<a href="#talks"><li>Tech Talks</li></a>
							<a href="#formSection"><li>Write A Post</li></a>
						</ul>
					</nav>
					<div className="headerContent">
						<div className="description" id="about">
							<h2>we are Tech talk</h2>
							<p>Have a tech-related topic that interests you? Are you excited to share it with the tech community? Enter Tech talk. Choose a topic, write about it, maybe even share your resources. Share it - then get to combing through other tech talks!
							</p>
						</div>
						<a href="#formSection" className="buttonContainer"><button>Skip to main content</button></a>
					</div>
				</header>
			</div>
		)
	}
}


/*tech topic category components*/
class TechTopicCategories extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className="categorySection" id="talks">
				
				{this.props.techNotes.map((note, index) => {
					return (
						<div className="data" key={`note-${index}`}>
							<div>
								<p className="overline">{note.name}</p>
								<p className="overline">{note.topic}</p>
								<p>{note.category}</p>
								<p>{note.blurb}</p>
							</div>
						</div>
					)
				})}

			</div>
		)
	}
}



class Footer extends React.Component {
	render() {
		return(
			<div>
				<footer>
					<div className="footerDiv1">
						<p>Made by Kaitlyn Brouwers</p>
					</div>
					<div className="footerDiv2">
						<p>Find me here:</p><br />
						<a href="https://twitter.com/kaitlynbrouwers"><i className="fa fa-twitter" aria-hidden="true"></i></a>
						<a href="http://bit.ly/2sfyYKV"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
					</div>
				</footer>
			</div>
		)
	}
}


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			category: '',
			name: '',
			blurb: '',
			topic: '',
			techNotes: []
		}

		this.selectCategory = this.selectCategory.bind(this);
		this.renderPost = this.renderPost.bind(this);
		this.setName = this.setName.bind(this);
		this.setBlurb = this.setBlurb.bind(this);
		this.selectTopic = this.selectTopic.bind(this);
		this.techNotes = this.techNotes.bind(this);
	}



	selectCategory(e) {
		e.preventDefault();
		dbRef.push({
			category: this.state.category
		})
	}


	renderPost(e) {
		e.preventDefault();
		const dbRef = firebase.database().ref('/');
		dbRef.push({
			name: this.state.name,
			blurb: this.state.blurb,
			topic: this.state.topic,
		});
		this.setState({
			name:"",
			blurb: "",
			topic:""
		});
		 $('html, body').animate({
          scrollTop: $('.categorySection').offset().top
        }, 500)


	}
	selectCategory(e) {
		this.setState({
			category: e.target.value
		})
	}

	setName(e) {
		this.setState({
			name: e.target.value
		})
	}

	selectTopic(e) {
		this.setState({
			topic: e.target.value
		})
	}

	setBlurb(e) {
		this.setState({
			blurb: e.target.value
		})
	}

	techNotes(e) {
		this.setState({
			techNotes: e.target.value
		})
	}

	componentDidMount() {
		dbRef.on('value', (snapshot) => {
			let techNotes = [];

			const dbResults = snapshot.val();
			for(let key in dbResults) {
				techNotes.push(dbResults[key])
			}
			this.setState({
				techNotes: techNotes
			})
		});
	}

	render() {
		return (
			<div>
				<div className="wrapper">
					<Header />
					<main>
						<form onSubmit={this.renderPost} action="" id="formSection">
								<p>Choose a category to write about</p>
								  <div className="topicButtons">
								  	<label>
								  		HTML 
								    	<input type="radio" onChange={this.selectTopic} name="category" value="HTML" />
								    </label>
								    <label>
								    	CSS  
								    	<input type="radio" onChange={this.selectTopic} name="category" value="CSS" />
								    </label>
								    <label>
								    	Javascript
								    	<input type="radio" onChange={this.selectTopic}name="category" value="Javascript" />
								    </label>
								    <label>
								    	jQuery
								    	<input type="radio" onChange={this.selectTopic} name="category" value="jQuery" />
								    </label>
								    <label>
								    	React
								   		<input type="radio" onChange={this.selectTopic} name="category" value="React" />
								   	</label>
								   	<label>
								   		Firebase
								    	<input type="radio" onChange={this.selectTopic} name="category" value="Firebase" />
								   	</label>
								   	<label>
								   		Other
								    	<input type="radio" onChange={this.selectTopic} name="category" value="Other" />
								   	</label>
								  </div>

								<input onChange={this.setName} className="names" value={this.state.name} type="text" placeholder="Your name" id="nameInput" required/><br />

								<textarea onChange={this.setBlurb} className="writeHere" value={this.state.blurb} placeholder="Write Here" required></textarea><br />

								<input type="submit" placeholder="Submit" onSubmit={this.append} />
							</form>
						<TechTopicCategories techNotes={this.state.techNotes} />
						<techNotes />
						<Footer />
					</main>
					</div>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('app'));


 

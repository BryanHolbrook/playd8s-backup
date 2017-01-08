import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Flash from '../components/Flash';
import App from '.././containers/App'
import $ from 'jquery';
import Request from 'superagent';
import { SocialIcon } from 'react-social-icons';

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { games: [] }
  }

  componentDidMount () {
    $.ajax({
      url: '/api/steam/games',
      type:'GET',
    }).done( games => {
      console.log(games);
      this.setState({ games })
    });
  }
  render() {
  		return(
  			<div>

          <div className="container">
            <br></br>
            <h2 className="header center-align">Games</h2>
            <div className="row center">
              <h5 className="header col s12 light">Check out the top games of last week!</h5>
              <h6 className="header col s12 light">Fill in the search bar to find a game to play!.</h6>
            </div>
          </div>


          <div className="row l8 m10">
            {this.state.games.slice(0,39).map((game, index) => {
              return (
                <div key={index} className="col m4">
                  <div className="card">
                    <div className="card-image">
                      <img src={game.cover.url ? game.cover.url : '/images/img02.png'} />
                    </div>
                    <div className="card-content">
                      <h6><bold>{game.name}</bold></h6>
                    </div>
                    <div className="card-action">
                      <a className="red-text" href={game.url} target="_blank">
                        Link to Games Page
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <footer className="page-footer black">
             <div className="container">
               <div className="row">
                 <div className="col l6 s12">
                   <h4 className="brand-logo"><img className="responsive-img" id="logo" src="/images/PLAYD8S_logo.png"/></h4>
                   <p className="grey-text text-lighten-4">Don't forget to conect with us online</p>
                 </div>
                 <div className="socialIcons" className="col l4 offset-l2 s12">
                   <h5 className="white-text">Share</h5>
                     <SocialIcon url="https://www.facebook.com/" />
                     <SocialIcon url="https://twitter.com/" />
                     <SocialIcon url="https://www.instagram.com/?hl=en" color="#fb3958" />
                 </div>
               </div>
             </div>
             <div className="footer-copyright">
               <div className="container">
               © 2017 Copyright PLAYD8S
               <a className="grey-text text-lighten-4 right" href="https://steamcommunity.com/">Steam Community</a>
               </div>
             </div>
           </footer>



  			</div>
  		)
  	}


  }

export default Games;

import React, { Component } from 'react';

class Dog extends Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {
      picture: undefined,
      loading: true,
      storedPictures: [],
    };
    this.savePicture = this.savePicture.bind(this);
    this.renderPictureElement = this.renderPictureElement.bind(this);
    this.fetchPicture = this.fetchPicture.bind(this);
  }

  async fetchPicture() {
    this.setState(
      {loading: true},
      async () => {
        const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random')
        const requestObject = await requestReturn.json()
        this.setState({
         picture: requestObject.message,
         loading: false
        })
      }
    )
  }

  componentDidMount() {
    if(localStorage.length !== 0) {
      this.setState({
        picture: localStorage.image
      })
    } 
    this.fetchPicture();
  }

  savePicture() {
    this.setState(({ storedPictures, picture}) => ({
      storedPictures: [...storedPictures, picture]
    }))
    this.fetchPicture();
  }

  renderPictureElement() {
    const imageURL = this.state.picture;
    localStorage.setItem('image', `${imageURL}`)
    return (<div className='last-dog'>
      <h2>{imageURL.split('/')[4]}</h2>
      <img src={imageURL} className='last-picture' alt={imageURL.split('/')[4]} />
    </div>)
  }

  render() {
    const loadingElement = <span>Loading...</span>
    return (
      <div className="pictures-container">
        <div className="pictures-container-1">
          {this.state.storedPictures.map((url, index) => (<img key={index} src={url} className ='picture' alt={url.split('/')[4]}/>))}
        </div>
        <div className="pictures-container-2">
          {this.state.loading ? loadingElement : this.renderPictureElement() }
          <button onClick={this.savePicture}>NEW DOG!</button>
        </div>
      </div>
    )
  }
}

export default Dog;
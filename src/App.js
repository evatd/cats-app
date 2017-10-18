import React, {Component} from 'react';
import './App.css';

// Show the current event
/*Create a dropdown via select and render image label in its option section*/
// No need to pass in props to super
// The effect of our init: show the first image before the user makes their selection, expressed via render
// We initialise: we're setting the state property via this.state(image index 0), display the image in the render method

// Then a callback function: onselectchange, we use the arrow function: because this didnt refer to the component so we changed the scope to the component
// We create an event: this property image will be filled with the image and then any image from the index/list
// The app rerenders whenever the state changes
// Class instance method
// Return: key has to be there because React is used for dynamic apps

class App extends Component {
    constructor(props) {
        super()

        this.state = {
            index: 0

        }
    }

    onSelectChange = (event) => {
        this.setState({index: event.target.value})
    }

    render() {
        console.log(this.props.images);

        // object deconstruction es6
        // can pull off (multiple) elements like image off properties like images[index]
        // mbieng abe to pull of mjultiple elements is hte benefit of object deconstruction
        const {images} = this.props
        const {index} = this.state
        const image = images[index]

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Dropdown App</h1>
                </header>

                <select name="select" onChange={this.onSelectChange}>
                    {this.props.images.map((image, i) => {
                        return (
                            <option key={image.id} value={i}>
                                {image.label}
                            </option>
                        )
                    })}
                </select>
                <p>{image.label}</p>
                <img src={image.url}/>
            </div>
        );
    }
}

export default App;

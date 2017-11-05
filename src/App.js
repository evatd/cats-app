import React, {Component} from 'react';
import './App.css';
import Figure from './components/figure';

import styled from 'styled-components';

// We introduced the image_data/cats images array/ what we refer to images in index.js, i.e. images={catimages} within App
// hence we can access the cat images in this component


// We create a dropdown via select as in HTML and render image label in its option section*/

// Step 1: No need to pass in props to super
// The effect of our init: show the first image before the user makes their selection, expressed via render
// We initialise: we're setting the state property via this.state(image index 0) and then displaying the (first/index 0) image in the render method

// Step 2: Then a callback function: onSelectChange, we use the arrow function: because this didn't refer to our component, so we changed the scope to the component
// We create an event: this property image will be filled with the image and then any image from the index/list
// We create an event: state changes when index is populated with the current selected index (event.target.value)
// We could have used a bind method too, but the selected method is presumably more elegant (class instance method?)


// Step 3, render: The app rerenders whenever the state changes
// We console log our array of images: (this.props.images);

// Step 4, return: create a dropdown with select HTML which consists of options
// Add an onChange method which cites our onSelectChange method, connecting user action with the change of state (setState in onSelectChange)
// We wouldn't be able to talk with cat images/change state/enable the user selecting to get a different image each time
// hadn't we used the arrow function to get the right scope in onSelectChange - here, this was problematic, didn't refer to our component as above
// We map througgh our array, passing in image and i, both of which we use in the rest of map
// Key has to be there because React is used for dynamic apps
// We display image.label, i.e. label of each image in the array (images[index]) as defined in the array in img_data in each dropdown option
// We display the selected image via a HTML image tag, via {image.url} -
// image is, again, each image in our array (as array was defined/imported in index.js)
// and url is how we refer to each image's location in our array
//
// const max = this.props.images.length: max is the number of items in our array

// const n = direction === "forward" // if our direction equals forward
//     ? this.state.index + 1 // then go forward by 1
//     : this.state.index - 1; // if not, go backwards by 1
//
// const index = n < 0 // we had a problem: couldn't go back when we reached the end of our array. so, if we have a negative element, i.e. we are going backward
//     ? max - 1 // then go back from max
//     : n % max // if not, then go forward to the next element, set via modulo % and max: because we only have this many items we can navigate backward and forward within

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

    changeIndex = (direction) => {
        console.log(direction);

        const max = this.props.images.length
        const n = direction === "forward"
            ? this.state.index + 1
            : this.state.index - 1;

        const index = n < 0
            ? max - 1
            : n % max

        this.setState({index})
    }


    render() {
        console.log(this.props.images);

        // Object deconstruction, ES6
        // Can pull off (multiple) elements like images off properties like images[index]
        // Being able to pull off multiple elements is the benefit of object deconstruction + shorter sytnax:
        // Write {what we want to retrieve: array of images, i.e. our cat images} = via this.props
        // First example is an alternative to this.props.images and we store it in const
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
                            <option key={image.id} value={i} className="menu-list">
                                {image.label}
                            </option>
                        )
                    })}
                </select>
                {/*<p>{image.label}</p>*/}
                <Figure url={image.url}
                        onButtonClick={this.changeIndex}
                        para={image.label}/>
            </div>
        );
    }
}

export default App;




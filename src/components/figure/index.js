import React, {Component} from 'react';
import './style.css';

// One function that our component returns is render.
// We return cat images: so we cut the image reference from App.js and insert a reference to Figure in App.js + define url, which is image.url
// This way, we separated the figures from the main App.js and established a connection between App.js and index.js.

// Same for p: we kept image.label in App.js but defined it as para, within Figure.
// Our figure here accepts image labels via this.props.para ->
// before we had image.label, so we replaced image.label with this.props (as we pass captions from App.js to figure.js) and para (how we defined captions in App.js)
// So, we are accepting our caption - image label -  from App.js (defined as para there) via this.props.para

class Figure extends Component {
    onClick = (direction) => () => {
        this.props.onButtonClick(direction)
    }

    render() {
        return (
            <figure className="figure">
                {/*<p className="caption">{this.props.para}</p>*/}
                <button onClick={this.onClick("backward")} className="button">-</button>
                <img src={this.props.url} className="cat"/>
                <button onClick={this.onClick("forward")} className="button">+</button>
            </figure>
        )
    }
}

export default Figure;
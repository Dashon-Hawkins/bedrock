import React, { Component } from "react";
import PropTypes from "prop-types";
import Level from "../bulma/level";

class Team extends Component {
    render() {
        return (
            <div className="card pk-team">
                <div className="card-image">
                    <figure className="image">
                        <img
                            src={this.props.imageUrl}
                            alt={`Portrait of ${this.props.name}`}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">
                                {this.props.name}
                            </p>
                            <p className="subtitle is-6">
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Team.PropTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    imageUrl: PropTypes.string
};

export default Team;
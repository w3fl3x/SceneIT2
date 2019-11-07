import React from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";

class Stars extends React.Component {
  constructor(props) {
    super();

    this.state = {
      rating: props.rating,
      id: props.id
    };
  }

  onStarClick(nextValue) {
    axios.put(
      "/api/movies/ranking",
      { user_ranking: nextValue },
      { params: { id: this.state.id } }
    );

    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div className="row">
        <div className="col-sm-4 text-center"></div>
        <div className="col-sm-8 text-center">
          <h4 className="rankingStyle">Current Ranking: {rating}</h4>
          <StarRatingComponent
            name="rate1"
            starCount={10}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Stars;

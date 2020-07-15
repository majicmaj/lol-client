import React, { Component } from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./ShowTeam.css";
import Axios from "axios";

const captions = {
  // columns
  attack: "Attack",
  defense: "Defense",
  magic: "Magic"
};
class ShowTeam extends Component {
  delete(that) {
    Axios.delete(
      "https://lolbuilder.herokuapp.com/team/delete/id/" + that.target.name
    )
      .then(res => {
        console.log({ res });
        alert("deleted!");
        window.location.reload();
      })
      .catch(error => console.error(error));
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    if (
      this.props.teams.length > 0 &&
      this.props.champions.filter(champ => champ !== undefined)
    ) {
      return (
        <div className="ah">
          <h1>Teams</h1>
          <div className="team_main">
            {this.props.teams.map(team => (
              <div className="team_wrapper">
                <h1>{team.name}</h1>
                <div className="icons">
                  <img
                    className="teamicon"
                    src={
                      this.props.champions.filter(
                        champ => champ._id === team.top
                      )[0].icon
                    }
                    alt="champimg"
                  />
                  <img
                    className="teamicon"
                    src={
                      this.props.champions.filter(
                        champ => champ._id === team.jun
                      )[0].icon
                    }
                    alt="champimg"
                  />
                  <img
                    className="teamicon"
                    src={
                      this.props.champions.filter(
                        champ => champ._id === team.mid
                      )[0].icon
                    }
                    alt="champimg"
                  />
                  <img
                    className="teamicon"
                    src={
                      this.props.champions.filter(
                        champ => champ._id === team.bot
                      )[0].icon
                    }
                    alt="champimg"
                  />
                  <img
                    className="teamicon"
                    src={
                      this.props.champions.filter(
                        champ => champ._id === team.sup
                      )[0].icon
                    }
                    alt="champimg"
                  />
                </div>
                <RadarChart
                  captions={captions}
                  data={[
                    {
                      data: {
                        attack: team.attack / 45,
                        defense: team.defense / 45,
                        magic: team.magic / 45
                      },
                      meta: { color: "#0df" }
                    }
                  ]}
                  size={300}
                  scales={3}
                  className="chart"
                />
                <p>Created: {team.creation.substr(4, 11)}</p>
                <button
                  className="button delete"
                  name={team._id}
                  onClick={this.delete}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="ah">
          <h1>No teams available</h1>
          <p>
            It seems like all the teams have been deleted. If you tried posting
            a team and it is not showing here please post a github issue{" "}
            <a href="https://github.com/majicmaj/lol-client/issues">Here</a>
          </p>
        </div>
      );
    }
  }
}
export default ShowTeam;

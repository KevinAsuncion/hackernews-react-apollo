import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

class CreateLink extends Component {
  state = {
    description: "",
    url: ""
  };

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className=" flex flex-column mt3">
          <input
            className="mb2"
            type="text"
            value={description}
            placeholder="Enter a description for the link"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <input
            className="mb2"
            type="text"
            value={url}
            placeholder="Enter a url for the link"
            onChange={e => this.setState({ url: e.target.value })}
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description, url }}
          onCompleted={() => this.props.history.push("/")}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;

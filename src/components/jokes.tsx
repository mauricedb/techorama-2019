import React, { Component } from "react";
import Loading from "./loading";
import jokesResource from "./jokes-resource";

type Joke = { id: number; joke: string };

const initialState = { jokes: [] as Joke[], loading: true };

type JokesProps = { url: string };
type JokesState = typeof initialState;

class Jokes extends Component<JokesProps, JokesState> {
  state = initialState;

  async componentDidMount() {
    const { url } = this.props;
    const rsp = await fetch(url);
    const jokes = await rsp.json();
    this.setState({ jokes, loading: false });
  }
  render() {
    const { jokes, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div>
        <h2>Jon Skeet Jokes</h2>
        <ul>
          {jokes.map(item => (
            <li key={item.id}>{item.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const Jokes2: React.FC<JokesProps> = ({ url }) => {
  //   const [{ jokes, loading }, setState] = React.useState(initialState);

  //   React.useEffect(() => {
  //     const fetchJokes = async () => {
  //       const rsp = await fetch(url);
  //       const jokes = await rsp.json();
  //       setState({ jokes, loading: false });
  //     };
  //     fetchJokes();
  //   }, [url]);

  //   if (loading) {
  //     return <Loading />;
  //   }

  const jokes = jokesResource.read(url) as Joke[];

  return (
    <div>
      <h2>Jon Skeet Jokes</h2>
      <ul>
        {jokes.map(item => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </div>
  );
};

// export default Jokes;
export default Jokes2;

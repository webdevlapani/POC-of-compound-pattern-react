import Card from "./Card";
function App() {
  return (
    <div className="App">
      <Card>
        decide where it should go.
        <Card.Heading>My title</Card.Heading>
        <Card.Button>Toggle</Card.Button>
      </Card>
      <Card title="My title" button={true} />
    </div>
  );
}

export default App;

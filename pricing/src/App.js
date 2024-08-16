import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const links = [
    {
      url: "",
      title: "Hot Desk - $200/month",
      description: "1st come 1st served seating",
    },
    {
      url: "",
      title: "Reserved Desk - $400/month",
      description: "You get the same desk every day and can leave items at it",
    },
    {
      url: "",
      title: "Large Office - $1,200/month",
      description: "Space can accommodate up to 4 desks",
    },
  ];
  return (
    <div className="App">
      <header className="">
        <a href="https://www.regenhub.xyz">
          <h1 className="tc white pb5">RegenHub.xyz</h1>
        </a>
      </header>
      <article>
        {links.map((link, index) => (
          <Button
            key={index}
            title={link.title}
            url={link.url}
            description={link.description}
          />
        ))}
      </article>
      <p>
        *We never want finances to prevent you from joining the space! We're happy to work
        with you if you can't currently afford the full rent amount.
      </p>
    </div>
  );
}

export default App;

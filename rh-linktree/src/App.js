import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const links = [
    {
      url: "https://t.me/+dqRIDA3ohAQwNzMx",
      title: "RegenHub Telegram Chat",
      description: "Join to stay up to date w/ what's happening at the hub",
    },
    {
      url: "https://rates.regenhub.xyz",
      title: "Membership Rates",
      description: "Get an idea of how much it costs to work out of the space",
    },
    {
      url: "",
      title: "Request to Join",
      description: "All members must be approved by governance before joining the space",
    },
    {
      url: "https://forum.regenhub.xyz",
      title: "Governence Forum",
      description: "Follow along and participate in governing the regenhub",
    },
    {
      url: "https://donate.regenhub.xyz",
      title: "Donate/Mint NFT",
      description: "Help support the space by donating or minting an NFT",
    },
  ];
  return (
    <div className="App">
      <header className="">
        <h1 className="tc pb5">RegenHub.xyz</h1>
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
    </div>
  );
}

export default App;

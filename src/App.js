import "./App.css";
import { Menu } from "./menu/Menu";
function App() {
  const menuFixtures = [
    {
      label: "artists",
      children: [
        {
          label: "Daft",
          children: [],
        },
        {
          label: "Punk",
          children: [],
        },
      ],
    },
    {
      label: "albums",
      children: [
        {
          label: "get your wings",
          children: [],
        },
        {
          label: "hotel california",
          children: [],
        },
        {
          label: "physical graffiti",
          children: [
            {
              label: "houses of holy",
            },
            {
              label: "in my time of dying",
            },
          ],
        },
      ],
    },
    {
      label: "songs",
      children: [],
    },
    {
      label: "genres",
      children: [],
    },
    {
      label: "settings",
      children: [],
    },
  ];

  return (
    <div className="App menu">
      <Menu items={menuFixtures}>Designplox</Menu>
    </div>
  );
}

export default App;

import { Menu } from "./Menu";

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

export default {
  title: "Example/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export const Default = {
  render: () => <Menu items={menuFixtures}>Designplox</Menu>,
};

export const width = {
  render: () => (
    <div style={{ maxWidth: "500px" }}>
      <Menu items={menuFixtures}>Designplox</Menu>
    </div>
  ),
};

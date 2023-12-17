import React, { useState } from "react";

import "./Treeview.scss";
import style from "../Sidebar.module.scss";

const AllSports = [
  {
    id: 1,
    name: "Cricket",
    children: [
      {
        id: "1-1",
        name: "T 10 XI",
        children: [
          {
            id: "1-2-1",
            name: "Hydrabad XI v Chennai XI",
            children: [],
          },
        ],
      },
      {
        id: "1-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "1-3",
        name: "Vertual Cricket League",
        children: [],
      },
    ],
  },
  {
    id: 2,
    name: "Football",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tennis",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Table Tennis",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Table Tennis",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Table Tennis",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Table Tennis",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Table Tennis",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Table Tennis",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Table Tennis",
    children: [
      {
        id: "2-1",
        name: "England Championship",
        children: [
          {
            id: "2-1",
            name: "Bristol City v Sunderland",
            children: [],
          },
          {
            id: "2-1-2",
            name: "Hull v Cardiff",
            children: [],
          },
        ],
      },
      {
        id: "2-2",
        name: "T 5 Xi",
        children: [
          {
            id: "1-2-1",
            name: "Item 2.1",
            children: [
              {
                id: "2-1",
                name: "Hydrabad XI v Chennai XI",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={style.treeNode}>
      <div className={`${style.nodeToogle} ${isExpanded ? "expanded" : ""}`}>
        {node.children.length > 0 && (
          <span
            onClick={handleToggle}
            className={
              isExpanded && node.children.length > 0 ? `${style.active}` : ""
            }
          ></span>
        )}
        {/* {isExpanded && node.children.length > 0 ? "" : ""} */}
        {node.name}
      </div>
      {isExpanded && (
        <ul className={style.childNodes}>
          {node.children.map((childNode) => (
            <li key={childNode.id}>
              <TreeNode node={childNode} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TreeView = () => {
  return (
    <div>
      {AllSports.map((rootNode) => (
        <TreeNode key={rootNode.id} node={rootNode} />
      ))}
    </div>
  );
};
export default TreeView;

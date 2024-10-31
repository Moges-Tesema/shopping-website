import React from "react";
import MenuItem from "../menu-item/menu-item";
import hats from "../menu-item/images/hats.png";
import Ethiopian from "../menu-item/images/Ethiopian.png";
import jackets from "../menu-item/images/jackets.png";
import men from "../menu-item/images/men.png";
import sneakers from "../menu-item/images/sneakers.png";
import wowens from "../menu-item/images/womens.png";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: hats,
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: jackets,
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: sneakers,
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: wowens,
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: men,
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
        {
          title: "Ethiopian",
          imageUrl: Ethiopian,
          id: 6,
          linkUrl: "shop/wonens",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} />
        ))}
      </>
    );
  }
}

export default Directory;

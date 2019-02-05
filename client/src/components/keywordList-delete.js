import React from "react";
import { Image, List } from "semantic-ui-react";

const KeywordList = props => (
  <div>
    {props.keywordList.map(dish => (
      <List divided horizontal size="tiny">
        <List.Item>
          <Image src={dish.image} circular size="mini" />
          <List.Content>
            <List.Header>{dish.name}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    ))}
  </div>
);

export default KeywordList;

import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";
// import CommentBox from "../CommentBox";

it("shows a comment box", () => {
  const component = shallow(<App />);
  expect(component.find(CommentBox).length).toEqual(1);
});
it("shows a comment list", () => {
  const component = shallow(<App />);
  expect(component.find(CommentList).length).toEqual(1);
});

import React, { Component } from "react";
import * as Styled from "./error-boundary.styles";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Styled.ErrorBoundaryOverlay>
          <Styled.ErrorBoundaryImage imageUrl="https://i.imgur.com/yW2W9SC.png" />
          Something went wrong
        </Styled.ErrorBoundaryOverlay>
      );
    }

    return this.props.children;
  }
}

/* eslint-disable react/destructuring-assignment */
import React, { Component, ReactNode } from 'react';

type State = {
  hasError: boolean;
};

type Props = {
  children: ReactNode;
};

class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  // TODO find a nice error illustration
  render() {
    if (this.state.hasError) {
      return <h1>Oups, something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;

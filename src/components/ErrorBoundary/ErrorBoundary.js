import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Uh oh! Something went wrong!</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.errorInfo.componentStack}</p>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
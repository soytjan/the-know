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

  // should I put in some sort of refresh button that redirects to another page? 
  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Uh oh! Something went wrong!</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.errorInfo.componentStack}</p>
          <button>Click here to start over!</button>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
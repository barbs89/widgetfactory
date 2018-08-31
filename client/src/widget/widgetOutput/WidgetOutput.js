import React from 'react';
import './WidgetOutput.css';

class WidgetOutput extends React.Component {
  render() {
    return (
      <div className="widget-output-container">
        <div className="code-snippet-container">
          <button onClick={this.props.getSnippet} id="codecapture">
            Capture Code
          </button>
          <div className="output-container">
            <p className="output-script-string">
              Your script will be generated...
              {this.props.codeSnippet}
            </p>
          </div>
          <div className="instructions-container">
            <h4 className="instructions-snippet">
              To render this widget, copy and paste the script above into your
              websites HTML document.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export { WidgetOutput };

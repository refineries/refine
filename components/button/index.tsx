import * as React from 'react'

interface MyProps {
  text: string
}
class Button extends React.Component<MyProps> {
  public render() {
    return <button className="refi-button">{this.props.text}</button>
  }
}

export default Button

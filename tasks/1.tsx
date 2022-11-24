import React from "react";

// Check knowledge of function scopes, new callback each render for Button

export class Counter extends React.Component<any, any> {
    state = {
        count: 0
    }

    updateCount() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return <div>
            {this.state.count}
            <Button onClick={() => this.updateCount()}>+</Button>
        </div>;
    }
}

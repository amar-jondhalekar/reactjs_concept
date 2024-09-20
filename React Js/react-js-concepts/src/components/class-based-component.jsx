import { Component } from "react"

class ClassBasedComponent extends Component {
    state = {
        showText: false,
        changeColor : false,
        count: 0,
    };
    handleClick = () => {
        console.log('Button Clicked!');
        // destructuring state 
        const {showText, changeColor} = this.state;
        this.setState({
            showText: !showText,
            changeColor: !changeColor,
        });
    };

    //componentDidMount on page load

    componentDidMount(){
        console.log('this is called first time on page load');

        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        });
    };

    handleCount = () => {
        this.setState({
            ...this.state,
            count : this.state.count + 1,
        })
    }

    // componentDidUpdate showing previousState 
    componentDidUpdate(prevProps, prevState){
        console.log(prevState, this.state);
    };

    render(){
        console.log(this.state);
        // destructuring state 
        const {showText, changeColor, count} = this.state;
        return(
        <div>
            {
                showText ? <h3 style={{color: changeColor ? 'red' : 'black'}}> Class based component </h3> : null
            }
        <button onClick={this.handleClick}> Toggle Text </button>
        <button onClick={this.handleCount}> Increase Count Value </button>
        <h3>Count is {count} </h3>
        </div>
    );
}
}
export default ClassBasedComponent;
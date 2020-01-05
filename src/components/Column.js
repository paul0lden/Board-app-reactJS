import React from 'react'
import Board from './Board/Board'
import AddCard from './Board/AddCard'
import BoardName from "./Board/BoardName";

import Card from './Card/Card'
import App from '../App';

class  AppComponent extends React.Component {
    state = {
        numChildren: 0
    };

    render() {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i+=1) {
            children.push(<ChildComponent key={i} number={i} />);
        }
        
        var par = document.getElementsByClassName("board")

        return (
            <Column addChild={this.onAddChild}>{children}</Column> 
        );
    }
    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    };
}

const ChildComponent = props => <Card className="card" id={"card"+props.number}>{"I am child " + props.number}</Card>;

const Column = props => (

    
        <div className={props.className}>
            <BoardName className="board-name">

            </BoardName>
            <Board className="board">
                {props.children}
            </Board>
            
            <AddCard className="add-button" onClick={props.addChild}>
                +
            </AddCard>
        </div>
    
)

export default AppComponent


import React from 'react'
import '../css/smallcalculator.css'

class SmallCalculator extends React.Component{
    constructor(){
        super()
        this.state={
            topScreen: '',
            bottomScreen: '',
            calcScreen: '',
            currentNumber: 0
        }
        this.handleNumber = this.handleNumber.bind(this)
        this.clear = this.clear.bind(this)
        this.basicOperation = this.basicOperation.bind(this)
        this.handleEval = this.handleEval.bind(this)
    }
    handleNumber = (e) => {
        let number = e.target.value
        this.setState({
            bottomScreen: this.state.bottomScreen + number,
            calcScreen: this.state.calcScreen + number,
            currentNumber: parseFloat(this.state.bottomScreen + number)
        })
    }
    clear = () => {
        this.setState({
            topScreen: '',
            bottomScreen: '',
            calcScreen: '',
            currentNumber: 0
        })
    }
    backButton = () => {
        let number = this.state.bottomScreen.slice(0,-1)
        if(this.state.bottomScreen.length>1){
            this.setState({
                bottomScreen: number,
                currentNumber: parseFloat(number)
            })
        } else {
            this.setState({
                bottomScreen: '',
                currentNumber: 0
            })
        }
    }
    // handle Eval =
    handleEval= ()=>{
        const {topScreen, currentNumber} = this.state
        let answer=eval(topScreen + currentNumber)
        try {
            this.setState({
                topScreen: topScreen + currentNumber,
                bottomScreen: answer
            })
        } catch {
            this.setState({
                bottomScreen: 'Error'
            })
        }
    }
    // Basic Operation + - / * 
    basicOperation = (e) => {
        const { bottomScreen } = this.state
        let input = bottomScreen ? parseFloat(bottomScreen) : 0
        let {value} = e.target
        if(value === '+'){
            this.setState({
                topScreen: input + '+',
                bottomScreen: ''
            })
        }
        if(value === '-'){
            this.setState({
                topScreen: input + '-',
                bottomScreen: ''
            })
        }
        if(value === '*'){
            this.setState({
                topScreen: input + '*',
                bottomScreen: ''
            })
        }
        if(value === '/'){
            this.setState({
                topScreen: input + '/',
                bottomScreen: ''
            })
        }
    }
    render(){
        return(
            <div className="test small-calc-main">
                <div className="calc-title">
                    <div>Calculator</div>
                        <div className="close-button"
                            onClick={()=>this.props.hidecalculator()}
                    >x</div>
                </div>
                <input 
                    className="top-screen"
                    value={this.state.topScreen}
                    readOnly
                ></input>
                <input 
                    className="bottom-screen"
                    value={this.state.bottomScreen}
                    readOnly
                ></input>
                <div className="calc-first lines">
                    <button 
                        onClick={this.clear}
                        className="test">
                        C
                    </button>
                    <button 
                        onClick={this.backButton}
                        className="test">
                        Back
                    </button>
                    <button
                        onClick={this.percent}
                    >
                        %
                    </button>
                    <button 
                        value="/"
                        onClick={this.basicOperation}
                    >
                        /
                    </button>
                </div>
                <div className="calc-second lines">
                    <button 
                        value="7"  
                        onClick={this.handleNumber}  
                    >
                        7
                    </button>
                    <button 
                        value="8"  
                        onClick={this.handleNumber}>
                        8
                    </button>
                    <button
                        value="9"  
                        onClick={this.handleNumber}
                    >
                        9
                    </button>
                    <button     
                    >
                        *
                    </button>
                </div>
                <div className="calc-first lines">
                    <button
                        value="4"  
                        onClick={this.handleNumber}>
                        4
                    </button>
                    <button
                        value="5"  
                        onClick={this.handleNumber}>
                        5
                    </button>
                    <button
                        value="6"  
                        onClick={this.handleNumber}>
                        6
                    </button>
                    <button 
                        value="-"
                        onClick={this.basicOperation}
                    >
                        -
                    </button>
                </div>
                <div className="calc-first lines">
                    <button
                        value="1"  
                        onClick={this.handleNumber}>
                        1
                    </button>
                    <button
                        value="2"  
                        onClick={this.handleNumber}>
                        2
                    </button>
                    <button
                        value="3"  
                        onClick={this.handleNumber}>
                        3
                    </button>
                    <button 
                        value="+"
                        onClick={this.basicOperation}
                    >
                        +
                    </button>
                </div>
                <div className="calc-fifth lines">
                    <button 
                        onClick={this.handleNumber}
                        value="0"
                        className="big-button">
                        0
                    </button>
                    <button
                        
                    >
                        .
                    </button>
                    <button 
                        className=""
                        onClick={this.handleEval}
                    >
                        =
                    </button>
                </div>
            </div>
        )
    }
}

export default SmallCalculator
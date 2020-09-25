import React from 'react';
import '../css/calculator.css'

class Calculator extends React.Component{
    constructor(){
        super()
        this.state = {
            topScreen: '',
            bottomScreen: '',
            currentNumber: 0, 
            calcScreen: '', // hidden
            degree: true, // Angle is degree by default
            operation: false, // if any operations are goinh on +-*/
        }
        this.changeAngle = this.changeAngle.bind(this)
        this.handleNumber = this.handleNumber.bind(this)
        this.clear = this.clear.bind(this)
        this.basicOperation = this.basicOperation.bind(this)
        this.singleOperation = this.singleOperation.bind(this)
        this.handleEval = this.handleEval.bind(this)
    }

    // changing angle
    changeAngle = (e) => {
        if(e.target.value === "rad"){
            this.setState({ degree: false })
        } else {
            this.setState({ degree: true })
        }
    }

    handleNumber = (e) => {
        let number = e.target.value
        this.setState({
            bottomScreen: this.state.bottomScreen + number,
            calcScreen: this.state.calcScreen + number,
            currentNumber: parseFloat(this.state.bottomScreen + number)
        })
    }
    // clear button
    clear = () => {
        this.setState({
            topScreen: '',
            bottomScreen: '',
            calcScreen: '',
            currentNumber: 0
        })
    }
    // back button
    backButton = () => {
        this.setState({
            
        })
    }
    // sign change
    signChange = () => {
        if(this.state.currentNumber > 0){
            this.setState({
                bottomScreen: '-'+this.state.bottomScreen,
                currentNumber: this.state.currentNumber * -1
            })
        } else {
            this.setState({
                bottomScreen: this.state.bottomScreen.slice(1),
                currentNumber: this.state.currentNumber * -1
            })
        }
    }
    // handle Eval =
    handleEval= ()=>{
        const {topScreen, currentNumber} = this.state
        let answer=eval(topScreen+currentNumber)
        this.setState({
            topScreen: topScreen + currentNumber,
            bottomScreen: answer
        })
    }
    // Basic Operation + - / * 
    basicOperation = (e) => {
        const { bottomScreen } = this.state
        let {value} = e.target
        if(value === '+'){
            this.setState({
                topScreen: bottomScreen + '+',
                bottomScreen: ''
            })
        }
        if(value === '-'){
            this.setState({
                topScreen: bottomScreen + '-',
                bottomScreen: ''
            })
        }
        if(value === '*'){
            this.setState({
                topScreen: bottomScreen + '*',
                bottomScreen: ''
            })
        }
        if(value === '/'){
            this.setState({
                topScreen: bottomScreen + '/',
                bottomScreen: ''
            })
        }
    }
    // Single Number operations
    singleOperation = (e) => {
        let number = this.state.bottomScreen? parseFloat(this.state.bottomScreen): 0;
        let angle = number;
        if(this.state.degree){
            angle = number * Math.PI / 180;
        }
        switch(e.target.value){
            case "sinh": 
                this.setState({
                    topScreen: `sinh(${number})`,
                    bottomScreen: Math.sinh(number)
                })
                break;
            case "cosh":
                this.setState({
                    topScreen: `cosh(${number})`,
                    bottomScreen: Math.cosh(number)
                })
                break;
            case "tanh":
                this.setState({
                    topScreen: `tanh(${number})`,
                    bottomScreen: Math.tanh(number)
                })
                break;
            case "sinhinv":
                this.setState({
                    topScreen: `asinh(${number})`,
                    bottomScreen: Math.asinh(number)
                })
                break;
            case "coshinv":
                this.setState({
                    topScreen: `acosh(${number})`,
                    bottomScreen: Math.acosh(number)
                })
                break;
            case "tanhinv":
                this.setState({
                    topScreen: `atanh(${number})`,
                    bottomScreen: Math.atanh(number)
                })
                break;
            case "sin": 
                this.setState({
                    topScreen: `sin(${angle})`,
                    bottomScreen: Math.sin(angle)
                })
                break;
            case "cos":
                this.setState({
                    topScreen: `cos(${angle})`,
                    bottomScreen: Math.cos(angle)
                })
                break;
            case "tan":
                this.setState({
                    topScreen: `tan(${angle})`,
                    bottomScreen: Math.tan(angle)
                })
                break;
            case "sininv": 
                if(this.state.degree){
                    this.setState({
                        topScreen: `asin(${number})`,
                        bottomScreen: 180 * Math.asin(number) / Math.PI
                    })
                    break;
                }
                this.setState({
                    topScreen: `asin(${number})`,
                    bottomScreen: Math.asin(number)
                })
                break;
            case "cosinv":
                if(this.state.degree){
                    this.setState({
                        topScreen: `acos(${number})`,
                        bottomScreen: 180 * Math.acos(number) / Math.PI
                    })
                    break;
                }
                this.setState({
                    topScreen: `acos(${number})`,
                    bottomScreen: Math.acos(number)
                })
                break;
            case "taninv":
                if(this.state.degree){
                    this.setState({
                        topScreen: `atan(${number})`,
                        bottomScreen: 180 * Math.atan(number) / Math.PI
                    })
                    break;
                }
                this.setState({
                    topScreen: `atan(${number})`,
                    bottomScreen: Math.atan(number)
                })
                break;
            case "sqrt":
                this.setState({
                    topScreen: `sqrt(${number})`,
                    bottomScreen: Math.sqrt(number)
                })
                break;
            case "ln":
                this.setState({
                    topScreen: `ln(${number})`,
                    bottomScreen: Math.log(number)
                })
                break;
            case "log":
                this.setState({
                    topScreen: `log(${number})`,
                    bottomScreen: Math.log10(number)
                })
                break;
            case "log2x":
                this.setState({
                    topScreen: `log2(${number})`,
                    bottomScreen: Math.log2(number)
                })
                break;
            case "fact":{
                function factorial(n){
                    if(n === 0 || n === 1 ){
                        return 1;
                    } else {
                        return n * factorial(n-1);
                    }
                }
                let value = factorial(number);
                this.setState({
                    topScreen: `fact(${number})`,
                    bottomScreen: value,
                })
                }
                break;
            case "ex":
                this.setState({
                    topScreen: `e^(${number})`,
                    bottomScreen: Math.E ** (number)
                })
                break;
            case "tenx":
                this.setState({
                    topScreen: `10^(${number})`,
                    bottomScreen: 10 ** (number)
                })
                break;
            case "inv":
                this.setState({
                    topScreen: `1/${number}`,
                    bottomScreen: 1 / (number)
                })
                break;
            case "cube":
                this.setState({
                    topScreen: `${number}^3`,
                    bottomScreen: number ** 3
                })
                break;
            case "square":
                this.setState({
                    topScreen: `${number}^2`,
                    bottomScreen: number ** 2
                })
                break;
            case "cuberoot":
                this.setState({
                    topScreen: `${number}^(1/3)`,
                    bottomScreen: number ** (1/3)
                })
                break;
            case "mod":
                if(number<0){
                    this.setState({
                        topScreen: `abs(${number})`,
                        bottomScreen: number* -1
                    })
                } else {
                    this.setState({
                        topScreen: `abs(${number})`,
                        bottomScreen: number
                    })
                }
                break;
            default: 
                console.log("Wrong input")
        }
    }

    render(){
        return(
            <div className="test calc-main">
                <div className="calc-title">
                    Scientific Calculator
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
                <input 
                    className=""
                    value={this.state.calcScreen}
                    readOnly
                ></input>
                <input 
                    className=""
                    value={this.state.currentNumber}
                    readOnly
                ></input>
                <div className="calc-first lines">
                    <span className="first-left">
                    <button>
                        mod
                    </button>
                    <input
                        type="radio"
                        value="deg"
                        name="angle"
                        onChange={this.changeAngle}
                        defaultChecked
                    />Deg
                    <input
                        type="radio"
                        value="rad"
                        name="angle"
                        onChange={this.changeAngle}
                    />Rad
                    </span>
                    <span className="first-right">
                    <button>
                        MC
                    </button>
                    <button>
                        MR
                    </button>
                    <button>
                        MS
                    </button>
                    <button>
                        M+
                    </button>
                    <button>
                        M-
                    </button>
                    </span>
                </div>
                <div className="calc-second lines">
                    <button
                        onClick={this.singleOperation}
                        value="sinh"
                    >
                        sinh
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="cosh">
                        cosh
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="tanh">
                        tanh
                    </button>
                    <button>
                        Exp
                    </button>
                    <button>
                        (
                    </button>
                    <button>
                        )
                    </button>
                    <button className="big-button test">
                        Back
                    </button>
                    <button 
                        onClick={this.clear}
                        className="test">
                        C
                    </button>
                    <button
                        onClick={this.signChange}
                    >
                        +/-
                    </button>
                    <button     
                        value="sqrt"
                        onClick={this.singleOperation}
                    >
                        sqrt
                    </button>
                </div>
                <div className="calc-third lines">
                    <button
                        onClick={this.singleOperation}
                        value="sinhinv">
                        sinh<sup>-1</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="coshinv"
                    >
                        cosh<sup>-1</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="tanhinv">
                        tanh<sup>-1</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="log2x">
                        log<sub>2</sub>x
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="ln">
                        ln
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="log">
                        log
                    </button>
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
                        value="/"
                        onClick={this.basicOperation}
                    >   
                        /
                    </button>
                    <button>
                        %
                    </button>
                </div>
                <div className="calc-forth lines">
                    <button onClick={()=>{
                        this.setState({
                            bottomScreen: Math.PI,
                            calcScreen: Math.PI,
                            currentNumber: Math.PI
                        })
                    }}>
                        Pi
                    </button>
                    <button onClick={()=>{
                        this.setState({
                            bottomScreen: Math.E,
                            calcScreen: Math.E,
                            currentNumber: Math.E
                        })
                    }}>
                        e
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="fact">
                        n!
                    </button>
                    <button>
                        log<sub>y</sub>x
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="ex">
                        e<sup>x</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="tenx">
                        10<sup>x</sup>
                    </button>
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
                        value="*"
                        onClick={this.basicOperation}
                    >
                        *
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="inv">
                        1/x
                    </button>
                </div>
                <div className="calc-fifth lines">
                    <button
                        onClick={this.singleOperation}
                        value="sin">
                        sin
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="cos">
                        cos
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="tan">
                        tan
                    </button>
                    <button>
                        x<sup>y</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="cube">
                        x<sup>3</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="square">
                        x<sup>2</sup>
                    </button>
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
                        value="-"
                        onClick={this.basicOperation}
                    >
                        -
                    </button>
                    <button 
                        className="tall-button"
                        onClick={this.handleEval}
                    >
                        =
                    </button>
                </div>
                <div className="calc-sixth lines">
                    <button
                        onClick={this.singleOperation}
                        value="sininv">
                        sin<sup>-1</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="cosinv">
                        cos<sup>-1</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="taninv">
                        tan<sup>-1</sup>
                    </button>
                    <button>
                        x<sup>1/y</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="cuberoot">
                        x<sup>1/3</sup>
                    </button>
                    <button
                        onClick={this.singleOperation}
                        value="mod">
                        |x|
                    </button>
                    <button 
                        onClick={this.handleNumber}
                        value="0"
                        className="big-button">
                        0
                    </button>
                    <button>
                        .
                    </button>
                    <button 
                        value="+"
                        onClick={this.basicOperation}
                    >
                        +
                    </button>
                </div>
            </div>
        )
    }
}

export default Calculator;
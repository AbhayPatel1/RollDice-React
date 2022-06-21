//import './RollDIce.css'

class RollDice extends React.Component {
    static defaultProps  = {
        sides:["one","two","three","four","five","six"]};
    constructor(props){
        super(props);
        this.state = {faceOne : "one",faceTwo:"one",rolling:false};
        this.roll = this.roll.bind(this);
    };
    roll(){
        let die1 = this.props.sides[
            Math.floor(Math.random()*this.props.sides.length)];
        let die2 = this.props.sides[
            Math.floor(Math.random()*this.props.sides.length )];

            this.setState({faceOne:die1,faceTwo:die2,rolling:true});
            setTimeout(()=>{
                this.setState({rolling:false})
            },1000)
    }

    render(){
        return(
            <div className="RollDice">
                <div className='RollDice-container'>
                <Die face={this.state.faceOne} rolling={this.state.rolling}/>
                <Die face={this.state.faceTwo} rolling={this.state.rolling}/>
                </div>
            <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling?'Rolling...':'Roll Dice!'}</button>
            </div>
        )
    }
}
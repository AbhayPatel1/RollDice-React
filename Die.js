//import './dice.css'

class Die extends React.Component {
    render(){
        var cls = `fas fa-dice-${this.props.face} ${this.props.rolling?'shake':''}`
        return (
            <div className = "die">
                <i className={cls}></i>
            </div>    
        )
    }
}

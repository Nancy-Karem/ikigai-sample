import React from "react";

class Circle extends React.Component{
    render(){
        let circleStyle = {
            padding:10,
            margin:20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: this.props.width? this.props.width:50,
            height:this.props.height? this.props.height:50,
            textAlign: "center",
            color: "#fff"
        };

        return (
            <div className={"circle-class"} style={circleStyle} onClick={this.props.onClick}>
                <p className={'circle-text'}>{this.props.textContent}</p>
            </div>
        );
    }
}

export default Circle;


import React from "react";
import Circle from "./Circle";
import CarouselContainer from "./CarouselContainer";

class CareerDataModel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };

        this.setActiveIndex = this.setActiveIndex.bind(this)
    }

    setActiveIndex(index){
        console.log("index=",index)
        this.setState({
            activeIndex: index-1,
        })
    }


    render() {
        return (
            <>
                <div className={"career-display"}>
                    <div className={"top-row"}>
                        <Circle bgColor={"#ff6b03"} textContent={"01"} onClick={()=>{this.setActiveIndex(1)}}/>
                    </div>
                    <div className={"center-row"}>
                        <Circle bgColor={"#ff6b03"} textContent={"02"} onClick={()=>{this.setActiveIndex(2)}}/>
                        <Circle bgColor={"#4e7392"} height={100} width={100} textContent={"Machinery Mechanic"}/>
                        <Circle bgColor={"#ff6b03"} textContent={"03"} onClick={()=>{this.setActiveIndex(3)}}/>
                    </div>
                    <div className={"bottom-row"}>
                        <Circle bgColor={"#ff6b03"} textContent={"04"} onClick={()=>{this.setActiveIndex(4)}}/>
                        <Circle bgColor={"#ff6b03"} textContent={"05"} onClick={()=>{this.setActiveIndex(5)}}/>
                    </div>
                    <CarouselContainer activeIndex={this.state.activeIndex}/>
                </div>

            </>
        );
    }
}
export default CareerDataModel;


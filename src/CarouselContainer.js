import React from "react";
import {Carousel} from "react-bootstrap";
import Circle from "./Circle";

class CarouselContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: this.props.activeIndex,
        };

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(selectedIndex, e){
        this.setState({
            activeIndex: selectedIndex,
        })
    }

    render(){
        return (
            <Carousel className={"carousel-main-div"} activeIndex={this.props.activeIndex} interval={null} onSelect={this.handleSelect}>
                <Carousel.Item className={"carousel-item"}>
                    <div className={"carousel-item-contents"}>
                        <h3>Mechanical Engineer</h3>
                        <p>£31,500 - £42,000</p>
                        <Circle bgColor={"#ff6b03"} textContent={"01"} height={40} width={40}/>
                        <p>Hours | Skills | Industry</p>
                        <p>40    | 76%    | 70%</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={"carousel-item-contents"}>
                        <h3>Mechanical Engineer</h3>
                        <p>£31,500 - £42,000</p>
                        <Circle bgColor={"#ff6b03"} textContent={"02"} height={40} width={40}/>
                        <p>Hours | Skills | Industry</p>
                        <p>40    | 76%    | 70%</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={"carousel-item-contents"}>
                        <h3>Mechanical Engineer</h3>
                        <p>£31,500 - £42,000</p>
                        <Circle bgColor={"#ff6b03"} textContent={"03"} height={40} width={40}/>
                        <p>Hours | Skills | Industry</p>
                        <p>40    | 76%    | 70%</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={"carousel-item-contents"}>
                        <h3>Mechanical Engineer</h3>
                        <p>£31,500 - £42,000</p>
                        <Circle bgColor={"#ff6b03"} textContent={"04"} height={40} width={40}/>
                        <p>Hours | Skills | Industry</p>
                        <p>40    | 76%    | 70%</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={"carousel-item-contents"}>
                        <h3>Mechanical Engineer</h3>
                        <p>£31,500 - £42,000</p>
                        <Circle bgColor={"#ff6b03"} textContent={"05"} height={40} width={40}/>
                        <p>Hours | Skills | Industry</p>
                        <p>40    | 76%    | 70%</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselContainer;


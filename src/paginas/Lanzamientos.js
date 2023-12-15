import React from "react";

export default class Lanzamientos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lanzamientos: []
        };
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random/6")  
            .then(res => res.json())
            .then(result => {
                console.log(result);
                this.setState({
                    lanzamientos: result.message 
                });
            });
    }

    render() {
        return (
            <>
                {this.state.lanzamientos.map((lanzamiento, index) => (
                    <div className="container mt-5 pt-4">
                        <div key={index} className="mb-2">
                            <img src={lanzamiento} alt={`Raza ${index}`} style={{ width: '200px',height: '200px', borderRadius: '40px' }} />
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

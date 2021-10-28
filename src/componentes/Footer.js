import React from "react";

const Footer = (propiedasdes) => {
    return (
        <footer>
           1er Píe de página
        </footer>
    );
}

class Footer2 extends React.Component{
    render(){
        return <h1>2do Píe de página</h1>;
    };
}

function Footer3(){
    return <footer>3er Píe de página</footer>
}

export default Footer;
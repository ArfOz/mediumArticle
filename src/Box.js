import React from 'react'

class Box extends React.Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state= {};
      }
    componentWillUnmount(){
        console.log("component will unmounttttttttttttttttttttttttttttttttttttttttttttttttttt")
      }
    render(){
    return (
        <div style={{width:100, height:100, backgroundColor:"red"}}>
            
        </div>
    )
}};

export default Box;
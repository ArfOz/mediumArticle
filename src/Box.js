import React, {useEffect} from 'react'

const Box = () => {
  useEffect(() =>{
      console.log("Box added or updated")

    return () => {
        console.log('componentWillUnmount!');
      };
});
    return (
        <div style={{width:100, height:100, backgroundColor:"red"}}>
            
        </div>
    )
};

export default Box;
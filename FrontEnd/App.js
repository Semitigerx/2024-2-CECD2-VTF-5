import React from "react";
import App from './screens/HomeScreen';
import Opening from "./screens/Opening"

export default class extends React.Component{
    state={
      isLoading : true
    };
    componentDidMount= async() => {  
      // 1,000가 1초
      setTimeout(() => {this.setState({isLoading: false})},2300);
    }
  
    render(){
      if(this.state.isLoading){
        return <Opening/>
      }else{
        return <App />;
      }
    }
}

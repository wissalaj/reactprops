import React from "react";
import propTypes from 'prop-types';


const ProfileComponent =(props)=>{
const style={width:900,margin:30};

    return (
    <div className="box"  style={style}>
    <div>{props.children}</div>
    <div onClick= {props.handleName(props.fullName)}>
    <div className="fullName">
    <h1 >FullName: </h1>
    <div>{props.fullName}</div>
    </div>
    </div>
    <div className="biographi">
        <h1>Bio:</h1>
        <div>{props.bio}</div>
    </div>
  <div className="prof">
      <h1>Profession: </h1>
      <div>{props.profession}</div>
  </div>
     </div>
    )
    
}
ProfileComponent.defaultProps ={
    fullName:" wissalAjmi"
}
ProfileComponent.propTypes={
    fullName : propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName: propTypes.func


};

export default ProfileComponent;
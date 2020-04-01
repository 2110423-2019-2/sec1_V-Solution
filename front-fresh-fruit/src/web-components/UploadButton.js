import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faUserCircle ,faFlag} from '@fortawesome/free-solid-svg-icons'

const UploadButton = (props) =>{
  
  const showPicType = (usertype,onchange) =>{
    switch(usertype){
      case 'single':
      return (<div className='button-upload'>
        <label htmlFor='single'>
          <FontAwesomeIcon icon={faUserCircle} color='#3B5998' size='10x' />
        </label>
        <input type='file' id='single' onChange={onchange} />
      </div>)
      case 'product':
        return (
      <div className='button-upload'>
        <label htmlFor='multi'>
          <FontAwesomeIcon icon={faCarrot} color='#6d84b4' size='10x' />
        </label>
        <input type='file' id='multi' onChange={onchange} multiple />
      </div>
        )
      default:
        return (
      <div className='button-upload'>
        <label htmlFor='multi'>
          <FontAwesomeIcon icon={faFlag} color='#6d84b4' size='5x' />
        </label>
        <input type='file' id='multi' onChange={onchange} multiple />
      </div>
        )
  }}
  
  return (
    <div className='buttons-upload fadein'>
      {showPicType(props.single,props.onChange)}
    </div>
  )
}

export default UploadButton;
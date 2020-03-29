import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default props =>
  <div className='buttons-upload fadein'>
    {props.single ?
      <div className='button-upload'>
        <label htmlFor='single'>
          <FontAwesomeIcon icon={faUserCircle} color='#3B5998' size='10x' />
        </label>
        <input type='file' id='single' onChange={props.onChange} />
      </div>
      :
      <div className='button-upload'>
        <label htmlFor='multi'>
          <FontAwesomeIcon icon={faCarrot} color='#6d84b4' size='10x' />
        </label>
        <input type='file' id='multi' onChange={props.onChange} multiple />
      </div>
    }
  </div>
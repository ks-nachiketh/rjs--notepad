import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateText } from '../store/textSlice';

import './TextArea.css'


export default function TextArea() {

    const content = useSelector((state)=> state.text.content)
    const dispatch = useDispatch()


  return (
    // DEfine text area
    <div className="text-area-core">

      <textarea
        className="text-area"
        value={content}
        onChange={(e) =>dispatch(updateText(e.target.value))} 
        placeholder="Start typing here..."
      />

    </div>
  );
}

import React from 'react'
import ICard from './ICard'
import image from '../assets/image.png'

function ICardGallery(props) {
  return (
    <div style={{display: 'flex',justifyContent: 'space-around', border:'5px solid red', height:'350px'}}>
      <ICard url={image} roll="34366" name="priya" branch="CSE" college="ABES Engineering College"/>
      <ICard url={image} roll="35366" name="priya" branch="CSE" college="ABES Engineering College"/>
      <ICard url={image} roll="35366" name="priya" branch="CSE" college="ABES Engineering College"/>
      <ICard url={image} roll="35366" name="priya" branch="CSE" college="ABES Engineering College"/>
    </div>
  )
}

export default ICardGallery;
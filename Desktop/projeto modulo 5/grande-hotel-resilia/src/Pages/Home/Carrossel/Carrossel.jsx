import React, {useState} from 'react'
import './Carrossel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import {imagem} from '../../../Helpers/CarrosselData'

function Carrossel() {
  const [currImg, setCurrImg] = useState(0)


  return (
   <div className='carrossel'>
     <div className='carrosselInner' 
     style={{backgroundImage: `url(${imagem[currImg].img})`}}>
       <div className='left' onClick={ () => {
        currImg > 0 && setCurrImg(currImg - 1)
       }}>
         <ArrowBackIosIcon style={{fontSize: 30 }}/>
       </div>
       <div className='center'>
         <p className='subTxtCarrossel'>{imagem[currImg].subtitle}</p>
       </div>
       <div className='right' onClick={ () => {
        currImg < imagem.length -1 && setCurrImg(currImg + 1)
       }}>
       <ArrowForwardIosIcon  style={{fontSize: 30 }}/>
       </div>
   </div>
   </div>
  )
}

export default Carrossel
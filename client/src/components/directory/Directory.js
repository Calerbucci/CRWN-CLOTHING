import React from 'react'
import Menu from '../menu-item/Menu';
import './Directory.scss'
import {connect} from 'react-redux';
import {selectSections} from '../../redux/directory/directory-selector'


const Directory = ({sections}) =>{
        return (
            <div className='directory-menu'>
            {
                sections.map(({title, imageUrl, id, size, linkUrl}) => ( <Menu key ={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>))
                
            }
            
            </div>
        )
  
}

const mapStateToProps = (state) => ({
    sections: selectSections(state)
})

export default connect(mapStateToProps) (Directory)

import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ContainerAbout,Content,WhoAmI,ImageApresentation1,ContainerImg,ImageApresentation2,ButtonContact} from './styled.js'
import img1 from '../../assets/react1.jpg'
import img2 from '../../assets/react03.jpg'




const AboutContent = () => {
    const navigate = useNavigate()

    const HandleProjects = () =>{
        navigate('/projects')
    }

    const HandleContact = () =>{
        navigate('/contact')
    }


  return (

    <ContainerAbout>

        <Content>

                <WhoAmI>
                    <h1>Who AM I</h1>
                    <p>Im a react front-end developer. I creat responsive secure websites
                        for my clients.
                    </p>
                    <ButtonContact onClick={HandleContact}>CONTACT</ButtonContact>
                </WhoAmI>

                <ContainerImg>
                    <ImageApresentation1 src={img1} alt='img01' onClick={HandleProjects}/>
                    <ImageApresentation2 src={img2} alt img02/>
                </ContainerImg>


        </Content>




    </ContainerAbout>
  )
}

export default AboutContent
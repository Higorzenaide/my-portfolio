import React from 'react'
import { useNavigate } from 'react-router-dom'
import {CardContent, Button } from './styled.js'


const Card = ({
        icon: Icon,
        title,
        price,
        features,
        buttonText,
        buttonIcon: ButtonIcon
    }) => {

    const navigate = useNavigate();

    const goPageContactMe = () => {
        navigate('/contact')
    }

    return (
        <CardContent>

            <Icon size={30} />
            <span className='TipePlan'>{title}</span>
            <h2>R$ <span>{price}</span> / Mo</h2>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>
                        {feature.label} <span>{feature.value}</span>
                    </li>
                ))}
            </ul>
            <Button type='Button' onClick={goPageContactMe}>
                {buttonText} {ButtonIcon && <ButtonIcon size={20} />}
            </Button>

        </CardContent>
    )
}

export default Card
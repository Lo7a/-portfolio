import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
    return <header>
        <div>
            {/* Social Icons */}
            <SocialIcon url="https://www.facebook.com/LahavKlugman7" 
            fgColor="gray" 
            bgColor="transparent"
            />
            <SocialIcon url="https://github.com/Lo7a"/>
            <SocialIcon url="https://www.linkedin.com/in/lahav-klugman"/>

        </div>
        </header>
}
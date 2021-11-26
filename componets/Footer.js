import Github from '../icons/github'
import Linkedin from '../icons/linkedin'
import FreeCodeCamp from '../icons/freecodecamp'
import Twitter from '../icons/twitter'
import CodePen from '../icons/codepen'
import Mail from '../icons/mail'
import Whatsapp from '../icons/whatsapp'

import { Name } from '../data/hero'

import { Contacts } from '../data/contacts'

import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                {Name}
            </div>
            <div>
                {Contacts.map((contact) => 
                    <a key={contact.name} href={contact.link} target="_blank">
                        {contact.icon}
                    </a>
                )}
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';

import classes from './Footer.css'


 
const footer = (props) => { 

    const navListNames = [ 'О нас', 
                 'Справочный центр',   
                 'Условия предоставления услуг',
                 'Политика конфиденциальности ',
                 'Политика в отношении файлов cookie',
                 'Информация о рекламе',
                 'Блог',
                 'Статус',
                 'Работа',
                 'Ресурсы бренда',
                 'Реклама',
                 'Маркетинг',
                 'Твиттер для бизнеса',
                 'Разработчикам',
                 'Каталог',
                 'Настройки',
                ] 

    const navList = navListNames.map((name) => {
        return (
            <li className={classes.NavItem} key={name}>
                <a className={classes.NavLink} href="/">
                    {name}
                </a>
            </li>
        )
    })

    return (
        <div className={classes.Footer}> 
            <ul className={classes.NavList}>
               {navList}
            </ul>
        </div>
    )
}
 
export default footer
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.sass'

const Header = () => {
    const [menu, setMenu] = useState(true)

    const menuCloseHandler = () => {
        setMenu(!menu)
    }
    const menuOpenHandler = () => {
        setMenu(!menu)
    }

    return (
        <header className={styles.header}>
            <AnimatePresence>
                {menu ? (
                    <motion.div
                        className={`${styles.header__menu}`}
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span onClick={menuOpenHandler}>Menu</span>
                    </motion.div>
                ) : (
                    <motion.nav
                        className={`${styles.header__navigation}`}
                        initial={{ y: -500 }}
                        animate={{ y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ul>
                            <li><a href="#">Collections</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <motion.li
                                onClick={menuCloseHandler}
                                whileHover={{ rotate: 180 }}
                            >
                                <a href="#">&times;</a>
                            </motion.li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header

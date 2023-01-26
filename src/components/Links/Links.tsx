import styles from "./Links.module.scss";
import { ReactNode, useState } from "react";
import Menu from '../../atoms/Menu/Menu';

export default function Links() {
    const [ isOpen, setIsOpen ] = useState(false);
    const setOpen = () => {
        setIsOpen(true);
    }

    return (
        <div className={ styles.container } onClick={ setOpen }>
            <i className="ri-links-fill"></i>
            <Menu isOpen={ isOpen } positionValues={ {top: "50px", left: "0px"} }>
                Menu Here
            </Menu>
        </div>
    );
}
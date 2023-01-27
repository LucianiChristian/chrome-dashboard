import styles from "./Links.module.scss";
import { ReactNode, useEffect, useRef, useState } from "react";
import Menu from '../../atoms/Menu/Menu';

export default function Links() {
    const [ isOpen, setIsOpen ] = useState(false);
    const closeModal = () => setIsOpen(false);
    const toggleModal = () => setIsOpen(prevIsOpen => !prevIsOpen);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.addEventListener("mousedown", (e) => {
            // type guard
            if(dropdownRef.current != null) {
                if(!dropdownRef.current.contains(e.target as Node)) {
                    closeModal();
                }  
            } 
        })
    }, []);


    return (
        <div ref={ dropdownRef } className={ styles.container } >
            <div className={ styles.iconContainer } onClick={ toggleModal }>
                <i className="ri-links-fill"></i>
            </div>
            <Menu isOpen={ isOpen } positionValues={ {top: "50px", left: "0px"} }>
                Menu Here
            </Menu>
        </div>
    );
}
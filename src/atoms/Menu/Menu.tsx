import styles from "./Menu.module.scss";
import { ReactNode } from "react";

interface MenuProps {
    children: ReactNode;
    isOpen: boolean;
    positionValues?: {
        top?: string | number,
        right?: string | number,
        bottom?: string | number,
        left?: string | number,
    };
}

export default function Menu({children, isOpen = false, positionValues}: MenuProps) {
    if(!isOpen) return null;

    return (
        <div className={ styles.menuContainer } style={ positionValues }>
            { children }    
        </div>
    )
}
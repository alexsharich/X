import s from './Header.module.scss';
import { LangSwitcher } from '../langSwitcher/LangSwitcher';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerLogo}>
                <h1>MY LOGO</h1>
            </div>
            <div className={s.langSwitcher}>
                <LangSwitcher />
            </div>
        </div>
    );
};

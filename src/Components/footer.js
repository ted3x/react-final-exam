import React,{ Fragment } from 'react';
import './footer.css';

const Footer = () => {
    return <Fragment>
    <div class="footer-basic">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/">Main Page</a></li>
                <li class="list-inline-item"><a href="/characters">Characters</a></li>
                <li class="list-inline-item"><a href="/sign-up">Sign Up</a></li>
                <li class="list-inline-item"><a href="/about">About Me</a></li>
            </ul>
            <p class="copyright">&copy; 2020 Tedo Manvelidze</p>
        </footer>
    </div>
    </Fragment>
}
export default Footer;
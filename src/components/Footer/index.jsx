import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='social'>
                <a href='facebook.com'><img src='../images/fb.png' alt='facebook' /></a>
                <a href='twitter.com'><img src='../images/tw.png' alt='twittee' /></a>
                <a href='instagram.com'><img src='../images/ig.png' alt='instagram' /></a>
            </div>
            <img src="../images/logo.png" alt="logo organo" className='logo_footer'/>
            <h2>Desenvolvido por Alura</h2>
        </footer>
    )
}
//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeaderUS").innerHTML = `
<header align="left">
        <a href="index.html"><img src="./img/LogoDesign2.png" alt="sincerelyeriss" /></a> 

        <div id="nav" align="right">
            <a href="index.html">HOME</a> |
            <a href="portfolio.html">PORTFOLIO</a> |
            <a href="about.html">ABOUT</a> |
            <a href="archive.html">UNSUNG STARS</a> |
            <a href="characters.html">CHARACTERS</a>
        </div>
    </header>
`;


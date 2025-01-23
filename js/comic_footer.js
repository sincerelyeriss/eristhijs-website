//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p>Eris Thijs</p>
        <p>sincerelyeriss@gmail.com</p>
<a href="https://www.instagram.com/sincerelyeriss/"><img src="img/instalogo.png" height="40" /></a>
<a href="https://www.tiktok.com/@sincerelyeriss"><img src="img/tiktoklogo.png" height="40" /></a>
<a href="https://www.youtube.com/@sincerelyeriss"><img src="img/ytlogo.png" height="40" /></a>
        <p>Powered by</p>
        <a href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "30" /></a>
    </footer>
`;



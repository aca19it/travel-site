import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
//alert("No need to run dev everytime we have watch:True")

let mobileMenu = new MobileMenu();
if (module.hot) {
    module.hot.accept()
}
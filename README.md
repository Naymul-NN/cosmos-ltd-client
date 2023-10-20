LIVE LINK...
.[cosmos shop](https://backend-auth-5c27b.web.app/)

. Create server : at first i create server site for store my all data , beause this website is totally dynamic . every 
  single data come from server site . for this website server is too important . so i make the server site first .

. select img: Seclect the proper image is to deficult for this website , beacuse i have no image collection before. 
  every single image i collect from google then i use imgbb to create link then i use it on my project. to seclect the 
  right image is killing my too much time.

. Add cart: create a add cart buttton in my product then post it to the mongodb . then get it on local server then fetch it in My cart route. to show the post data is not deficult but when you want to cart a product that is already carted , then my server is crashed . then i fatch all cart post and i use find oparation when in cart a product , if product is not carted then it add to cart , if it already  carted then it show you a toast .

. Mongodb : this is my first time to use mongodb as a database . i create a database then add user then i create collection . then i use the data in my project.

. Authentication : i add here firebase as a authentication and authorization , a user should be login to use our add product route and also mycart, if you are not login in your website then when you want to see the product details you are redirected to the login page .






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

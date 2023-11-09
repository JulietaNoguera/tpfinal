# Implementacion de las carpetas
/Modelo     // Capa de Modelo (Model)
  - product.js
  - user.js

/Vistas         // Capa de Vista (View)
  /globales      // Carpeta para diseños globales
    - nav.js
    - footer.js
  /productos     // Carpeta para vistas relacionadas con productos
    - productDetails.js
    - productList.js
  /usuarios       // Carpeta para vistas relacionadas con usuarios
    - userProfile.js
  - home.js      // Otras vistas globales

/Controlaro    // Capa de Controlador (Controller)
  - productController.js
  - userController.js
  - homeController.js

/rutas        // Configuración de rutas
  - routes.js

app.js           // Archivo principal de la aplicación

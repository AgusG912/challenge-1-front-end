# Proyecto Challenge: Desarrollo de un Front-End Dinámico Integrado con APIs 🚀

Este proyecto es un challenge centrado en la construcción de un front-end funcional conectado a una API backend, que a su vez se integra con una API externa llamada Marketplace-API.

La estructura del proyecto está organizada en distintas rutas, lo que permite una navegación modular y escalable. Para la gestión del estado global, se implementó Zustand con las DevTools activas, con un enfoque basado en reducers y selectors, lo que facilita un manejo eficiente de los datos.
En términos de seguridad y accesibilidad, el sistema cuenta con guards para autenticación, control de rutas y persistencia de sesión. Al igual que en proyectos anteriores, el enfoque se mantiene dinámico, lo que permite ajustes rápidos en procesos como autenticación o modificaciones en la estructura general del sistema.

Cada módulo está diseñado con su respectivo tipado y control de rutas, garantizando consistencia y escalabilidad. Para las solicitudes al backend, se usa Axios, aprovechando los interceptores para modificar los headers de las peticiones. Además, se configura una variable de entorno que establece la base de las URLs de nuestras solicitudes, facilitando la gestión de entornos y la seguridad de las conexiones.

## 🛠 Características principales
- ✅ `UI con Ant Design` → Componentes avanzados y personalizables.
- ✅ `Gestión de estado con Zustand` → Enfoque basado en reducers/selectors.
- ✅ `Enrutamiento con React Router` → Navegación entre múltiples vistas.
- ✅ `Validaciones con Zod` → Validación de datos para mayor seguridad.
- ✅ `Tailwind CSS para estilos` → Diseño rápido y flexible.
- ✅ `Interacción con APIs con Axios` → Configuración de interceptores y headers personalizados.
- ✅ `Autenticación y control de rutas` → Guards de seguridad y persistencia de sesión.
- ✅ `Configuración con Vite` → Entorno de desarrollo rápido y eficiente.


## 🏗 Librerías utilizadas
### 📌 Dependencias principales
- `React 19` → Framework para la UI.
- `Ant Design` → Componentes de diseño avanzados.
- `Axios` → Manejo de peticiones HTTP.
- `Zustand` → Gestión de estado con DevTools activas.
- `React Router Dom` → Enrutamiento dinámico.
- `Tailwind CSS` → Estilos rápidos y responsivos.
- `Zod` → Validaciones de datos.
- `React Hook Form` → Gestión eficiente de formularios.
### 🛠 Dependencias de desarrollo
- `TypeScript` → Tipado estático.
- `ESLint` → Linter para código limpio y estructurado.
- `Vite` → Entorno de desarrollo optimizado.


## ⚡ Cómo ejecutar el proyecto

- Descarga el repositorio.
  ```
    git clone <repo-url>
    cd ecommerce-frontend
  ```
- Instalar las dependencias.
  ```
    npm install
  ```
- Renombra el archivo `.env.template` a `.env` y ajusta las variables
  ```
    VITE_API_URL=[Base_URL]         // ejemplo: 'http://localhost:5173'
  ```
- Ejecutar el proyecto en desarollo.
  ```
    npm run dev
  ```

## 📁 Estructura de archivos

```
  - Tree files
  │
  ├───public
  │       vite.svg
  │
  └───src
      │   App.tsx
      │   index.css
      │   main.tsx
      │   types.d.ts
      │
      ├───Api
      │       productsApi.ts
      │
      ├───Components
      │   ├───Forms
      │   │   └───Input
      │   │           InputCustomAntd.tsx
      │   │           InputCustomAntdTypes.ts
      │   │
      │   ├───Loaders
      │   │       LoadingSpin.tsx
      │   │
      │   └───Table
      │           EditableTable.tsx
      │           EditableTableActions.tsx
      │           EditableTableCell.tsx
      │           EditableTableGenerateColumns.ts
      │           EditableTableHelpers.tsx
      │           EditableTableStyles.css
      │           EditableTableTypes.ts
      │           EditableTableWithContext.tsx
      │           EditableTableWithContextCell.tsx
      │
      ├───Context
      │       TableContext.tsx
      │       TableContextProvider.tsx
      │
      ├───Guards
      │       AuthGuards.tsx
      │       RoleUserGuards.tsx
      │
      ├───Helpers
      │       getEnvVariables.ts
      │
      ├───Layout
      │       MainLayout.tsx
      │
      ├───mock
      │       products.data.ts
      │       sales.data.ts
      │
      ├───Models
      │       roles.models.ts
      │       routes.model.ts
      │
      ├───Pages
      │   ├───Auth
      │   │   │   AuthLayout.tsx
      │   │   │
      │   │   ├───components
      │   │   │   ├───auth
      │   │   │   │       FormFooterButton.tsx
      │   │   │   │       FormLogin.tsx
      │   │   │   │       FormRegister.tsx
      │   │   │   │
      │   │   │   └───general
      │   │   │           HeaderTitle.tsx
      │   │   │
      │   │   └───views
      │   │           Login.tsx
      │   │           Register.tsx
      │   │
      │   └───Private
      │       │   PrivateLayout.tsx
      │       │
      │       ├───Components
      │       │       LogoutButton.tsx
      │       │       RouteMenuButton.css
      │       │       RouteMenuButton.tsx
      │       │
      │       ├───Layout
      │       │       Navbar.tsx
      │       │       Sidebar.tsx
      │       │
      │       └───views
      │               History.tsx
      │               Home.tsx
      │               Products.tsx
      │               Sales.tsx
      │               UpdateProduct.tsx
      │               Users.tsx
      │
      ├───Router
      │   │   AppRouter.tsx
      │   │   PrivateRouter.tsx
      │   │   PublicRouter.tsx
      │   │
      │   └───Views
      │           NotFoundPage.tsx
      │           RoutesWithNotFound.tsx
      │
      ├───Schemas
      │   ├───Forms
      │   │   └───Auth
      │   │           login.schema.ts
      │   │           register.schema.ts
      │   │
      │   ├───Home
      │   │       motivationalMessages.ts
      │   │
      │   ├───MenuOptions
      │   │       MenuOptions.schema.ts
      │   │
      │   └───Tables
      │           tableColumnConfig.schema.ts
      │
      ├───Store
      │   │   store.ts
      │   │
      │   ├───Actions
      │   │       useAuthStoreActions.ts
      │   │       useDataStoreActions.ts
      │   │       useUiStoreActions.ts
      │   │
      │   └───types
      │           authStore.ts
      │           syncDb.ts
      │           uiStore.ts
      │
      └───Theme
              ThemeProvide.tsx


```


## Observaciones personales 📚

El front-end incorpora diversas funcionalidades, destacando el uso de ANTD como librería de componentes. Aunque ANTD es una herramienta extremadamente potente, requiere una inversión de tiempo significativa para aprovechar al máximo sus capacidades. En un intento por mejorar la experiencia visual, exploré la integración de Tailwind CSS con ANTD, aunque no resultó ser la mejor combinación posible.

Este proyecto me ayudó muchísimo a mejorar mi comprensión sobre el manejo de estados y cómo trabajar con Zustand dentro de un enfoque de inmutabilidad, combinándolo con los reducers. Me di cuenta de que es mucho más controlado y estructurado, y aunque algunos puedan preferir otros métodos, para mí, fue una manera bastante intuitiva de trabajarlo. Quizá suene un poco tradicionalista, pero me sentí cómodo con este enfoque.

Ahora bien, sé que los slices habrían sido una mejor alternativa, sobre todo en cuanto a la nomenclatura de variables y su usabilidad, pero por cuestiones de tiempo lo dejé así. ANTD fue todo un reto: algunas cosas me sorprendieron para bien, otras fueron dolores de cabeza por su forma de hacer las cosas. Pero, siendo honestos, es interesante, tiene muchas opciones poderosas, aunque definitivamente hay que dedicarle bastante tiempo para entenderlo bien.
En general, ha sido una experiencia de aprendizaje brutal, y aunque algunas decisiones fueron más por cuestión de tiempo que por preferencia, el proyecto sigue siendo bastante dinámico y adaptable. Seguro que hay muchas cosas que mejorar en futuras versiones, pero de momento, me llevo un montón de aprendizajes.

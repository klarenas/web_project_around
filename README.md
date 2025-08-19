# Around The U.S.

## Descripción
Around The U.S. es una aplicación web interactiva que permite a los usuarios compartir y explorar lugares emblemáticos de Estados Unidos. Los usuarios pueden editar su perfil, ver diferentes lugares turísticos y dar 'me gusta' a las tarjetas de los lugares que más les gusten.

## Características
- **Perfil de Usuario**: Edición de nombre y descripción del perfil
- **Galería de Lugares**: Visualización de tarjetas con imágenes y nombres de lugares turísticos
- **Interacción Avanzada**:
  - Sistema de 'me gusta' en las tarjetas
  - Eliminación de tarjetas
  - Visualización de imágenes en ventana emergente
  - Creación de nuevas tarjetas mediante formulario
- **Validación de Formularios**:
  - Validación en tiempo real de campos
  - Mensajes de error personalizados
  - Control de estado de botones de envío
  - Restricciones de longitud y formato
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (desktop, tablet y móvil)
- **Ventanas Emergentes**:
  - Popup de edición de perfil
  - Popup para agregar nuevas tarjetas
  - Popup para visualización de imágenes a tamaño completo

## Tecnologías Utilizadas
- HTML5
- CSS3 (con metodología BEM)
- JavaScript ES6+ (Clases, Módulos, Herencia)
- Programación Orientada a Objetos (OOP)
- Diseño Responsivo
- Grid y Flexbox
- Media Queries

### Estructura de Archivos

#### CSS (Metodología BEM)
```
blocks/
├── card.css
├── content.css
├── footer.css
├── header.css
├── page.css
├── places.css
├── popup.css
└── profile.css
```

#### JavaScript (Arquitectura Orientada a Objetos)
```
scripts/
├── Card.js              # Clase para manejo de tarjetas
├── FormValidator.js     # Clase para validación de formularios
├── Popup.js             # Clase base para ventanas emergentes
├── PopupWithImage.js    # Clase para popups con imágenes
├── PopupWithForm.js     # Clase para popups con formularios
├── Section.js           # Clase para renderizado de contenedores
├── UserInfo.js          # Clase para información del usuario
└── index.js             # Archivo principal de inicialización
```

## Arquitectura JavaScript (Orientada a Objetos)

### Clases Principales

#### 1. **Card.js** - Gestión de Tarjetas
- **Constructor**: Recibe datos de la tarjeta, selector de template y callback para manejo de clicks
- **Métodos**:
  - `generateCard()`: Crea el elemento DOM de la tarjeta
  - `_handleImageClick()`: Maneja el click en la imagen usando callback
  - `_handleLikeClick()`: Alterna el estado de "me gusta"
  - `_handleDeleteClick()`: Elimina la tarjeta del DOM

#### 2. **Popup.js** - Clase Base para Ventanas Emergentes
- **Constructor**: Recibe el selector del popup
- **Métodos**:
  - `open()`: Abre el popup y agrega listener para tecla Escape
  - `close()`: Cierra el popup y remueve listeners
  - `setEventListeners()`: Configura listeners para cerrar (botón X y overlay)

#### 3. **PopupWithImage.js** - Popups con Imágenes
- **Hereda de**: `Popup.js`
- **Funcionalidades**:
  - Manejo especializado para mostrar imágenes
  - Espera a que la imagen cargue antes de mostrar el popup
  - Manejo de errores de carga de imagen
  - Configuración automática de imagen y caption

#### 4. **PopupWithForm.js** - Popups con Formularios
- **Hereda de**: `Popup.js`
- **Constructor**: Recibe selector del popup y callback para envío del formulario
- **Métodos**:
  - `_getInputValues()`: Recopila datos de todos los campos de entrada
  - `setEventListeners()`: Agrega listener de submit al formulario
  - `close()`: Cierra el popup y reinicia el formulario automáticamente

#### 5. **UserInfo.js** - Información del Usuario
- **Constructor**: Recibe selectores para nombre y trabajo del usuario
- **Métodos**:
  - `getUserInfo()`: Retorna objeto con información actual del usuario
  - `setUserInfo()`: Actualiza la información del usuario en la página

#### 6. **Section.js** - Renderizado de Contenedores
- **Constructor**: Recibe array de elementos, función renderer y selector del contenedor
- **Métodos**:
  - `renderItems()`: Renderiza todos los elementos usando la función renderer
  - `addItem()`: Agrega un elemento al final del contenedor
  - `prependItem()`: Agrega un elemento al inicio del contenedor
  - `clear()`: Limpia el contenedor

#### 7. **FormValidator.js** - Validación de Formularios
- **Funcionalidades**:
  - Validación en tiempo real de campos
  - Mensajes de error personalizados
  - Control de estado de botones de envío
  - Restricciones de longitud y formato

### Principios de Arquitectura Aplicados

1. **Responsabilidad Única**: Cada clase tiene una tarea específica
2. **Encapsulación**: Toda la lógica relacionada está dentro de su respectiva clase
3. **Acoplamiento Débil**: Las clases se comunican mediante callbacks e interfaces
4. **Separación de Archivos**: Cada clase está en su propio archivo
5. **index.js Limpio**: Solo contiene instanciación de clases y event listeners básicos

## Uso
1. El usuario puede editar su perfil haciendo clic en el botón de edición
2. Las tarjetas de lugares se muestran en una cuadrícula responsive
3. Cada tarjeta ofrece múltiples interacciones:
   - Botón de 'me gusta' para marcar favoritos
   - Botón de eliminar para remover la tarjeta
   - Clic en la imagen para ver en tamaño completo
4. El botón '+' permite agregar nuevas tarjetas a la galería

## Diseño Responsive
- **Desktop**: ≥ 880px
  - Diseño amplio con márgenes generosos
  - Botones y controles de tamaño completo
- **Tablet**: 614px - 768px
  - Adaptación de la cuadrícula de tarjetas
  - Ajuste proporcional de espaciados
- **Mobile**: ≤ 320px
  - Diseño optimizado para pantallas pequeñas
  - Ventanas emergentes adaptadas al tamaño de pantalla
  - Controles redimensionados para mejor usabilidad táctil

## Autor
Karina Gonzalez Larenas
- GitHub: [klarenas](https://github.com/klarenas)

## Notas Adicionales
- El proyecto utiliza la metodología BEM para la estructura CSS
- Implementa una arquitectura orientada a objetos completamente refactorizada
- Sigue las mejores prácticas de JavaScript ES6+ con clases y módulos
- Código modular, escalable y mantenible
- Acoplamiento débil entre componentes para máxima flexibilidad
- Cada clase tiene responsabilidad única y está completamente encapsulada

## Enlace al Proyecto
[Around The U.S.](https://klarenas.github.io/web_project_around/)

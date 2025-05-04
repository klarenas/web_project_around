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
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (desktop, tablet y móvil)
- **Ventanas Emergentes**:
  - Popup de edición de perfil
  - Popup para agregar nuevas tarjetas
  - Popup para visualización de imágenes a tamaño completo

## Tecnologías Utilizadas
- HTML5
- CSS3 (con metodología BEM)
- JavaScript
- Diseño Responsivo
- Grid y Flexbox
- Media Queries

### Estructura de Archivos
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

## Funcionalidades JavaScript
1. **Gestión del DOM**:
   - Selección y manipulación de elementos
   - Event listeners para interacciones de usuario

2. **Funciones Principales**:
   - `openPopup()`: Sistema unificado para abrir ventanas emergentes
   - `closePopup()`: Sistema unificado para cerrar ventanas emergentes
   - `handleProfileFormSubmit()`: Maneja la actualización del perfil
   - `handleNewCardFormSubmit()`: Maneja la creación de nuevas tarjetas
   - `createCard()`: Crea tarjetas interactivas con funcionalidades de me gusta, eliminación y vista previa
   - `renderCards()`: Renderiza las tarjetas iniciales en la galería

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
- **Tablet**: 619px - 879px
  - Adaptación de la cuadrícula de tarjetas
  - Ajuste proporcional de espaciados
- **Mobile**: ≤ 425px
  - Diseño optimizado para pantallas pequeñas
  - Ventanas emergentes adaptadas al tamaño de pantalla
  - Controles redimensionados para mejor usabilidad táctil

## Autor
Karina Gonzalez Larenas
- GitHub: [klarenas](https://github.com/klarenas)

## Notas Adicionales
- El proyecto utiliza la metodología BEM para la estructura CSS
- Implementa un diseño modular y escalable
- Sigue las mejores prácticas de JavaScript para la manipulación del DOM

## Enlace al Proyecto
[Around The U.S.](https://klarenas.github.io/web_project_around/)

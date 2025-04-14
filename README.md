# Around The U.S.

## Descripción
Around The U.S. es una aplicación web interactiva que permite a los usuarios compartir y explorar lugares emblemáticos de Estados Unidos. Los usuarios pueden editar su perfil, ver diferentes lugares turísticos y dar 'me gusta' a las tarjetas de los lugares que más les gusten.

## Características
- **Perfil de Usuario**: Edición de nombre y descripción del perfil
- **Galería de Lugares**: Visualización de tarjetas con imágenes y nombres de lugares turísticos
- **Interacción**: Sistema de 'me gusta' en las tarjetas
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (desktop y móvil)

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
   - `openPopup()`: Abre el formulario de edición del perfil
   - `closePopup()`: Cierra el formulario
   - `handleProfileFormSubmit()`: Maneja la actualización del perfil
   - `createCard()`: Crea tarjetas de lugares dinámicamente
   - `renderCards()`: Renderiza todas las tarjetas iniciales

## Uso
1. El usuario puede editar su perfil haciendo clic en el botón de edición
2. Las tarjetas de lugares se muestran en una cuadrícula responsive
3. Cada tarjeta tiene un botón de 'me gusta' interactivo

## Diseño Responsive
- **Desktop**: ≥ 880px
- **Tablet**: 619px - 879px
- **Mobile**: ≤ 425px

## Autor
Karina Gonzalez Larenas
- GitHub: [klarenas](https://github.com/klarenas)

## Notas Adicionales
- El proyecto utiliza la metodología BEM para la estructura CSS
- Implementa un diseño modular y escalable
- Sigue las mejores prácticas de JavaScript para la manipulación del DOM

## Enlace al Proyecto
[Around The U.S.](https://klarenas.github.io/web_project_around/)

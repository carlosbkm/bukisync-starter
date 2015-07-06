# Bukisync

Proyecto de prueba para probar la integración de meteor con Polymer 1.0.

Basado en el proyecto [meteor-elements](https://github.com/atoy40/meteor-elements).

## Instrucciones

```
git clone https://github.com/carlosbkm/bukisync-starter.git
cd bukisync-starter
meteor run
```
Abrir en el navegador http://localhost:3000

Las dependencias de Bower se instalan automáticamente mediante el paquete mquandalle:bower y los imports html (con vulcanization si es necesario) mediante differential:vulcanize

## Informations

En este proyecto se usa Polymer exclusivamente para la Vista, reemplazando las templates de Blaze que usa Meteor por defecto.

Aún en fase inicial y como prueba de concepto, hay que resolver el enrutamiento (posiblemente mediante el uso de Page.js) y el uso de Polymer themes para aplicar estilos al tema.

-- AVISO ---

Esto es tan sólo un proyecto sandbox, inacabado y no usable para entornos de producción.

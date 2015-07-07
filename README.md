# Bukisync

Proyecto de prueba para probar la integración de Meteor con Polymer 1.0 y comunicación con .NET mediante DDP websockets.

Basado en los proyectos:
 [meteor-elements](https://github.com/atoy40/meteor-elements).
 [meteor-polymer-music](https://github.com/atoy40/meteor-polymer-music).
 [polymer-starter-kit](https://github.com/polymerelements/polymer-starter-kit).

## Instrucciones

```
git clone https://github.com/carlosbkm/bukisync-starter.git
cd bukisync-starter
meteor run
```
Abrir en el navegador http://localhost:3000

Las dependencias de Bower se instalan automáticamente mediante el paquete mquandalle:bower y los imports html (con vulcanization si es necesario) mediante differential:vulcanize

## Información

En este proyecto se usa Polymer exclusivamente para la vista, reemplazando las templates de Blaze que usa Meteor por defecto.

El enrutamiento se hace mediante Page.js.

Aún en fase inicial y como sandbox, hay que resolver aspectos como el uso de Polymer themes para aplicar estilos a la vista.

-- AVISO ---

Esto es tan sólo un proyecto sandbox, inacabado y no usable para entornos de producción.

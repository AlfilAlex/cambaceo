# Cambaceo: Documentación y Guía de Uso

## Descripción

Cambaceo es un módulo de Node.js para establecer parámetros desde una base de datos. Obtiene los parámetros especificados de una base de datos configurada y los configura en `process.env` de Node.js.

## Configuración

Debes tener establecidas las siguientes variables de entorno:

-   `DB_USER`: Usuario de la base de datos.
-   `DB_PWD`: Contraseña de la base de datos.
-   `DB_SERVER`: Servidor de la base de datos.
-   `DB_DATABASE`: Nombre de la base de datos.
-   `PORT`: Puerto para conectar a la base de datos. Por defecto es `1433`.
-   `CONFIGURATIONTABLE`: Tabla donde se almacenan los parámetros.

## Uso

```typescript
import { Cambaceo } from './Cambaceo';

// Crea una instancia
const cambaceo = new Cambaceo();

// Especifica los parámetros a obtener
const parametros = ['PARAM1', 'PARAM2', 'PARAM3'];

// Obtiene y configura los parámetros
await cambaceo.setParametters(parametros);

// Cierra la conexión cuando termines
await cambaceo.closeConnection();
```

## Clases

### Cambaceo

Es la clase principal. Contiene dos métodos públicos:

-   `setParametters(values: String[])`: Obtiene los parámetros de la base de datos y los establece en `process.env`.
-   `closeConnection()`: Cierra la conexión con la base de datos.

### DbConnection

Es una clase auxiliar para conectarse y desconectarse de la base de datos.

### ParamGetter

Obtiene los parámetros de la base de datos.

### ParamSetter

Establece los parámetros en `process.env`.

## Nota

Se recomienda manejar errores durante el uso de Cambaceo para tratar con posibles problemas de conexión o ejecución de consultas.

# Blog 
## Instalación

- version de  [Node.js](https://nodejs.org/) 16.16.0
- version de  [React](https://es.react.dev/) 18.2.20


### Instalación de dependencias
```sh
yarn or npm i  
```
### Levantamiento del blog

```sh
yarn start or npm run start
```

### variables de entorno
| Nombre                     | Valor                 | Descripcción                                                                  |
| -------------------------- | --------------------- | ----------------------------------------------------------------------------- |
| REACT_APP_MAIN_BACKEND_URL | http://localhost:3008 | Url a donde se realizaran las peticiones para el funcionamiento del front end |

## Endpoints utilizados

| Endpoint | Metodo | Descripcción                                                   |
| -------- | ------ | -------------------------------------------------------------- |
| /blogs   | GET    | End point utilizado para obtener la lista de los post del blog |
| /blogs   | POST   | End point utilizado para crear un nuevo post                   |
| /blogs   | PUT    | End point utilizado para actializar el post seleccionado       |
| /blogs   | DELETE | End point utilizado para eliminar un post                      |

## URLS
- Lista de los post creados: [Home](http://blog-exam.s3-website-us-east-1.amazonaws.com/) 
- Detalle de algun post seleccionado: [post](http://blog-exam.s3-website-us-east-1.amazonaws.com/post/1)
 - Administracion de los post: [createPost](http://blog-exam.s3-website-us-east-1.amazonaws.com/createPost)



> [!Precaución]
> Crear previamente la base de datos y tablas utilizadas en el  [proyecto de back end](https://es.react.dev/), para su correcto funcionamiento
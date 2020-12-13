
#TO RUN THE SERVER EXECUTE:

yarn run dev

#Dependencies
body-parser //para convertir peticiones en formato json
express     //framework para crear la api
cors        //para permitir ejecutar peticiones desde cualquier dispositivo
mongoose    //para manejar la base de datos mongodb
dotenv  //depencia usada para usar variables de entornes (puerto, conexion mysql, etc).
Joi   //para validar las parametros de entrada de las peticiones
jsonwebtoken //implementado para seguridad de los datos
bcrypt  //para cifrar la contraseña

#Dev dependencies
@types/express
@types/mongoose
@types/node
@types/cors
@types/jsonwebtoken     //para usar jsonwebtoken y typescript
nodemon
ts-node
typescript
@typescript-eslint/eslint-plugin        //desde aqui:
@typescript-eslint/parser
eslint
eslint-config-prettier
eslint-plugin-no-loops
eslint-plugin-prettier
eslint-plugin-security
eslint-plugin-unicorn
prettier                                //hasta aqui tiene que ver con buen formato de escritura javascript

<!-- Estructura de archivos de la api -->
<!-- # CLEAN ARCHITECTURE

    # file app.js
        En este archivo da inicio la aplicacion

    # folder loader
        Es aqui donde se cargan las librerias que se usan para la aplicacion.

    # folder -->



# esquema de database
    user:
        name
        username
        password
        role
    agenda:
        fullname
        phone
        email
            ->madeByUser
    options:
        create
        read
        update
        delete


# Help
https://developer.okta.com/blog/2018/11/15/node-express-typescript
https://medium.com/williambastidasblog/estructura-de-una-api-rest-con-nodejs-express-y-mongodb-cdd97637b18b
https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf
https://dev.to/itnext/joi-awesome-code-validation-for-node-js-and-express-35pk


# metodo para hacer una validacion con Joi api
<!-- const { error } = userValidator.create.validate(req.body);
// console.log(warning);
// console.log(error);
// console.log('\n ' + value + '\n');
const valid = error == null;
if (valid) console.log('asdas');
else {
    const details = error?.details;
    console.log(details);
    // console.log('aaa');
    // console.log(error);
    // const { details } = error;
    // const message = details.map((i: any) => i.message).join(',');
    // console.log('error: %o',message);
    // res.status(422).json({ error: message });
}
//  -->

    CREATE DATABASE IF NOT EXISTS alumnosdb;

    USE alumnosdb;
    CREATE TABLE alumnos(
        id INT (10) NOT NULL AUTO_INCREMENT,
        legajo INT (10) NOT NULL,
        dni INT (10) NOT NULL,
        apellidoYNombre VARCHAR (50) NOT NULL,
        fechaNacimiento DATE NOT NULL,
        PRIMARY KEY (id)
    );

DESCRIBE alumnos;

INSERT INTO alumnos VALUES
(1, 100, 1000, 'Maria', '1991-01-01'),
(2, 200, 2000, 'Juan', '1992-02-02'),
(3, 300, 3000, 'Camila', '1993-03-03');

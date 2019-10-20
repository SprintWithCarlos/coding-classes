CREATE DATABASE SWC_clases;
USE SWC_clases;

CREATE TABLE usuarios
(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50)
);

INSERT INTO usuarios
    (nombre, apellido)
VALUES( 'George', 'Harrison');

INSERT INTO usuarios
    ( nombre, apellido)
VALUES( 'Paul', 'McCartney'),
    ( 'Ringo', 'Starr'),
    ( 'John', 'Lennon');    

CREATE TABLE canciones
(
    id_cancion INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
INSERT INTO canciones (nombre, id_usuario) VALUES ('Yesterday', 2), ('Let It Be', 2), ('Come Together', 4);
-- SELECT canciones.nombre AS 'Nombre Canción', usuarios.nombre AS 'Nombre', usuarios.apellido AS 'Apellido' FROM canciones JOIN usuarios ON canciones.id_usuario = usuarios.id_usuario;
-- SELECT c.nombre AS 'Nombre Canción', u.nombre AS 'Nombre', u.apellido AS 'Apellido' FROM canciones c JOIN usuarios u ON c.id_usuario = u.id_usuario;
SELECT c.nombre AS 'Nombre Canción', u.nombre AS 'Nombre', u.apellido AS 'Apellido' FROM usuarios u  JOIN canciones c ON  u.id_usuario = c.id_usuario;
--LEFT JOIN
SELECT * FROM usuarios LEFT JOIN canciones ON usuarios.id_usuario=canciones.id_usuario;  
--RIGHT JOIN
SELECT * FROM usuarios RIGHT JOIN canciones ON usuarios.id_usuario=canciones.id_usuario;  
--FULL JOIN (NO es posible en MySQL)
SELECT * FROM usuarios LEFT JOIN canciones ON usuarios.id_usuario=canciones.id_usuario
UNION ALL
SELECT * FROM usuarios RIGHT JOIN canciones ON usuarios.id_usuario=canciones.id_usuario; 

ALTER TABLE usuarios ADD COLUMN instrumentos VARCHAR(50);
UPDATE usuarios SET instrumentos = 'guitarra' WHERE id_usuario = 1;
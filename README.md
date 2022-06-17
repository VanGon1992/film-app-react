# Resumen

1. Quitar todas las dependencias que no uses.
2. "Congelamos" dependencias.
3. Añadir .prettierrc y como devDependency
4. Añadir .eslintrc y como devDependency
5. Estructura del proyecto y razonamiento
    5.1 atoms: unidades más pequeñas y que más se reusan: input.
    5.2 molecules: unidades compuestas sin estado: input + label.
    5.3 organismos: unidades compuestas con estado: formulario.
    5.4 layouts: unidades compuestas con multiples organismos.
6. Evitar loose-coupling con los estilos
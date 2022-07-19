# Cotizador de automóviles
## Emmanuel Cruz Hernández

----

### Descripción

Sistema de cálculo de cotizaciones de automóviles implementado en React.

### Sobre React y Hooks

En este proyecto se incorpora el uso de los siguientes Hooks.

* `useState` que sirve para trabajar con estados de la aplicación, con valor y método setter.
* `useCallBack` para dejar variables estáticas hasta que algún objeto cambie. Cuando hay un cambio, se ejecuta una función y se actualizan los valores de una variable en el ambiente de un componente o página.
* `useContext` para generar contextos globales dentro de niveles inferiores de un componente.
* `useMemo` funciona similar a un _useCallBack_, con la diferencia que este recibe un arrow function como primer parámetro, no la función directamente. Además ayuda a optimizar el performance de la aplicación.
* `useRef` funciona igual que _useCallBack_, con la diferencia que este no recibe una función, sino que recibe directamente la variable que espera el cambio.

Para crear el contexto, se exporta también una función de React: `createContext`

### Ejecución del proyecto

    npm run dev
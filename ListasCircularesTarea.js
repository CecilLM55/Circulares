class Base {

    constructor(nombre, minutos) {
        this.minutos = minutos;
        this.nombre = nombre;
        this.sig = null;
        this.ant = null;
    }

    info() {
        return `Nombre: ${this.nombre}   Minutos: ${this.minutos}`;
    }
}

class CircularDoble {

    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {

        if (this.primero === null){
            this.primero = nuevo;
            nuevo.sig = nuevo;
            nuevo.ant = nuevo;
        } else {
            nuevo.sig = this.primero;
            nuevo.ant = this.primero.ant;
            this.primero.ant.sig = nuevo;
            this.primero.ant = nuevo;
        }
    }

    buscar(nombre) {
        let temp = this.primero;
        let res = '';

        while(temp.nombre !== this.primero.ant.nombre) {
            if(temp.nombre === nombre) {
                res = temp.info();
            }

            temp = temp.sig;
        }
        if(this.primero.ant === nombre) {
            res = this.primero.ant.info();
        }
        return res;
    }

    eliminar(nombre) {
        let temp = this.primero;
        let aux;
        if(this.primero.nombre === nombre) {
            aux = this.primero;
            this.primero.ant.sig = this.primero.sig;
            this.primero.sig.ant = this.primero.ant;
            this.primero = this.primero.sig;
            return aux;
        } else {
            while(temp.nombre !== this.primero.nombre) {
                if(temp.nombre === nombre) {
                    aux = temp;
                    temp.ant.sig = temp.sig;
                    temp.sig.ant = temp.ant;
                }
                temp = temp.sig;
            }
        }
        
        return aux;
    }

    imprimir() {
        let temp = this.primero;
        let res;

        while(temp.nombre !== this.primero.ant.nombre) {
            res += `${temp.info()} `;

            temp = temp.sig;
        }

        res += `${this.primero.ant.info()} `;
        return res;
    }

    

}


let base = new Base('UdC', 65); 
let ruta = new CircularDoble();
ruta.agregar(base); 

base = new Base('Office Depot', 30); 
ruta.agregar(base); 

base = new Base('Soriana', 20); 
ruta.agregar(base);

console.log(ruta.imprimir()); 
console.log(ruta.buscar('UdC')); 
ruta.eliminar('Soriana');  
console.log(ruta.imprimir());
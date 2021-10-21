class Ground { //Clase Ground para piso del juego
    constructor (x,y,width,height){ //El constructor recibirá 4 parámetros de Sketch
        var options = {isStatic: true} //Propiedad física para hacer estático el objeto
        this.body = Bodies.rectangle(x,y,width,height,options); //Crea un objeto tipo rectángulo con las propiedades del constructor
        this.width = width; //Propiedad para el ancho del piso
        this.height = height;   //Propiedad para el alto del piso
        World.add(world,this.body); //Agrega el objeto body al mundo
    }//Fin del constructor

display(){
    var pos = this.body.position; //Obtiene las propiedades x,y para el objeto
    rectMode(CENTER); //Coloca las coordenadas del objeto en el centro de este
    fill("yellow"); //Color del objeto
    rect(pos.x, pos.y, this.width, this.height); //Dibuja un rectángulo con las propiedades del constructor
    
    }//Fin del display()
}//Fin de la clase Ground
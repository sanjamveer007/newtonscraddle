class Roof{
constructor(){

var options ={
isStatic: true
}

this.width = 300
this.height = 10
this.body = Bodies.rectangle( 400,100,300,10,options)


}

display(){

fill("yellow")
rect(this.body.position.x, this.body.position.y,this.width,this.height)

}



}
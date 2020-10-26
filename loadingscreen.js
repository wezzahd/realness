let buttonCol1 = 0;
let buttonCol2 = 0;
let buttonCol3 = 0;

function buttonSetup() {
cambuttonX = width - 40;
cambuttonY = 20;
}

function instructionsButtons() {

  fill(buttonCol1,150);
  stroke(255);
  rectMode(CENTER);
  rect(cambuttonX, cambuttonY, 25, 25);
  fill(buttonCol2,150);
  rect(cambuttonX, 50, 25, 25);
  fill(buttonCol3,150);
  rect(cambuttonX, 80, 25, 25);

}

function buttonText(){

text1 = createP('camera');
text1.position(cambuttonX-70,0);
text1.class("didacticright");
text1.hide();

text2 = createP('full screen');
text2.position(cambuttonX-120,30);
text2.class("didacticright");
text2.hide();

text3 = createP('info');
text3.position(cambuttonX-70,60);
text3.class("didacticright");
text3.hide();


}



function loadingScreen(p) {

if (instruction_toggle == true) {
  p.push();
  p.noStroke();
  p.fill(150,150);
  p.rectMode(CENTER);
  p.rect(width/2,height/2, width, height);

  p.pop();
   }

  image(p, 0, 0);
}

function instructionsDidactic () {

  link = createA('https://www.wesleydowling.com', 'Wesley Dowling');
  link.class("didacticleft");


  text_dict = createDiv('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Scelerisque in dictum non consectetur a erat nam. Eu turpis egestas pretium aenean pharetra magna ac. Augue lacus viverra vitae congue eu consequat ac felis donec. Sit amet tellus cras adipiscing enim eu. Tincidunt arcu non sodales neque sodales ut etiam. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl.');

  text_dict.class("didactic");
  // text_dict.position(20, height/4);
  // text_dict.size(width- 20, height/2);

  if (isMobile == false){
    text_dict.size((width-width/3), height/3);
    text_dict.position(width/6,height/3);
    link.position(width/6, (height/3) -40);
  }else{
    text_dict.position(20, height/5);
    text_dict.size(width-20, height/2);
    link.position(20, height/5-20);
  //  var $scrollableElement = document.querySelector('.didactic');
  //  scrollLock.disablePageScroll($scrollableElement);
  }

  //  textResize();






}

function remove_elements(){
  text_dict.remove();
  link.remove();
//  inst_button.remove();
//  fullscr.remove();
//  inst_text.remove();
}

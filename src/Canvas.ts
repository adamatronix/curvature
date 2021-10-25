import * as P5 from 'p5';
import { bezierCurve } from './utils/bezierCurve';

class Canvas {

  container:HTMLDivElement;
  points:any;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.points = [
      { x: 50, y: 50},
      { x: 500, y: 500},
      { x: 200, y: 700}
    ]
    new P5(this.sketch);
  }

  sketch = (p5: P5) => {
    p5.setup = () => {
      const canvas = p5.createCanvas(this.container.offsetWidth, this.container.offsetHeight);
      canvas.parent(this.container);
      canvas.style('position', 'absolute');
      canvas.style('left', 0);
      canvas.style('top', 0);
      canvas.style('z-index', 1);
      p5.frameRate(10);
    }

    p5.draw = () => {
      p5.clear();
      let count = 0;
      let dots = 1000;

      while (count <= dots) {
        let curvePos = bezierCurve(count/dots, this.points[0].x, this.points[0].y, this.points[1].x, this.points[1].y, this.points[2].x, this.points[2].y)
        p5.fill(0)
        p5.circle(curvePos.x,curvePos.y,1);
        count++;
      }

    }

  }

}

export default Canvas;
import {tools} from 'yrui';
import './demo.less';

const jsxDemo={
  name:'hhhhhh',
  data(){
    return{
      name:'Hello World',
    };
  },
  render(h){
    console.log(h)
    return <div class="demo">
      <h1>{this.name}</h1>
    </div>
  }
}

export default jsxDemo;


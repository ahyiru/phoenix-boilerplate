import {tools} from 'yrui';
import './app.less';

export default{
  data(){
    return{
      name:'Hello World',
    };
  },
  render(){
    return <div class="demo">
      <h1>{{nmae}}</h1>
    </div>
  }
}


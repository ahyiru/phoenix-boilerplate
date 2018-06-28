import {tools} from 'yrui';

import HelloWorld from '../components/helloworld';

const routers=[{
  url:'/',
  component:HelloWorld,
  noFrame:true,
}];

export const app={
  routers:routers,
};
import {tools} from 'yrui';
import {sidebarMenu} from './routers';

const {$emitter}=tools;

export const getMenu=()=>{
  return sidebarMenu;
};
export const subscribeMenu=(fn)=>{
  $emitter.subscribe('updateMenu',fn);
};
export const dispatchMenu=(menu)=>{
  $emitter.dispatch('updateMenu',menu);
};
export const unSubscribeMenu=()=>{
  $emitter.unSubscribe('updateMenu');
};

// check version
export const getVer=async ()=>{
  const localYrui=require('yrui/package.json');
  const localVer=localYrui.version;
  // const npmUrl='https://registry.npmjs.org/yrui/latest';
  const cnpmUrl='https://registry.npm.taobao.org/yrui/latest';
  const yruiTips={
    0:'当前[yrui]版本为最新版本!!',
    1:'当前[yrui]有新可用版本,请注意更新!!',
    2:'当前[yrui]版本较低,请及时更新至最新版本!!',
    3:'当前[yrui]版本过低不能继续使用,请更新至最新版本!!',
    5:'请联网检测[yrui]最新版本!!',
  };

  let shouldUp=0;
  try{
    const data:any=await fetch(cnpmUrl).then(res=>res.json());
    const tips=data.tips||yruiTips;
    const serverVer=data.version||'100.0.0';
    const local_v=localVer.split('.');
    const server_v=serverVer.split('.');
    const ver_info=` 本地版本: ${localVer}; 最新版本: ${serverVer} .`;
    if(local_v[0]<server_v[0]){
      log.error(tips[3]+ver_info);
      // throw Error('yiru123.huy456.update');
      return shouldUp=3;
    }
    if(local_v[1]<server_v[1]){
      log.warn(tips[2]+ver_info);
      return shouldUp=2;
    }
    if(local_v[2]<server_v[2]){
      log(tips[1]+ver_info);
      return shouldUp=1;
    }
    return serverVer;
  }catch(err){
    log(yruiTips[5]);
    return shouldUp=5;
  }
};
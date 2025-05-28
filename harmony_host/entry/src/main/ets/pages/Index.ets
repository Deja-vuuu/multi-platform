// Index.ets
// 导入页面路由模块
import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import TButton from '../components/TButton'
import { LengthMetrics } from '@kit.ArkUI';

interface BtnItem  {
  text:string
  clickFun: () => void;
}

@Entry
@Component


struct Index {
  @State message: string = 'Hello World';
  @State btnList: BtnItem[] = [
    {
      text: "跳转12",
      clickFun:()=>{
      router.pushUrl({ url: 'pages/test' })
    }}
  ];

  build() {
    Column() {
      List() {
        ForEach(this.btnList, (item: BtnItem) => {
          ListItem() {
            TButton({
              text: item.text,
            }).onClick(()=>{
              item.clickFun()
            })
          }
          .margin(12)


        })
      }.alignListItem(ListItemAlign.Center)
    }
    .height('100%')
    .width('100%')


  }
}
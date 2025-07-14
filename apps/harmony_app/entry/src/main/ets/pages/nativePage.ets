import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import TButton from '../components/TButton'
@Entry
@Component
struct Second {
  @State message: string = '鸿蒙原生页面';

  build() {
    Column() {
      // 主标题
      Text(this.message)
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .fontColor('#333')
        .margin({ bottom: 30 })

      // 返回按钮
      TButton({
        text:"返回首页"
      })
      .onClick(() => {
        try {
          router.back()
        } catch (err) {
          let code = (err as BusinessError).code;
          let message = (err as BusinessError).message;
          console.error(`Failed to return to the first page. Code is ${code}, message is ${message}`)
        }
      })
    }
    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Center)
    .height('100%')
    .width('100%')
    .backgroundColor('#F5F7FA') // 柔和背景
    .padding(20)
  }
}
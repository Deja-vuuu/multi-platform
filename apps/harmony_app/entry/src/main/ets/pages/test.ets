import { router } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Second {
  @State message: string = '鸿蒙原生页面';

  build() {
    Column() {
      // 主标题
      Text(this.message)
        .fontSize(40)
        .fontWeight(FontWeight.Bold)
        .fontColor('#333')
        .margin({ bottom: 30 })

      // 返回按钮
      Button() {
        Text('返回首页')
          .fontSize(20)
          .fontWeight(FontWeight.Medium)
          .fontColor('#fff')
      }
      .type(ButtonType.Capsule)
      .width('60%')
      .height(60)
      .backgroundColor('#007AFF') // 更现代蓝色
      .borderRadius(30)
      .shadow({ radius: 10, color: '#00000033', offsetX: 0, offsetY: 4 })
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
import { router } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  build() {
    Column() {

      // 内容区域
      Scroll() {
        Column() {
          AgentInfoCard()
        }
        .padding(16)
      }
      .layoutWeight(1)
      .backgroundColor('#f5f5f5')
    }
    .height('100%')
    .width('100%')
  }
}

// 经纪人信息卡片组件
@Component
struct AgentInfoCard {
  @State showTimeDialog: boolean = false;

  build() {
    Column() {
      // 主要内容区域
      Row() {
        // 左侧用户信息
        Row() {
          // 用户头像
          Image('https://image.5i5j.com/picture2/8420171.jpg?timestamp=1742547668513')
            .width(36)
            .height(36)
            .borderRadius(18)
            .objectFit(ImageFit.Cover)

          // 用户名和评分
          Column() {
            Text('李震华')
              .fontSize(14)
              .fontColor('#333333')
              .fontWeight(FontWeight.Medium)
              .margin({ top: 1 })

            Row() {
              // 评分标签
              Text('5.0分')
                .fontSize(9)
                .fontColor('#FF6F00')
                .fontWeight(FontWeight.Bold)
                .backgroundColor('#FFECDD')
                .borderRadius(3)
                .padding({ left: 3, right: 3, top: 2, bottom: 2 })

              // 评分图标
              Image('https://lanhu-oss-2537-2.lanhuapp.com/SketchPng9c2aa94e5b54e07a9539b830842ce89e0324f723c27b6fc48b52436e773ccb56')
                .width(18)
                .height(14)
                .margin({ left: 4 })
            }
            .margin({ top: 4 })
            .padding({ left: 3, right: 3, top: 2, bottom: 2 })
          }
          .alignItems(HorizontalAlign.Start)
          .layoutWeight(1)
          .margin({ left: 8 })
        }
        .alignItems(VerticalAlign.Top)
        .layoutWeight(2)
        .margin({ top: 6 })

        // 右侧按钮区域
        Row() {
          // 电话按钮
          Button() {
            Image('https://static-official.5i5j.com/offical/cdn/ef58b8156bf2e782567bdf35ffe496b3_1749041808817.png')
              .width(22)
              .height(22)
          }
          .width(46)
          .height(46)
          .backgroundColor('#FFC107')
          .borderRadius({ topLeft: 26, topRight: 8, bottomRight: 8, bottomLeft: 26 })
          .padding(12)

          // 在线聊天按钮
          Button() {
            Row() {
              Image('https://static-official.5i5j.com/offical/cdn/de19b14436206e56339c924bbda4b488_1749041808817.png')
                .width(20)
                .height(20)

              Text('在线聊')
                .fontSize(14)
                .fontColor('#222222')
                .fontWeight(FontWeight.Medium)
                .margin({ left: 8 })
            }
          }
          .backgroundColor('#FFC107')
          .borderRadius({ topLeft: 8, topRight: 26, bottomRight: 26, bottomLeft: 8 })
          .padding({ left: 16, right: 16, top: 12, bottom: 12 })
          .margin({ left: 6 })
          .onClick(() => {
            this.showTimeDialog = true;
          })
        }
      }
      .width('100%')
      .alignItems(VerticalAlign.Top)
      .padding({ left: 15, right: 12, top: 16, bottom: 15 })
    }
    .width('100%')
    .backgroundColor(Color.White)
    .borderRadius(8)
    .shadow({
      radius: 8,
      color: '#1f000000',
      offsetX: 0,
      offsetY: 2
    })
    .bindContentCover(this.showTimeDialog, this.TimeDialogBuilder(), {
      backgroundColor: 'rgba(0,0,0,0.5)'
    })
  }

  // 时间对话框构建器
  @Builder
  TimeDialogBuilder() {
    Column() {
      TimeUpdatingComponent({ onClose: () => {
        this.showTimeDialog = false;
      }})
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }
}

// 实时更新时间的组件
@Component
struct TimeUpdatingComponent {
  @State currentTime: string = '';
  private timer: number = -1;
  onClose: () => void = () => {};

  aboutToAppear() {
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  aboutToDisappear() {
    if (this.timer !== -1) {
      clearInterval(this.timer);
    }
  }

  updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    this.currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  build() {
    Column() {
      Text('当前时间')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .fontColor('#333')
        .margin({ bottom: 16 })

      Text(`当前时间: ${this.currentTime}`)
        .fontSize(16)
        .fontColor('#666')
        .margin({ bottom: 20 })
        .textAlign(TextAlign.Center)

      Button('关闭')
        .fontSize(16)
        .fontColor(Color.White)
        .backgroundColor('#2196F3')
        .borderRadius(6)
        .padding({ left: 20, right: 20, top: 10, bottom: 10 })
        .onClick(() => {
          this.onClose();
        })
    }
    .backgroundColor(Color.White)
    .borderRadius(8)
    .padding(20)
    .width(280)
    .alignItems(HorizontalAlign.Center)
  }
}
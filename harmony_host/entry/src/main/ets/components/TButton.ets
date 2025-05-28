// TButton.ets

@Component
export default struct TButton {
  @Prop text: string;

  build() {
    Button(this.text,{ type: ButtonType.Normal })
      .padding(10)
      .backgroundColor(0x317aff)
      .width('70%')
      .height(40)
      .fontSize(18)
      .borderRadius(10)
      .fontWeight(FontWeight.Medium)
      .borderRadius(8)
      .backgroundColor(0x317aff)
  }
}
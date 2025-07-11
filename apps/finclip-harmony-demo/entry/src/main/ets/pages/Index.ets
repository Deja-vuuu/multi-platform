import common from '@ohos.app.ability.common';
import { EAppletStartMode, FinAppClient, IFinAppConfig, IFinAppStartMode } from '@finclip/sdk';

@Entry
@Component
struct Index {
  @State pageInfos: NavPathStack = new NavPathStack()
  context = getContext(this) as common.UIAbilityContext
  client?: FinAppClient | null
  @State appId: string = '66544cc68ec4540001f899d0'
  @State apiServer: string = 'https://www.finclip.com'

  aboutToAppear(): void {
    this.initFinAppClient()
  }

  initFinAppClient() {
    const finAppConfig: IFinAppConfig.IFinAppConfig = {
      finStoreConfigs: [{
        apiServer: 'https://www.finclip.com',
        sdkKey: '22LyZEib0gLTQdU3MUauAVXYbQsFQXJ7lY+pPSzbD4QiZTnnrl4IpjfBVHO7sdrX',
        sdkSecret: '02fc30826d5ba322'
      }]
    }
    const startMode: IFinAppStartMode = {
      startMode: EAppletStartMode.Navigation,
      routerState: this.pageInfos,
      uiContext: this.getUIContext()
    }
    this.client = FinAppClient.init(
      finAppConfig,
      this.context,
      '',
      startMode
    )
    console.log('debug-aa',finAppConfig,this.context,startMode);
    console.log('debug--aa',this.client, FinAppClient.init(
      finAppConfig,
      this.context,
      '',
      startMode
    ))
  }

  @Builder
  PageMap(name: string) {
    // 宿主应用路由...
  }

  build() {
    Navigation(this.pageInfos) {
      Button('打开小程序 ！！！').onClick(async() => {
        await this.client?.startApplet({
          appId: '66544cc68ec4540001f899d0',
          apiServer: 'https://www.finclip.com',
        })
      })
      Button('打开小程序其他页面').onClick(async () => {
        console.log('debug--',this.appId, this.apiServer)

        await this.client?.startApplet({
          appId: '66544cc68ec4540001f899d0',
          apiServer: 'https://www.finclip.com',
          startParams:  {
            path:'/pages/component/view/view',
            query: "aaa=test&bbb=123"
          }
        })
      }).margin(10)
    }
    .mode(NavigationMode.Stack)
    .id('root')
    .title('起始页')
    .navDestination(this.PageMap)
  }
}

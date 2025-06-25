 ln -s ../../modules/flutter_module/.ohos/har  ./hosts/harmony_host/har

  ln -s ../../modules/flutter_module/.ohos/flutter_module  ./hosts/harmony_host/flutter_module


  ### TODO
  
  软连接不生效



  https://gitcode.com/openharmony-tpc/flutter_flutter


  flutter build hap




  #### android


  Consuming the Module
  1. Open <host>/app/build.gradle
  2. Ensure you have the repositories
  configured, otherwise add them:

      String storageUrl =
      System.env.FLUTTER_STORAGE_BASE_URL ?:
      "https://storage.googleapis.com"
      repositories {
        maven {
            url
            '/Users/yangyang/Desktop/multi-platf
            orm/modules/flutter_module/build/hos
            t/outputs/repo'
        }
        maven {
            url
            "$storageUrl/download.flutter.io"
        }
      }

  3. Make the host app depend on the Flutter
  module:

    dependencies {
      debugImplementation
      'com.example.flutter_module:flutter_debug:
      1.0'
      profileImplementation
      'com.example.flutter_module:flutter_profil
      e:1.0'
      releaseImplementation
      'com.example.flutter_module:flutter_releas
      e:1.0'
    }


  4. Add the `profile` build type:

    android {
      buildTypes {
        profile {
          initWith debug
        }
      }
    }

To learn more, visit
https://flutter.dev/go/build-aar
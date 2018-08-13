import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular/umd';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyAppComponent } from './app.component';

@NgModule({
    declarations: [
        MyAppComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyAppComponent)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyAppComponent,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}

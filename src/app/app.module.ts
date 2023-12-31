import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LanguageSwitcherComponent } from "./language-switcher/language-switcher.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { HelloWorldTemplateComponent } from "./hello-world-template.component";
import { HelloWorldNgIfComponent } from "./hello-world-ngif/hello-world-ngif.component";
import { HelloWorldDependencyInjectionComponent } from "./hello-world-di/hello-world-di.component";
import { HelloWorldInterpolationComponent } from "./hello-world-interpolation/hello-world-interpolation.component";
import { HelloWorldBindingsComponent } from "./hello-world-bindings/hello-world-bindings.component";

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcherComponent,
    HelloWorldComponent,
    HelloWorldTemplateComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HostService } from './host.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ReactiveFormsModule, 
  ],
  providers: [
    HostService
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

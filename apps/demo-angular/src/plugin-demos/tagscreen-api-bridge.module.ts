import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TagscreenApiBridgeComponent } from './tagscreen-api-bridge.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TagscreenApiBridgeComponent }])],
	declarations: [TagscreenApiBridgeComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class TagscreenApiBridgeModule {}

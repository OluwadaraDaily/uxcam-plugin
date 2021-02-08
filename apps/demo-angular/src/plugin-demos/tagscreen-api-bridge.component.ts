import { Component, NgZone } from '@angular/core';
import { DemoSharedTagscreenApiBridge } from '@demo/shared';
import {} from '@chronos-uxcam/tagscreen-api-bridge';

@Component({
	selector: 'demo-tagscreen-api-bridge',
	templateUrl: 'tagscreen-api-bridge.component.html',
})
export class TagscreenApiBridgeComponent {
	demoShared: DemoSharedTagscreenApiBridge;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedTagscreenApiBridge();
	}
}

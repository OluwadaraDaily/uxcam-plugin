import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTagscreenApiBridge } from '@demo/shared';
import {} from '@chronos-uxcam/tagscreen-api-bridge';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTagscreenApiBridge {}

/**
 * fileOverview:
 * Project:
 * File: DisplayTop
 * Date: 20/03/02
 * Author: Teraguchi
 */

'use strict';

export default class DisplayTop {

	constructor() {

		this.setup();
		this.setEvents();

	}

	setup() {

	}

	onLoad() {

	}

	setEvents() {

		$(window).on('load', this.onLoad.bind(this));

	}

}
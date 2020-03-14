/**
 * fileOverview: ページ別クラスの実行
 * Project: Main
 * File: Main
 * Date: 20/3/1(update)
 * Author: Teraguchi
 */

import DisplayTop from '../Display/DisplayTop';

'use strict';

export default class Main {

  constructor() {

    this.setup();
    this.setEvents();

  }

  setup() {
    
  }

  onReady() {
    //pageページ別のIDを取得
    const page = $('body').data('id');
    console.log('現在のページIDは ', page);

		//pageのIDごとに発火するクラスの振り分け
    switch(page) {

      case 'top':
        new DisplayTop();
        break;

			default:
				break;
    }

  }

  onLoad() {

  }

  onRender() {


  }

  setEvents() {

    document.addEventListener('DOMContentLoaded', () => {
      this.onRender();
    });

    window.addEventListener('load', () => {
      this.onReady();
    }, false);

  }

}

import { unsafeCSS, html, LitElement } from 'lit';
import styles from './notification.scss?inline';
import { property } from 'lit/decorators.js';
import { redirectTo } from '../../functions/redirect';

/**
 * @module Notification
 * @class
 * @exports
 * @public
 */
export class Notification extends LitElement {

  /** @cssprop */
  static styles = unsafeCSS(styles);

  /** @property {string} - Notification text */
  @property() notification : string = '';

  /** @property Notification timeout or Notification closing */
  @property() timeout : number = 1000;


  /**
   * Close Notification and create new Event
   * @private
   * @returns {void}
   */
  private _closeNotification() : void{
    this.dispatchEvent(new CustomEvent('notify'));
  }


  /**
   * Get Type of the Notification - error or success and return HTML
   * @returns {any}
   */
  public _typeOfNotification() : any {
    let timer = this.timeout / 1000;
    setInterval(() => {

      if (timer < 0) {
        redirectTo("/chapter/1", "");
      }

    
      timer--;
    }, 1000);

    return html`
      <div class="notification-error notification-container">
        <div class="notification-box">
          <div class="notification-information">
            ${this.notification == 'error' 
              ? html`
                <img src="res/icons/error.svg" alt=""/>
                <p class="notification-text">Ups... Das ist was schief gelaufen.</p>`
              : html`
                <img src="res/icons/success.svg" alt=""/>
                <p class="notification-text">Herzlichen Glückwunsch!</p>
            `}
          </div>
          <!-- Close Icon -->
          <img class="close-icon" src="res/icons/close.svg" @click=${this._closeNotification} alt="">
        </div>
      </div>
    `;
  }
  render() { return html` ${this._typeOfNotification()}`;
  }
}

customElements.define('notification-component', Notification);
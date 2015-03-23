'use strict';

import core from 'aui/core';
import dom from 'aui/dom/dom';
import Component from './Component';
import ComponentRegistry from 'aui/component/ComponentRegistry';
import './Modal.soy';

/**
 * Modal component.
 */
class Modal extends Component {
  /**
   * @inheritDoc
   */
  constructor(opt_config) {
    super(opt_config);
  }

  /**
   * Closes the tooltip.
   */
  close() {
    this.visible = false;
  }

  /**
   * @inheritDoc
   */
  disposeInternal() {
    dom.exitDocument(this.overlayElement);
    super.disposeInternal();
  }

  /**
   * @inheritDoc
   */
  syncOverlay(overlay) {
    dom[overlay ? 'enterDocument' : 'exitDocument'](this.overlayElement);
  }

  /**
   * @inheritDoc
   */
  syncVisible(visible) {
    if (this.overlay) {
      this.syncOverlay(visible);
    }
    super.syncVisible(visible);
  }

  /**
   * @inheritDoc
   */
  valueOverlayElementFn_() {
    return dom.buildFragment('<div class="overlay"></div>').firstChild
  }
}

/**
 * Default modal elementClasses.
 * @default modal
 * @type {String}
 * @static
 */
Modal.ELEMENT_CLASSES = 'modal';

Modal.ATTRS = {
  /**
   * Content to be placed inside modal body.
   * @type {String}
   */
  body: {
    validator: core.isString
  },

  /**
   * Modal default elementClasses attribute.
   * @default centered
   * @type {String}
   */
  elementClasses: {
    value: 'centered'
  },

  /**
   * Content to be placed inside modal footer.
   * @type {String}
   */
  footer: {
    validator: core.isString
  },

  /**
   * Content to be placed inside modal header.
   * @type {String}
   */
  header: {
    validator: core.isString
  },

  /**
   * Whether overlay should be visible when modal is visible.
   * @type {boolean}
   * @default true
   */
  overlay: {
    validator: core.isBoolean,
    value: true
  },

  /**
   * Element to be used as overlay.
   * @type {Element}
   */
  overlayElement: {
    initOnly: true,
    valueFn: 'valueOverlayElementFn_'
  }
};

ComponentRegistry.register('Modal', Modal);

export default Modal;
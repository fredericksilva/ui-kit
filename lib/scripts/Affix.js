'use strict';

import core from 'aui/core';
import dom from 'aui/dom/dom';
import domPosition from 'aui/dom/position';
import Attribute from 'aui/attribute/Attribute';
import EventEmitter from 'aui/events/EventEmitter';
import EventEmitterProxy from 'aui/events/EventEmitterProxy';

/**
 * Affix utility.
 */
class Affix extends Attribute {
  /**
   * @inheritDoc
   */
  constructor(opt_config) {
    super(opt_config);

    if (!Affix.emitter_) {
      Affix.emitter_ = new EventEmitter();
      Affix.proxy_ = new EventEmitterProxy(document, Affix.emitter_, null, { scroll: true });
    }

    /**
     * Holds the last position.
     * @type {Position.Bottom|Position.Default|Position.Top}
     * @private
     */
    this.lastPosition_ = null;

    /**
     * Holds event handle that listens scroll shared event emitter proxy.
     * @type {EventHandle}
     * @protected
     */
    this.scrollHandle_ = Affix.emitter_.on('scroll', this.checkPosition.bind(this));

    this.on('elementChanged', this.checkPosition);
    this.on('offsetTopChanged', this.checkPosition);
    this.on('offsetBottomChanged', this.checkPosition);
    this.checkPosition();
  }

  /**
   * @inheritDoc
   */
  disposeInternal() {
    dom.removeClasses(this.element, [Affix.Position.Bottom, Affix.Position.Default, Affix.Position.Top]);
    this.scrollHandle_.dispose();
    super.disposeInternal();
  }

  /**
   * Synchronize bottom, top and element regions and checks if position has
   * changed. If position has changed syncs position.
   */
  checkPosition() {
    if (this.intersectTopRegion()) {
      this.syncPosition(Affix.Position.Top);
    }
    else if (this.intersectBottomRegion()) {
      this.syncPosition(Affix.Position.Bottom);
    }
    else {
      this.syncPosition(Affix.Position.Default);
    }
  }

  /**
   * Whether the element is intersecting with bottom region defined by
   * offsetBottom.
   * @return {boolean}
   */
  intersectBottomRegion() {
    if (!core.isDef(this.offsetBottom)) {
      return false;
    }
    var clientHeight = domPosition.getHeight(this.container);
    var containerClientHeight = domPosition.getClientHeight(this.container);
    return domPosition.getScrollTop(this.container) + containerClientHeight >= clientHeight - this.offsetBottom;
  }

  /**
   * Whether the element is intersecting with top region defined by
   * offsetTop.
   * @return {boolean}
   */
  intersectTopRegion() {
    if (!core.isDef(this.offsetTop)) {
      return false;
    }
    return domPosition.getScrollTop(this.container) <= this.offsetTop;
  }

  /**
   * Synchronizes element css classes to match with the specified position.
   * @param {Position.Bottom|Position.Default|Position.Top} position
   */
  syncPosition(position) {
    if (this.lastPosition_ !== position) {
      dom.addClasses(this.element, [position]);
      dom.removeClasses(this.element, [this.lastPosition_]);
      this.lastPosition_ = position;
    }
  }
}

/**
 * Holds positions enum.
 * @enum {string}
 */
Affix.Position = {
  Top: 'affix-top',
  Bottom: 'affix-bottom',
  Default: 'affix-default'
};

Affix.ATTRS = {
  /**
   * The container element to be used as container area for affix. The container is
   * where the scroll event is listened from.
   * @type {Element|Window}
   */
  container: {
    setter: dom.toElement,
    value: document
  },

  /**
   * Defines the offset bottom that triggers affix.
   * @type {Number}
   */
  offsetTop: {
    validator: core.isNumber
  },

  /**
   * Defines the offset top that triggers affix.
   * @type {Number}
   */
   offsetBottom: {
     validator: core.isNumber
   },

  /**
   * Element to be used as alignment reference of affix.
   * @type {Element}
   */
  element: {
    setter: dom.toElement
  }
};

export default Affix;

;(function() {
var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function () {
    "use strict";
    "use strict";

    /**
     * A collection of core utility functions.
     * @const
     */

    var src$public$vendor$metaljs$src$core$$core = (function () {
        function src$public$vendor$metaljs$src$core$$core() {
            _classCallCheck(this, src$public$vendor$metaljs$src$core$$core);
        }

        _createClass(src$public$vendor$metaljs$src$core$$core, null, {
            abstractMethod: {
                /**
                 * When defining a class Foo with an abstract method bar(), you can do:
                 * Foo.prototype.bar = core.abstractMethod
                 *
                 * Now if a subclass of Foo fails to override bar(), an error will be thrown
                 * when bar() is invoked.
                 *
                 * @type {!Function}
                 * @throws {Error} when invoked to indicate the method should be overridden.
                 */

                value: function abstractMethod() {
                    throw Error("Unimplemented abstract method");
                }
            },
            collectSuperClassesProperty: {

                /**
                 * Loops constructor super classes collecting its properties values. If
                 * property is not available on the super class `undefined` will be
                 * collected as value for the class hierarchy position.
                 * @param {!function()} constructor Class constructor.
                 * @param {string} propertyName Property name to be collected.
                 * @return {Array.<*>} Array of collected values.
                 * TODO(*): Rethink superclass loop.
                 */

                value: function collectSuperClassesProperty(constructor, propertyName) {
                    var propertyValues = [constructor[propertyName]];
                    while (constructor.__proto__ && !constructor.__proto__.isPrototypeOf(Function)) {
                        constructor = constructor.__proto__;
                        propertyValues.push(constructor[propertyName]);
                    }
                    return propertyValues;
                }
            },
            getUid: {

                /**
                 * Gets an unique id. If `opt_object` argument is passed, the object is
                 * mutated with an unique id. Consecutive calls with the same object
                 * reference won't mutate the object again, instead the current object uid
                 * returns. See {@link core.UID_PROPERTY}.
                 * @type {opt_object} Optional object to be mutated with the uid. If not
                 *     specified this method only returns the uid.
                 * @throws {Error} when invoked to indicate the method should be overridden.
                 */

                value: function getUid(opt_object) {
                    if (opt_object) {
                        return opt_object[src$public$vendor$metaljs$src$core$$core.UID_PROPERTY] || (opt_object[src$public$vendor$metaljs$src$core$$core.UID_PROPERTY] = src$public$vendor$metaljs$src$core$$core.uniqueIdCounter_++);
                    }
                    return src$public$vendor$metaljs$src$core$$core.uniqueIdCounter_++;
                }
            },
            identityFunction: {

                /**
                 * The identity function. Returns its first argument.
                 * @param {*=} opt_returnValue The single value that will be returned.
                 * @return {?} The first argument.
                 */

                value: function identityFunction(opt_returnValue) {
                    return opt_returnValue;
                }
            },
            isBoolean: {

                /**
                 * Returns true if the specified value is a boolean.
                 * @param {?} val Variable to test.
                 * @return {boolean} Whether variable is boolean.
                 */

                value: function isBoolean(val) {
                    return typeof val === "boolean";
                }
            },
            isDef: {

                /**
                 * Returns true if the specified value is not undefined.
                 * @param {?} val Variable to test.
                 * @return {boolean} Whether variable is defined.
                 */

                value: function isDef(val) {
                    return val !== undefined;
                }
            },
            isDefAndNotNull: {

                /**
                 * Returns true if value is not undefined or null.
                 * @param {*} val
                 * @return {Boolean}
                 */

                value: function isDefAndNotNull(val) {
                    return src$public$vendor$metaljs$src$core$$core.isDef(val) && !src$public$vendor$metaljs$src$core$$core.isNull(val);
                }
            },
            isDocument: {

                /**
                 * Returns true if value is a document.
                 * @param {*} val
                 * @return {Boolean}
                 */

                value: function isDocument(val) {
                    return val && typeof val === "object" && val.nodeType === 9;
                }
            },
            isElement: {

                /**
                 * Returns true if value is a dom element.
                 * @param {*} val
                 * @return {Boolean}
                 */

                value: function isElement(val) {
                    return val && typeof val === "object" && val.nodeType === 1;
                }
            },
            isFunction: {

                /**
                 * Returns true if the specified value is a function.
                 * @param {?} val Variable to test.
                 * @return {boolean} Whether variable is a function.
                 */

                value: function isFunction(val) {
                    return typeof val === "function";
                }
            },
            isNull: {

                /**
                 * Returns true if value is null.
                 * @param {*} val
                 * @return {Boolean}
                 */

                value: function isNull(val) {
                    return val === null;
                }
            },
            isNumber: {

                /**
                 * Returns true if the specified value is a number.
                 * @param {?} val Variable to test.
                 * @return {boolean} Whether variable is a number.
                 */

                value: function isNumber(val) {
                    return typeof val === "number";
                }
            },
            isWindow: {

                /**
                 * Returns true if value is a window.
                 * @param {*} val
                 * @return {Boolean}
                 */

                value: function isWindow(val) {
                    return val !== null && val === val.window;
                }
            },
            isObject: {

                /**
                 * Returns true if the specified value is an object. This includes arrays
                 * and functions.
                 * @param {?} val Variable to test.
                 * @return {boolean} Whether variable is an object.
                 */

                value: function isObject(val) {
                    var type = typeof val;
                    return type === "object" && val !== null || type === "function";
                }
            },
            isString: {

                /**
                 * Returns true if value is a string.
                 * @param {*} val
                 * @return {Boolean}
                 */

                value: function isString(val) {
                    return typeof val === "string";
                }
            },
            mergeSuperClassesProperty: {

                /**
                 * Merges the values of a static property a class with the values of that
                 * property for all its super classes, and stores it as a new static
                 * property of that class. If the static property already existed, it won't
                 * be recalculated.
                 * @param {!function()} constructor Class constructor.
                 * @param {string} propertyName Property name to be collected.
                 * @param {function(*, *):*=} opt_mergeFn Function that receives an array filled
                 *   with the values of the property for the current class and all its super classes.
                 *   Should return the merged value to be stored on the current class.
                 * @return {boolean} Returns true if merge happens, false otherwise.
                 */

                value: function mergeSuperClassesProperty(constructor, propertyName, opt_mergeFn) {
                    var mergedName = propertyName + "_MERGED";
                    if (constructor.hasOwnProperty(mergedName)) {
                        return false;
                    }

                    var merged = src$public$vendor$metaljs$src$core$$core.collectSuperClassesProperty(constructor, propertyName);
                    if (opt_mergeFn) {
                        merged = opt_mergeFn(merged);
                    }
                    constructor[mergedName] = merged;
                    return true;
                }
            },
            nullFunction: {

                /**
                 * Null function used for default values of callbacks, etc.
                 * @return {void} Nothing.
                 */

                value: function nullFunction() {}
            }
        });

        return src$public$vendor$metaljs$src$core$$core;
    })();

    /**
     * Unique id property prefix.
     * @type {String}
     * @protected
     */
    src$public$vendor$metaljs$src$core$$core.UID_PROPERTY = "core_" + (Math.random() * 1000000000 >>> 0);

    /**
     * Counter for unique id.
     * @type {Number}
     * @private
     */
    src$public$vendor$metaljs$src$core$$core.uniqueIdCounter_ = 1;

    var src$public$vendor$metaljs$src$core$$default = src$public$vendor$metaljs$src$core$$core;
    "use strict";

    var src$public$vendor$metaljs$src$object$object$$object = (function () {
        function src$public$vendor$metaljs$src$object$object$$object() {
            _classCallCheck(this, src$public$vendor$metaljs$src$object$object$$object);
        }

        _createClass(src$public$vendor$metaljs$src$object$object$$object, null, {
            mixin: {
                /**
                 * Copies all the members of a source object to a target object.
                 * @param {Object} target Target object.
                 * @param {...Object} var_args The objects from which values will be copied.
                 * @return {Object} Returns the target object reference.
                 */

                value: function mixin(target) {
                    var key, source;
                    for (var i = 1; i < arguments.length; i++) {
                        source = arguments[i];
                        for (key in source) {
                            target[key] = source[key];
                        }
                    }
                    return target;
                }
            }
        });

        return src$public$vendor$metaljs$src$object$object$$object;
    })();

    var src$public$vendor$metaljs$src$object$object$$default = src$public$vendor$metaljs$src$object$object$$object;
    "use strict";

    /**
     * Disposable utility. When inherited provides the `dispose` function to its
     * subclass, which is responsible for disposing of any object references
     * when an instance won't be used anymore. Subclasses should override
     * `disposeInternal` to implement any specific disposing logic.
     * @constructor
     */

    var src$public$vendor$metaljs$src$disposable$Disposable$$Disposable = (function () {
        function src$public$vendor$metaljs$src$disposable$Disposable$$Disposable() {
            _classCallCheck(this, src$public$vendor$metaljs$src$disposable$Disposable$$Disposable);

            /**
             * Flag indicating if this instance has already been disposed.
             * @type {boolean}
             * @protected
             */
            this.disposed_ = false;
        }

        _createClass(src$public$vendor$metaljs$src$disposable$Disposable$$Disposable, {
            dispose: {

                /**
                 * Disposes of this instance's object references. Calls `disposeInternal`.
                 */

                value: function dispose() {
                    if (!this.disposed_) {
                        this.disposeInternal();
                        this.disposed_ = true;
                    }
                }
            },
            disposeInternal: {

                /**
                 * Subclasses should override this method to implement any specific
                 * disposing logic (like clearing references and calling `dispose` on other
                 * disposables).
                 */

                value: function disposeInternal() {}
            },
            isDisposed: {

                /**
                 * Checks if this instance has already been disposed.
                 * @return {boolean}
                 */

                value: function isDisposed() {
                    return this.disposed_;
                }
            }
        });

        return src$public$vendor$metaljs$src$disposable$Disposable$$Disposable;
    })();

    var src$public$vendor$metaljs$src$disposable$Disposable$$default = src$public$vendor$metaljs$src$disposable$Disposable$$Disposable;
    "use strict";

    /**
     * EventHandle utility. Holds information about an event subscription, and
     * allows removing them easily.
     * EventHandle is a Disposable, but it's important to note that the
     * EventEmitter that created it is not the one responsible for disposing it.
     * That responsibility is for the code that holds a reference to it.
     * @param {!EventEmitter} emitter Emitter the event was subscribed to.
     * @param {string} event The name of the event that was subscribed to.
     * @param {!Function} listener The listener subscribed to the event.
     * @constructor
     * @extends {Disposable}
     */

    var src$public$vendor$metaljs$src$events$EventHandle$$EventHandle = (function (_src$public$vendor$metaljs$src$disposable$Disposable$$default) {
        function src$public$vendor$metaljs$src$events$EventHandle$$EventHandle(emitter, event, listener) {
            _classCallCheck(this, src$public$vendor$metaljs$src$events$EventHandle$$EventHandle);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$events$EventHandle$$EventHandle.prototype), "constructor", this).call(this);

            /**
             * The EventEmitter instance that the event was subscribed to.
             * @type {EventEmitter}
             * @protected
             */
            this.emitter_ = emitter;

            /**
             * The name of the event that was subscribed to.
             * @type {string}
             * @protected
             */
            this.event_ = event;

            /**
             * The listener subscribed to the event.
             * @type {Function}
             * @protected
             */
            this.listener_ = listener;
        }

        _inherits(src$public$vendor$metaljs$src$events$EventHandle$$EventHandle, _src$public$vendor$metaljs$src$disposable$Disposable$$default);

        _createClass(src$public$vendor$metaljs$src$events$EventHandle$$EventHandle, {
            disposeInternal: {

                /**
                 * Disposes of this instance's object references.
                 * @override
                 */

                value: function disposeInternal() {
                    this.removeListener();
                    this.emitter_ = null;
                    this.listener_ = null;
                }
            },
            removeListener: {

                /**
                 * Removes the listener subscription from the emitter.
                 */

                value: function removeListener() {
                    if (!this.emitter_.isDisposed()) {
                        this.emitter_.removeListener(this.event_, this.listener_);
                    }
                }
            }
        });

        return src$public$vendor$metaljs$src$events$EventHandle$$EventHandle;
    })(src$public$vendor$metaljs$src$disposable$Disposable$$default);

    var src$public$vendor$metaljs$src$events$EventHandle$$default = src$public$vendor$metaljs$src$events$EventHandle$$EventHandle;
    "use strict";

    /**
     * This is a special EventHandle, that is responsible for dom events, instead
     * of EventEmitter events.
     * @param {!EventEmitter} emitter Emitter the event was subscribed to.
     * @param {string} event The name of the event that was subscribed to.
     * @param {!Function} listener The listener subscribed to the event.
     * @constructor
     * @extends {EventHandle}
     */

    var src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle = (function (_src$public$vendor$metaljs$src$events$EventHandle$$default) {
        function src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle(emitter, event, listener) {
            _classCallCheck(this, src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle.prototype), "constructor", this).call(this, emitter, event, listener);
        }

        _inherits(src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle, _src$public$vendor$metaljs$src$events$EventHandle$$default);

        _createClass(src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle, {
            removeListener: {

                /**
                 * @inheritDoc
                 */

                value: function removeListener() {
                    this.emitter_.removeEventListener(this.event_, this.listener_);
                }
            }
        });

        return src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle;
    })(src$public$vendor$metaljs$src$events$EventHandle$$default);

    var src$public$vendor$metaljs$src$events$DomEventHandle$$default = src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle;
    "use strict";

    var src$public$vendor$metaljs$src$dom$dom$$dom = (function () {
        function src$public$vendor$metaljs$src$dom$dom$$dom() {
            _classCallCheck(this, src$public$vendor$metaljs$src$dom$dom$$dom);
        }

        _createClass(src$public$vendor$metaljs$src$dom$dom$$dom, null, {
            addClasses: {
                /**
                 * Adds the requested CSS classes to an element.
                 * @param {!Element} element The element to add CSS classes to.
                 * @param {!Array<string>} classes CSS classes to add.
                 */

                value: function addClasses(element, classes) {
                    if ("classList" in element) {
                        src$public$vendor$metaljs$src$dom$dom$$dom.addClassesWithNative_(element, classes);
                    } else {
                        src$public$vendor$metaljs$src$dom$dom$$dom.addClassesWithoutNative_(element, classes);
                    }
                }
            },
            addClassesWithNative_: {

                /**
                 * Adds the requested CSS classes to an element using classList.
                 * @param {!Element} element The element to add CSS classes to.
                 * @param {!Array<string>} classes CSS classes to add.
                 * @protected
                 */

                value: function addClassesWithNative_(element, classes) {
                    classes.forEach(function (className) {
                        element.classList.add(className);
                    });
                }
            },
            addClassesWithoutNative_: {

                /**
                 * Adds the requested CSS classes to an element without using classList.
                 * @param {!Element} element The element to add CSS classes to.
                 * @param {!Array<string>} classes CSS classes to add.
                 * @protected
                 */

                value: function addClassesWithoutNative_(element, classes) {
                    var elementClassName = " " + element.className + " ";
                    var classesToAppend = "";

                    for (var i = 0; i < classes.length; i++) {
                        var className = classes[i];

                        if (elementClassName.indexOf(" " + className + " ") === -1) {
                            classesToAppend += " " + className;
                        }
                    }

                    if (classesToAppend) {
                        element.className = element.className + classesToAppend;
                    }
                }
            },
            append: {

                /**
                 * Appends a child node with text or other nodes to a parent node. If
                 * child is a HTML string it will be automatically converted to a document
                 * fragment before appending it to the parent.
                 * @param {!Element} parent The node to append nodes to.
                 * @param {!Element|String} child The thing to append to the parent.
                 * @return {!Element} The appended child.
                 */

                value: function append(parent, child) {
                    if (src$public$vendor$metaljs$src$core$$default.isString(child)) {
                        child = src$public$vendor$metaljs$src$dom$dom$$dom.buildFragment(child);
                    }
                    return parent.appendChild(child);
                }
            },
            buildFragment: {

                /**
                 * Helper for converting a HTML string into a document fragment.
                 * @param {string} htmlString The HTML string to convert.
                 * @return {!Element} The resulting document fragment.
                 */

                value: function buildFragment(htmlString) {
                    var tempDiv = document.createElement("div");
                    tempDiv.innerHTML = "<br>" + htmlString;
                    tempDiv.removeChild(tempDiv.firstChild);

                    var fragment = document.createDocumentFragment();
                    while (tempDiv.firstChild) {
                        fragment.appendChild(tempDiv.firstChild);
                    }
                    return fragment;
                }
            },
            delegate: {

                /**
                 * Listens to the specified event on the given DOM element, but only calls the
                 * callback with the event when it triggered by elements that match the given
                 * selector.
                 * @param {!Element} element The container DOM element to listen to the event on.
                 * @param {string} eventName The name of the event to listen to.
                 * @param {string} selector The selector that matches the child elements that
                 *   the event should be triggered for.
                 * @param {!function(!Object)} callback Function to be called when the event is
                 *   triggered. It will receive the normalized event object.
                 * @return {!DomEventHandle} Can be used to remove the listener.
                 */

                value: function delegate(element, eventName, selector, callback) {
                    var customConfig = src$public$vendor$metaljs$src$dom$dom$$dom.customEvents[eventName];
                    if (customConfig && customConfig.delegate) {
                        eventName = customConfig.originalEvent;
                        callback = customConfig.handler.bind(customConfig, callback);
                    }
                    return src$public$vendor$metaljs$src$dom$dom$$dom.on(element, eventName, src$public$vendor$metaljs$src$dom$dom$$dom.handleDelegateEvent_.bind(null, selector, callback));
                }
            },
            enterDocument: {

                /**
                 * Inserts node in document as last element.
                 * @param {Element} node Element to remove children from.
                 */

                value: function enterDocument(node) {
                    src$public$vendor$metaljs$src$dom$dom$$dom.append(document.body, node);
                }
            },
            exitDocument: {

                /**
                 * Removes node from document.
                 * @param {Element} node Element to remove children from.
                 */

                value: function exitDocument(node) {
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                }
            },
            handleDelegateEvent_: {

                /**
                 * This is called when an event is triggered by a delegate listener (see
                 * `dom.delegate` for more details).
                 * @param {string} selector The selector or element that matches the child
                 *   elements that the event should be triggered for.
                 * @param {!function(!Object)} callback Function to be called when the event
                 *   is triggered. It will receive the normalized event object.
                 * @param {!Event} event The event payload.
                 * @return {boolean} False if at least one of the triggered callbacks returns
                 *   false, or true otherwise.
                 */

                value: function handleDelegateEvent_(selector, callback, event) {
                    src$public$vendor$metaljs$src$dom$dom$$dom.normalizeDelegateEvent_(event);

                    var currentElement = event.target;
                    var returnValue = true;

                    while (currentElement && !event.stopped) {
                        if (src$public$vendor$metaljs$src$core$$default.isString(selector) && src$public$vendor$metaljs$src$dom$dom$$dom.match(currentElement, selector)) {
                            event.delegateTarget = currentElement;
                            returnValue &= callback(event);
                        }
                        currentElement = currentElement.parentNode;
                    }

                    return returnValue;
                }
            },
            hasClass: {

                /**
                 * Checks if the given element has the requested css class.
                 * @param {!Element} element
                 * @param {string} className
                 * @return {boolean}
                 */

                value: function hasClass(element, className) {
                    if ("classList" in element) {
                        return src$public$vendor$metaljs$src$dom$dom$$dom.hasClassWithNative_(element, className);
                    } else {
                        return src$public$vendor$metaljs$src$dom$dom$$dom.hasClassWithoutNative_(element, className);
                    }
                }
            },
            hasClassWithNative_: {

                /**
                 * Checks if the given element has the requested css class using classList.
                 * @param {!Element} element
                 * @param {string} className
                 * @return {boolean}
                 * @protected
                 */

                value: function hasClassWithNative_(element, className) {
                    return element.classList.contains(className);
                }
            },
            hasClassWithoutNative_: {

                /**
                 * Checks if the given element has the requested css class without using classList.
                 * @param {!Element} element
                 * @param {string} className
                 * @return {boolean}
                 * @protected
                 */

                value: function hasClassWithoutNative_(element, className) {
                    return (" " + element.className + " ").indexOf(" " + className + " ") >= 0;
                }
            },
            match: {

                /**
                 * Check if an element matches a given selector.
                 * @param {Element} element
                 * @param {string} selector
                 * @return {boolean}
                 */

                value: function match(element, selector) {
                    if (!element || element.nodeType !== 1) {
                        return false;
                    }

                    var p = Element.prototype;
                    var m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
                    if (m) {
                        return m.call(element, selector);
                    }

                    return src$public$vendor$metaljs$src$dom$dom$$dom.matchFallback_(element, selector);
                }
            },
            matchFallback_: {

                /**
                 * Check if an element matches a given selector, using an internal implementation
                 * instead of calling existing javascript functions.
                 * @param {Element} element
                 * @param {string} selector
                 * @return {boolean}
                 * @protected
                 */

                value: function matchFallback_(element, selector) {
                    var nodes = document.querySelectorAll(selector, element.parentNode);
                    for (var i = 0; i < nodes.length; ++i) {
                        if (nodes[i] === element) {
                            return true;
                        }
                    }
                    return false;
                }
            },
            normalizeDelegateEvent_: {

                /**
                 * Normalizes the event payload for delegate listeners.
                 * @param {!Event} event
                 */

                value: function normalizeDelegateEvent_(event) {
                    event.stopPropagation = src$public$vendor$metaljs$src$dom$dom$$dom.stopPropagation_;
                    event.stopImmediatePropagation = src$public$vendor$metaljs$src$dom$dom$$dom.stopImmediatePropagation_;
                }
            },
            on: {

                /**
                 * Listens to the specified event on the given DOM element. This function normalizes
                 * DOM event payloads and functions so they'll work the same way on all supported
                 * browsers.
                 * @param {!Element} element The DOM element to listen to the event on.
                 * @param {string} eventName The name of the event to listen to.
                 * @param {!function(!Object)} callback Function to be called when the event is
                 *   triggered. It will receive the normalized event object.
                 * @return {!DomEventHandle} Can be used to remove the listener.
                 */

                value: function on(element, eventName, callback) {
                    var customConfig = src$public$vendor$metaljs$src$dom$dom$$dom.customEvents[eventName];
                    if (customConfig && customConfig.event) {
                        eventName = customConfig.originalEvent;
                        callback = customConfig.handler.bind(customConfig, callback);
                    }
                    element.addEventListener(eventName, callback);
                    return new src$public$vendor$metaljs$src$events$DomEventHandle$$default(element, eventName, callback);
                }
            },
            registerCustomEvent: {

                /**
                 * Registers a custom event.
                 * @param {string} eventName The name of the custom event.
                 * @param {!Object} customConfig An object with information about how the event
                 *   should be handled.
                 */

                value: function registerCustomEvent(eventName, customConfig) {
                    src$public$vendor$metaljs$src$dom$dom$$dom.customEvents[eventName] = customConfig;
                }
            },
            removeChildren: {

                /**
                 * Removes all the child nodes on a DOM node.
                 * @param {Element} node Element to remove children from.
                 */

                value: function removeChildren(node) {
                    var child;
                    while (child = node.firstChild) {
                        node.removeChild(child);
                    }
                }
            },
            removeClasses: {

                /**
                 * Removes the requested CSS classes from an element.
                 * @param {!Element} element The element to remove CSS classes from.
                 * @param {!Array<string>} classes CSS classes to remove.
                 */

                value: function removeClasses(element, classes) {
                    if ("classList" in element) {
                        src$public$vendor$metaljs$src$dom$dom$$dom.removeClassesWithNative_(element, classes);
                    } else {
                        src$public$vendor$metaljs$src$dom$dom$$dom.removeClassesWithoutNative_(element, classes);
                    }
                }
            },
            removeClassesWithNative_: {

                /**
                 * Removes the requested CSS classes from an element using classList.
                 * @param {!Element} element The element to remove CSS classes from.
                 * @param {!Array<string>} classes CSS classes to remove.
                 * @protected
                 */

                value: function removeClassesWithNative_(element, classes) {
                    classes.forEach(function (className) {
                        element.classList.remove(className);
                    });
                }
            },
            removeClassesWithoutNative_: {

                /**
                 * Removes the requested CSS classes from an element without using classList.
                 * @param {!Element} element The element to remove CSS classes from.
                 * @param {!Array<string>} classes CSS classes to remove.
                 * @protected
                 */

                value: function removeClassesWithoutNative_(element, classes) {
                    var elementClassName = " " + element.className + " ";

                    for (var i = 0; i < classes.length; i++) {
                        elementClassName = elementClassName.replace(" " + classes[i] + " ", " ");
                    }

                    element.className = elementClassName.trim();
                }
            },
            stopImmediatePropagation_: {

                /**
                 * The function that replaces `stopImmediatePropagation_` for events.
                 * @protected
                 */

                value: function stopImmediatePropagation_() {
                    this.stopped = true;
                    Event.prototype.stopImmediatePropagation.call(this);
                }
            },
            stopPropagation_: {

                /**
                 * The function that replaces `stopPropagation` for events.
                 * @protected
                 */

                value: function stopPropagation_() {
                    this.stopped = true;
                    Event.prototype.stopPropagation.call(this);
                }
            },
            supportsEvent: {

                /**
                 * Checks if the given element supports the given event type.
                 * @param {!Element|string} element The DOM element or element tag name to check.
                 * @param {string} eventName The name of the event to check.
                 * @return {boolean}
                 */

                value: function supportsEvent(element, eventName) {
                    if (src$public$vendor$metaljs$src$dom$dom$$dom.customEvents[eventName]) {
                        return true;
                    }

                    if (src$public$vendor$metaljs$src$core$$default.isString(element)) {
                        if (!src$public$vendor$metaljs$src$dom$dom$$elementsByTag[element]) {
                            src$public$vendor$metaljs$src$dom$dom$$elementsByTag[element] = document.createElement(element);
                        }
                        element = src$public$vendor$metaljs$src$dom$dom$$elementsByTag[element];
                    }
                    return "on" + eventName in element;
                }
            },
            toElement: {

                /**
                 * Converts the given argument to a DOM element. Strings are assumed to
                 * be selectors, and so a matched element will be returned. If the arg
                 * is already a DOM element it will be the return value.
                 * @param {string|Element|Document} selectorOrElement
                 * @return {Element} The converted element, or null if none was found.
                 */

                value: function toElement(selectorOrElement) {
                    if (src$public$vendor$metaljs$src$core$$default.isElement(selectorOrElement) || src$public$vendor$metaljs$src$core$$default.isDocument(selectorOrElement)) {
                        return selectorOrElement;
                    } else if (src$public$vendor$metaljs$src$core$$default.isString(selectorOrElement)) {
                        if (selectorOrElement[0] === "#" && selectorOrElement.indexOf(" ") === -1) {
                            return document.getElementById(selectorOrElement.substr(1));
                        } else {
                            return document.querySelector(selectorOrElement);
                        }
                    } else {
                        return null;
                    }
                }
            },
            triggerEvent: {

                /**
                 * Triggers the specified event on the given element.
                 * NOTE: This should mostly be used for testing, not on real code.
                 * @param {!Element} element The node that should trigger the event.
                 * @param {string} eventName The name of the event to be triggred.
                 * @param {Object=} opt_eventObj An object with data that should be on the
                 *   triggered event's payload.
                 */

                value: function triggerEvent(element, eventName, opt_eventObj) {
                    var eventObj = document.createEvent("HTMLEvents");
                    eventObj.initEvent(eventName, true, true);
                    src$public$vendor$metaljs$src$object$object$$default.mixin(eventObj, opt_eventObj);
                    element.dispatchEvent(eventObj);
                }
            }
        });

        return src$public$vendor$metaljs$src$dom$dom$$dom;
    })();

    var src$public$vendor$metaljs$src$dom$dom$$elementsByTag = {};
    src$public$vendor$metaljs$src$dom$dom$$dom.customEvents = {};

    var src$public$vendor$metaljs$src$dom$dom$$eventMap = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    };
    Object.keys(src$public$vendor$metaljs$src$dom$dom$$eventMap).forEach(function (eventName) {
        src$public$vendor$metaljs$src$dom$dom$$dom.registerCustomEvent(eventName, {
            delegate: true,
            handler: function handler(callback, event) {
                var related = event.relatedTarget;
                var target = event.delegateTarget || event.target;
                if (!related || related !== target && !target.contains(related)) {
                    event.customType = eventName;
                    return callback(event);
                }
            },
            originalEvent: src$public$vendor$metaljs$src$dom$dom$$eventMap[eventName]
        });
    });

    var src$public$vendor$metaljs$src$dom$dom$$default = src$public$vendor$metaljs$src$dom$dom$$dom;

    var src$public$vendor$metal$position$src$math$$math = (function () {
        function src$public$vendor$metal$position$src$math$$math() {
            _classCallCheck(this, src$public$vendor$metal$position$src$math$$math);
        }

        _createClass(src$public$vendor$metal$position$src$math$$math, null, {
            intersectRect: {
                /**
                   * Tests if a rectangle intersects with another.
                   *
                   * <pre>
                   *  x0y0 --------       x2y2 --------
                   *      |       |           |       |
                   *      -------- x1y1       -------- x3y3
                   * </pre>
                   *
                   * Note that coordinates starts from top to down (y), left to right (x):
                   *
                   * <pre>
                   *      ------> (x)
                   *      |
                   *      |
                   *     (y)
                   * </pre>
                   *
                   * @param {number} x0 Horizontal coordinate of P0.
                   * @param {number} y0 Vertical coordinate of P0.
                   * @param {number} x1 Horizontal coordinate of P1.
                   * @param {number} y1 Vertical coordinate of P1.
                   * @param {number} x2 Horizontal coordinate of P2.
                   * @param {number} y2 Vertical coordinate of P2.
                   * @param {number} x3 Horizontal coordinate of P3.
                   * @param {number} y3 Vertical coordinate of P3.
                   * @return {boolean}
                   */

                value: function intersectRect(x0, y0, x1, y1, x2, y2, x3, y3) {
                    return !(x2 > x1 || x3 < x0 || y2 > y1 || y3 < y0);
                }
            }
        });

        return src$public$vendor$metal$position$src$math$$math;
    })();

    var src$public$vendor$metal$position$src$math$$default = src$public$vendor$metal$position$src$math$$math;

    /**
     * Class with static methods responsible for doing browser position checks.
     */

    var src$public$vendor$metal$position$src$position$$position = (function () {
        function src$public$vendor$metal$position$src$position$$position() {
            _classCallCheck(this, src$public$vendor$metal$position$src$position$$position);
        }

        _createClass(src$public$vendor$metal$position$src$position$$position, null, {
            getClientHeight: {
                /**
                 * Gets the client height of the specified node. Scroll height is not
                 * included.
                 * @param {Element|Document|Window=} node
                 * @return {Number}
                 */

                value: function getClientHeight(node) {
                    return this.getClientSize_(node, "Height");
                }
            },
            getClientSize_: {

                /**
                 * Gets the client height or width of the specified node. Scroll height is
                 * not included.
                 * @param {Element|Document|Window=} node
                 * @param {string} `Width` or `Height` property.
                 * @return {Number}
                 * @protected
                 */

                value: function getClientSize_(node, prop) {
                    var el = node;
                    if (src$public$vendor$metaljs$src$core$$default.isWindow(node)) {
                        el = node.document.documentElement;
                    }
                    if (src$public$vendor$metaljs$src$core$$default.isDocument(node)) {
                        el = node.documentElement;
                    }
                    return el["client" + prop];
                }
            },
            getClientWidth: {

                /**
                 * Gets the client width of the specified node. Scroll width is not
                 * included.
                 * @param {Element|Document|Window=} node
                 * @return {Number}
                 */

                value: function getClientWidth(node) {
                    return this.getClientSize_(node, "Width");
                }
            },
            getDocumentRegion_: {

                /**
                 * Gets the region of the element, document or window.
                 * @param {Element|Document|Window=} opt_element Optional element to test.
                 * @return {!DOMRect} The returned value is a simulated DOMRect object which
                 *     is the union of the rectangles returned by getClientRects() for the
                 *     element, i.e., the CSS border-boxes associated with the element.
                 * @protected
                 */

                value: function getDocumentRegion_(opt_element) {
                    var height = this.getHeight(opt_element);
                    var width = this.getWidth(opt_element);
                    return this.makeRegion(height, height, 0, width, 0, width);
                }
            },
            getHeight: {

                /**
                 * Gets the height of the specified node. Scroll height is included.
                 * @param {Element|Document|Window=} node
                 * @return {Number}
                 */

                value: function getHeight(node) {
                    return this.getSize_(node, "Height");
                }
            },
            getRegion: {

                /**
                 * Gets the size of an element and its position relative to the viewport.
                 * @param {!Document|Element|Window} node
                 * @return {!DOMRect} The returned value is a DOMRect object which is the
                 *     union of the rectangles returned by getClientRects() for the element,
                 *     i.e., the CSS border-boxes associated with the element.
                 */

                value: function getRegion(node) {
                    if (src$public$vendor$metaljs$src$core$$default.isDocument(node) || src$public$vendor$metaljs$src$core$$default.isWindow(node)) {
                        return this.getDocumentRegion_(node);
                    }
                    return this.makeRegionFromBoundingRect_(node.getBoundingClientRect());
                }
            },
            getScrollLeft: {

                /**
                 * Gets the scroll left position of the specified node.
                 * @param {Element|Document|Window=} node
                 * @return {Number}
                 */

                value: function getScrollLeft(node) {
                    if (src$public$vendor$metaljs$src$core$$default.isWindow(node)) {
                        return node.pageXOffset;
                    }
                    if (src$public$vendor$metaljs$src$core$$default.isDocument(node)) {
                        return node.defaultView.pageXOffset;
                    }
                    return node.scrollLeft;
                }
            },
            getScrollTop: {

                /**
                 * Gets the scroll top position of the specified node.
                 * @param {Element|Document|Window=} node
                 * @return {Number}
                 */

                value: function getScrollTop(node) {
                    if (src$public$vendor$metaljs$src$core$$default.isWindow(node)) {
                        return node.pageYOffset;
                    }
                    if (src$public$vendor$metaljs$src$core$$default.isDocument(node)) {
                        return node.defaultView.pageYOffset;
                    }
                    return node.scrollTop;
                }
            },
            getSize_: {

                /**
                 * Gets the height or width of the specified node. Scroll height is
                 * included.
                 * @param {Element|Document|Window=} node
                 * @param {string} `Width` or `Height` property.
                 * @return {Number}
                 * @protected
                 */

                value: function getSize_(node, prop) {
                    if (src$public$vendor$metaljs$src$core$$default.isWindow(node)) {
                        return this.getClientSize_(node, prop);
                    }
                    if (src$public$vendor$metaljs$src$core$$default.isDocument(node)) {
                        var docEl = node.documentElement;
                        return Math.max(node.body["scroll" + prop], docEl["scroll" + prop], node.body["offset" + prop], docEl["offset" + prop], docEl["client" + prop]);
                    }
                    return Math.max(node["client" + prop], node["scroll" + prop], node["offset" + prop]);
                }
            },
            getWidth: {

                /**
                 * Gets the width of the specified node. Scroll width is included.
                 * @param {Element|Document|Window=} node
                 * @return {Number}
                 */

                value: function getWidth(node) {
                    return this.getSize_(node, "Width");
                }
            },
            intersectRegion: {

                /**
                 * Tests if a region intersects with another.
                 * @param {DOMRect} r1
                 * @param {DOMRect} r2
                 * @return {boolean}
                 */

                value: function intersectRegion(r1, r2) {
                    return src$public$vendor$metal$position$src$math$$default.intersectRect(r1.top, r1.left, r1.bottom, r1.right, r2.top, r2.left, r2.bottom, r2.right);
                }
            },
            insideRegion: {

                /**
                 * Tests if a region is inside another.
                 * @param {DOMRect} r1
                 * @param {DOMRect} r2
                 * @return {boolean}
                 */

                value: function insideRegion(r1, r2) {
                    return r2.top >= r1.top && r2.bottom <= r1.bottom && r2.right <= r1.right && r2.left >= r1.left;
                }
            },
            insideViewport: {

                /**
                 * Tests if a region is inside viewport region.
                 * @param {DOMRect} region
                 * @return {boolean}
                 */

                value: function insideViewport(region) {
                    return this.insideRegion(this.getRegion(window), region);
                }
            },
            intersection: {

                /**
                 * Computes the intersection region between two regions.
                 * @param {DOMRect} r1
                 * @param {DOMRect} r2
                 * @return {?DOMRect} Intersection region or null if regions doesn't
                 *     intersects.
                 */

                value: function intersection(r1, r2) {
                    if (!this.intersectRegion(r1, r2)) {
                        return null;
                    }
                    var bottom = Math.min(r1.bottom, r2.bottom);
                    var right = Math.min(r1.right, r2.right);
                    var left = Math.max(r1.left, r2.left);
                    var top = Math.max(r1.top, r2.top);
                    return this.makeRegion(bottom, bottom - top, left, right, top, right - left);
                }
            },
            makeRegion: {

                /**
                 * Makes a region object. It's a writable version of DOMRect.
                 * @param {Number} bottom
                 * @param {Number} height
                 * @param {Number} left
                 * @param {Number} right
                 * @param {Number} top
                 * @param {Number} width
                 * @return {!DOMRect} The returned value is a DOMRect object which is the
                 *     union of the rectangles returned by getClientRects() for the element,
                 *     i.e., the CSS border-boxes associated with the element.
                 */

                value: function makeRegion(bottom, height, left, right, top, width) {
                    return {
                        bottom: bottom,
                        height: height,
                        left: left,
                        right: right,
                        top: top,
                        width: width
                    };
                }
            },
            makeRegionFromBoundingRect_: {

                /**
                 * Makes a region from a DOMRect result from `getBoundingClientRect`.
                 * @param  {!DOMRect} The returned value is a DOMRect object which is the
                 *     union of the rectangles returned by getClientRects() for the element,
                 *     i.e., the CSS border-boxes associated with the element.
                 * @return {DOMRect} Writable version of DOMRect.
                 * @protected
                 */

                value: function makeRegionFromBoundingRect_(rect) {
                    return this.makeRegion(rect.bottom, rect.height, rect.left, rect.right, rect.top, rect.width);
                }
            }
        });

        return src$public$vendor$metal$position$src$position$$position;
    })();

    var src$public$vendor$metal$position$src$position$$default = src$public$vendor$metal$position$src$position$$position;
    "use strict";

    var src$public$vendor$metaljs$src$array$array$$array = (function () {
        function src$public$vendor$metaljs$src$array$array$$array() {
            _classCallCheck(this, src$public$vendor$metaljs$src$array$array$$array);
        }

        _createClass(src$public$vendor$metaljs$src$array$array$$array, null, {
            equal: {
                /**
                 * Checks if the given arrays have the same content.
                 * @param {!Array<*>} arr1
                 * @param {!Array<*>} arr2
                 * @return {boolean}
                 */

                value: function equal(arr1, arr2) {
                    for (var i = 0; i < arr1.length; i++) {
                        if (arr1[i] !== arr2[i]) {
                            return false;
                        }
                    }
                    return arr1.length === arr2.length;
                }
            },
            firstDefinedValue: {

                /**
                 * Returns the first value in the given array that isn't undefined.
                 * @param {!Array} arr
                 * @return {*}
                 */

                value: function firstDefinedValue(arr) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] !== undefined) {
                            return arr[i];
                        }
                    }
                }
            },
            flatten: {

                /**
                 * Transforms the input nested array to become flat.
                 * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
                 * @param {Array.<*>} opt_output Optional output array.
                 * @return {Array.<*>} Flat array.
                 */

                value: function flatten(arr, opt_output) {
                    var output = opt_output || [];
                    for (var i = 0; i < arr.length; i++) {
                        if (Array.isArray(arr[i])) {
                            src$public$vendor$metaljs$src$array$array$$array.flatten(arr[i], output);
                        } else {
                            output.push(arr[i]);
                        }
                    }
                    return output;
                }
            },
            remove: {

                /**
                 * Removes the first occurrence of a particular value from an array.
                 * @param {Array.<T>} arr Array from which to remove value.
                 * @param {T} obj Object to remove.
                 * @return {boolean} True if an element was removed.
                 * @template T
                 */

                value: function remove(arr, obj) {
                    var i = arr.indexOf(obj);
                    var rv;
                    if (rv = i >= 0) {
                        src$public$vendor$metaljs$src$array$array$$array.removeAt(arr, i);
                    }
                    return rv;
                }
            },
            removeAt: {

                /**
                 * Removes from an array the element at index i
                 * @param {Array} arr Array or array like object from which to remove value.
                 * @param {number} i The index to remove.
                 * @return {boolean} True if an element was removed.
                 */

                value: function removeAt(arr, i) {
                    return Array.prototype.splice.call(arr, i, 1).length === 1;
                }
            }
        });

        return src$public$vendor$metaljs$src$array$array$$array;
    })();

    var src$public$vendor$metaljs$src$array$array$$default = src$public$vendor$metaljs$src$array$array$$array;
    "use strict";

    /**
     * EventEmitter utility.
     * @constructor
     * @extends {Disposable}
     */

    var src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter = (function (_src$public$vendor$metaljs$src$disposable$Disposable$$default2) {
        function src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter() {
            _classCallCheck(this, src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter.prototype), "constructor", this).call(this);

            /**
             * Holds event listeners scoped by event type.
             * @type {!Object<string, !Array<!function()>>}
             * @protected
             */
            this.events_ = [];

            /**
             * The maximum number of listeners allowed for each event type. If the number
             * becomes higher than the max, a warning will be issued.
             * @type {number}
             * @protected
             */
            this.maxListeners_ = 10;

            /**
             * Configuration option which determines if an event facade should be sent
             * as a param of listeners when emitting events. If set to true, the facade
             * will be passed as the first argument of the listener.
             * @type {boolean}
             * @protected
             */
            this.shouldUseFacade_ = false;
        }

        _inherits(src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter, _src$public$vendor$metaljs$src$disposable$Disposable$$default2);

        _createClass(src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter, {
            addListener: {

                /**
                 * Adds a listener to the end of the listeners array for the specified events.
                 * @param {!(Array|string)} events
                 * @param {!Function} listener
                 * @return {!EventHandle} Can be used to remove the listener.
                 */

                value: function addListener(events, listener) {
                    this.validateListener_(listener);

                    events = this.normalizeEvents_(events);
                    for (var i = 0; i < events.length; i++) {
                        this.addSingleListener_(events[i], listener);
                    }

                    return new src$public$vendor$metaljs$src$events$EventHandle$$default(this, events, listener);
                }
            },
            addSingleListener_: {

                /**
                 * Adds a listener to the end of the listeners array for a single event.
                 * @param {string} event
                 * @param {!Function} listener
                 * @param {Function=} opt_origin The original function that was added as a
                 *   listener, if there is any.
                 * @protected
                 */

                value: function addSingleListener_(event, listener, opt_origin) {
                    this.emit("newListener", event, listener);

                    if (!this.events_[event]) {
                        this.events_[event] = [];
                    }
                    this.events_[event].push({
                        fn: listener,
                        origin: opt_origin
                    });

                    var listeners = this.events_[event];
                    if (listeners.length > this.maxListeners_ && !listeners.warned) {
                        console.warn("Possible EventEmitter memory leak detected. %d listeners added " + "for event %s. Use emitter.setMaxListeners() to increase limit.", listeners.length, event);
                        listeners.warned = true;
                    }
                }
            },
            disposeInternal: {

                /**
                 * Disposes of this instance's object references.
                 * @override
                 */

                value: function disposeInternal() {
                    this.events_ = [];
                }
            },
            emit: {

                /**
                 * Execute each of the listeners in order with the supplied arguments.
                 * @param {string} event
                 * @param {*} opt_args [arg1], [arg2], [...]
                 * @return {boolean} Returns true if event had listeners, false otherwise.
                 */

                value: function emit(event) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var listened = false;
                    var listeners = this.listeners(event);

                    if (this.getShouldUseFacade()) {
                        var facade = {
                            type: event
                        };
                        args = [facade].concat(args);
                    }

                    for (var i = 0; i < listeners.length; i++) {
                        listeners[i].apply(this, args);
                        listened = true;
                    }

                    return listened;
                }
            },
            getShouldUseFacade: {

                /**
                 * Gets the configuration option which determines if an event facade should
                 * be sent as a param of listeners when emitting events. If set to true, the
                 * facade will be passed as the first argument of the listener.
                 * @return {boolean}
                 */

                value: function getShouldUseFacade() {
                    return this.shouldUseFacade_;
                }
            },
            listeners: {

                /**
                 * Returns an array of listeners for the specified event.
                 * @param {string} event
                 * @return {Array} Array of listeners.
                 */

                value: function listeners(event) {
                    return (this.events_[event] || []).map(function (listener) {
                        return listener.fn;
                    });
                }
            },
            many: {

                /**
                 * Adds a listener that will be invoked a fixed number of times for the
                 * events. After each event is triggered the specified amount of times, the
                 * listener is removed for it.
                 * @param {!(Array|string)} events
                 * @param {number} amount The amount of times this event should be listened
                 * to.
                 * @param {!Function} listener
                 * @return {!EventHandle} Can be used to remove the listener.
                 */

                value: function many(events, amount, listener) {
                    events = this.normalizeEvents_(events);
                    for (var i = 0; i < events.length; i++) {
                        this.many_(events[i], amount, listener);
                    }

                    return new src$public$vendor$metaljs$src$events$EventHandle$$default(this, events, listener);
                }
            },
            many_: {

                /**
                 * Adds a listener that will be invoked a fixed number of times for a single
                 * event. After the event is triggered the specified amount of times, the
                 * listener is removed.
                 * @param {string} event
                 * @param {number} amount The amount of times this event should be listened
                 * to.
                 * @param {!Function} listener
                 * @protected
                 */

                value: function many_(event, amount, listener) {
                    var self = this;

                    if (amount <= 0) {
                        return;
                    }

                    function handlerInternal() {
                        if (--amount === 0) {
                            self.removeListener(event, handlerInternal);
                        }
                        listener.apply(self, arguments);
                    }

                    self.addSingleListener_(event, handlerInternal, listener);
                }
            },
            matchesListener_: {

                /**
                 * Checks if a listener object matches the given listener function. To match,
                 * it needs to either point to that listener or have it as its origin.
                 * @param {!Object} listenerObj
                 * @param {!Function} listener
                 * @return {boolean}
                 * @protected
                 */

                value: function matchesListener_(listenerObj, listener) {
                    return listenerObj.fn === listener || listenerObj.origin && listenerObj.origin === listener;
                }
            },
            normalizeEvents_: {

                /**
                 * Converts the parameter to an array if only one event is given.
                 * @param  {!(Array|string)} events
                 * @return {!Array}
                 * @protected
                 */

                value: function normalizeEvents_(events) {
                    return src$public$vendor$metaljs$src$core$$default.isString(events) ? [events] : events;
                }
            },
            off: {

                /**
                 * Removes a listener for the specified events.
                 * Caution: changes array indices in the listener array behind the listener.
                 * @param {!(Array|string)} events
                 * @param {!Function} listener
                 * @return {!Object} Returns emitter, so calls can be chained.
                 */

                value: function off(events, listener) {
                    this.validateListener_(listener);

                    events = this.normalizeEvents_(events);
                    for (var i = 0; i < events.length; i++) {
                        var listenerObjs = this.events_[events[i]] || [];
                        this.removeMatchingListenerObjs_(listenerObjs, listener);
                    }

                    return this;
                }
            },
            on: {

                /**
                 * Adds a listener to the end of the listeners array for the specified events.
                 * @param {!(Array|string)} events
                 * @param {!Function} listener
                 * @return {!EventHandle} Can be used to remove the listener.
                 */

                value: function on() {
                    return this.addListener.apply(this, arguments);
                }
            },
            once: {

                /**
                 * Adds a one time listener for the events. This listener is invoked only the
                 * next time each event is fired, after which it is removed.
                 * @param {!(Array|string)} events
                 * @param {!Function} listener
                 * @return {!EventHandle} Can be used to remove the listener.
                 */

                value: function once(events, listener) {
                    return this.many(events, 1, listener);
                }
            },
            removeAllListeners: {

                /**
                 * Removes all listeners, or those of the specified events. It's not a good
                 * idea to remove listeners that were added elsewhere in the code,
                 * especially when it's on an emitter that you didn't create.
                 * @param {(Array|string)=} opt_events
                 * @return {!Object} Returns emitter, so calls can be chained.
                 */

                value: function removeAllListeners(opt_events) {
                    if (opt_events) {
                        var events = this.normalizeEvents_(opt_events);
                        for (var i = 0; i < events.length; i++) {
                            this.events_[events[i]] = null;
                        }
                    } else {
                        this.events_ = {};
                    }
                    return this;
                }
            },
            removeMatchingListenerObjs_: {

                /**
                 * Removes all listener objects from the given array that match the given
                 * listener function.
                 * @param {!Array.<Object>} listenerObjs
                 * @param {!Function} listener
                 * @protected
                 */

                value: function removeMatchingListenerObjs_(listenerObjs, listener) {
                    for (var i = listenerObjs.length - 1; i >= 0; i--) {
                        if (this.matchesListener_(listenerObjs[i], listener)) {
                            listenerObjs.splice(i, 1);
                        }
                    }
                }
            },
            removeListener: {

                /**
                 * Removes a listener for the specified events.
                 * Caution: changes array indices in the listener array behind the listener.
                 * @param {!(Array|string)} events
                 * @param {!Function} listener
                 * @return {!Object} Returns emitter, so calls can be chained.
                 */

                value: function removeListener() {
                    return this.off.apply(this, arguments);
                }
            },
            setMaxListeners: {

                /**
                 * By default EventEmitters will print a warning if more than 10 listeners
                 * are added for a particular event. This is a useful default which helps
                 * finding memory leaks. Obviously not all Emitters should be limited to 10.
                 * This function allows that to be increased. Set to zero for unlimited.
                 * @param {number} max The maximum number of listeners.
                 * @return {!Object} Returns emitter, so calls can be chained.
                 */

                value: function setMaxListeners(max) {
                    this.maxListeners_ = max;
                    return this;
                }
            },
            setShouldUseFacade: {

                /**
                 * Sets the configuration option which determines if an event facade should
                 * be sent as a param of listeners when emitting events. If set to true, the
                 * facade will be passed as the first argument of the listener.
                 * @param {boolean} shouldUseFacade
                 * @return {!Object} Returns emitter, so calls can be chained.
                 */

                value: function setShouldUseFacade(shouldUseFacade) {
                    this.shouldUseFacade_ = shouldUseFacade;
                    return this;
                }
            },
            validateListener_: {

                /**
                 * Checks if the given listener is valid, throwing an exception when it's not.
                 * @param  {*} listener
                 * @protected
                 */

                value: function validateListener_(listener) {
                    if (!src$public$vendor$metaljs$src$core$$default.isFunction(listener)) {
                        throw new TypeError("Listener must be a function");
                    }
                }
            }
        });

        return src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter;
    })(src$public$vendor$metaljs$src$disposable$Disposable$$default);

    var src$public$vendor$metaljs$src$events$EventEmitter$$default = src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter;

    "use strict";

    var src$public$vendor$metaljs$src$async$async$$async = {};

    /**
     * Throw an item without interrupting the current execution context.  For
     * example, if processing a group of items in a loop, sometimes it is useful
     * to report an error while still allowing the rest of the batch to be
     * processed.
     * @param {*} exception
     */
    src$public$vendor$metaljs$src$async$async$$async.throwException = function (exception) {
        // Each throw needs to be in its own context.
        src$public$vendor$metaljs$src$async$async$$async.nextTick(function () {
            throw exception;
        });
    };

    /**
     * Fires the provided callback just before the current callstack unwinds, or as
     * soon as possible after the current JS execution context.
     * @param {function(this:THIS)} callback
     * @param {THIS=} opt_context Object to use as the "this value" when calling
     *     the provided function.
     * @template THIS
     */
    src$public$vendor$metaljs$src$async$async$$async.run = function (callback, opt_context) {
        if (!src$public$vendor$metaljs$src$async$async$$async.run.workQueueScheduled_) {
            // Nothing is currently scheduled, schedule it now.
            src$public$vendor$metaljs$src$async$async$$async.nextTick(src$public$vendor$metaljs$src$async$async$$async.run.processWorkQueue);
            src$public$vendor$metaljs$src$async$async$$async.run.workQueueScheduled_ = true;
        }

        src$public$vendor$metaljs$src$async$async$$async.run.workQueue_.push(new src$public$vendor$metaljs$src$async$async$$async.run.WorkItem_(callback, opt_context));
    };

    /** @private {boolean} */
    src$public$vendor$metaljs$src$async$async$$async.run.workQueueScheduled_ = false;

    /** @private {!Array.<!async.run.WorkItem_>} */
    src$public$vendor$metaljs$src$async$async$$async.run.workQueue_ = [];

    /**
     * Run any pending async.run work items. This function is not intended
     * for general use, but for use by entry point handlers to run items ahead of
     * async.nextTick.
     */
    src$public$vendor$metaljs$src$async$async$$async.run.processWorkQueue = function () {
        // NOTE: additional work queue items may be pushed while processing.
        while (src$public$vendor$metaljs$src$async$async$$async.run.workQueue_.length) {
            // Don't let the work queue grow indefinitely.
            var workItems = src$public$vendor$metaljs$src$async$async$$async.run.workQueue_;
            src$public$vendor$metaljs$src$async$async$$async.run.workQueue_ = [];
            for (var i = 0; i < workItems.length; i++) {
                var workItem = workItems[i];
                try {
                    workItem.fn.call(workItem.scope);
                } catch (e) {
                    src$public$vendor$metaljs$src$async$async$$async.throwException(e);
                }
            }
        }

        // There are no more work items, reset the work queue.
        src$public$vendor$metaljs$src$async$async$$async.run.workQueueScheduled_ = false;
    };

    /**
     * @constructor
     * @final
     * @struct
     * @private
     *
     * @param {function()} fn
     * @param {Object|null|undefined} scope
     */
    src$public$vendor$metaljs$src$async$async$$async.run.WorkItem_ = function (fn, scope) {
        /** @const */
        this.fn = fn;
        /** @const */
        this.scope = scope;
    };

    /**
     * Fires the provided callbacks as soon as possible after the current JS
     * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
     * reasons.
     * @param {function(this:SCOPE)} callback Callback function to fire as soon as
     *     possible.
     * @param {SCOPE=} opt_context Object in whose scope to call the listener.
     * @template SCOPE
     */
    src$public$vendor$metaljs$src$async$async$$async.nextTick = function (callback, opt_context) {
        var cb = callback;
        if (opt_context) {
            cb = callback.bind(opt_context);
        }
        cb = src$public$vendor$metaljs$src$async$async$$async.nextTick.wrapCallback_(cb);
        // Introduced and currently only supported by IE10.
        if (src$public$vendor$metaljs$src$core$$default.isFunction(window.setImmediate)) {
            window.setImmediate(cb);
            return;
        }
        // Look for and cache the custom fallback version of setImmediate.
        if (!src$public$vendor$metaljs$src$async$async$$async.nextTick.setImmediate_) {
            src$public$vendor$metaljs$src$async$async$$async.nextTick.setImmediate_ = src$public$vendor$metaljs$src$async$async$$async.nextTick.getSetImmediateEmulator_();
        }
        src$public$vendor$metaljs$src$async$async$$async.nextTick.setImmediate_(cb);
    };

    /**
     * Cache for the setImmediate implementation.
     * @type {function(function())}
     * @private
     */
    src$public$vendor$metaljs$src$async$async$$async.nextTick.setImmediate_ = null;

    /**
     * Determines the best possible implementation to run a function as soon as
     * the JS event loop is idle.
     * @return {function(function())} The "setImmediate" implementation.
     * @private
     */
    src$public$vendor$metaljs$src$async$async$$async.nextTick.getSetImmediateEmulator_ = function () {
        // Create a private message channel and use it to postMessage empty messages
        // to ourselves.
        var Channel = window.MessageChannel;
        // If MessageChannel is not available and we are in a browser, implement
        // an iframe based polyfill in browsers that have postMessage and
        // document.addEventListener. The latter excludes IE8 because it has a
        // synchronous postMessage implementation.
        if (typeof Channel === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener) {
            /** @constructor */
            Channel = function () {
                // Make an empty, invisible iframe.
                var iframe = document.createElement("iframe");
                iframe.style.display = "none";
                iframe.src = "";
                document.documentElement.appendChild(iframe);
                var win = iframe.contentWindow;
                var doc = win.document;
                doc.open();
                doc.write("");
                doc.close();
                var message = "callImmediate" + Math.random();
                var origin = win.location.protocol + "//" + win.location.host;
                var onmessage = (function (e) {
                    // Validate origin and message to make sure that this message was
                    // intended for us.
                    if (e.origin !== origin && e.data !== message) {
                        return;
                    }
                    this.port1.onmessage();
                }).bind(this);
                win.addEventListener("message", onmessage, false);
                this.port1 = {};
                this.port2 = {
                    postMessage: function postMessage() {
                        win.postMessage(message, origin);
                    }
                };
            };
        }
        if (typeof Channel !== "undefined") {
            var channel = new Channel();
            // Use a fifo linked list to call callbacks in the right order.
            var head = {};
            var tail = head;
            channel.port1.onmessage = function () {
                head = head.next;
                var cb = head.cb;
                head.cb = null;
                cb();
            };
            return function (cb) {
                tail.next = {
                    cb: cb
                };
                tail = tail.next;
                channel.port2.postMessage(0);
            };
        }
        // Implementation for IE6-8: Script elements fire an asynchronous
        // onreadystatechange event when inserted into the DOM.
        if (typeof document !== "undefined" && "onreadystatechange" in document.createElement("script")) {
            return function (cb) {
                var script = document.createElement("script");
                script.onreadystatechange = function () {
                    // Clean up and call the callback.
                    script.onreadystatechange = null;
                    script.parentNode.removeChild(script);
                    script = null;
                    cb();
                    cb = null;
                };
                document.documentElement.appendChild(script);
            };
        }
        // Fall back to setTimeout with 0. In browsers this creates a delay of 5ms
        // or more.
        return function (cb) {
            setTimeout(cb, 0);
        };
    };

    /**
     * Helper function that is overrided to protect callbacks with entry point
     * monitor if the application monitors entry points.
     * @param {function()} callback Callback function to fire as soon as possible.
     * @return {function()} The wrapped callback.
     * @private
     */
    src$public$vendor$metaljs$src$async$async$$async.nextTick.wrapCallback_ = function (opt_returnValue) {
        return opt_returnValue;
    };

    var src$public$vendor$metaljs$src$async$async$$default = src$public$vendor$metaljs$src$async$async$$async;
    "use strict";

    /**
     * Attribute adds support for having object properties that can be watched for
     * changes, as well as configured with validators, setters and other options.
     * See the `addAttr` method for a complete list of available attribute
     * configuration options.
     * @constructor
     * @extends {EventEmitter}
     */

    var src$public$vendor$metaljs$src$attribute$Attribute$$Attribute = (function (_src$public$vendor$metaljs$src$events$EventEmitter$$default) {
        function src$public$vendor$metaljs$src$attribute$Attribute$$Attribute(opt_config) {
            _classCallCheck(this, src$public$vendor$metaljs$src$attribute$Attribute$$Attribute);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.prototype), "constructor", this).call(this);

            /**
             * Object with information about the batch event that is currently
             * scheduled, or null if none is.
             * @type {Object}
             * @protected
             */
            this.scheduledBatchData_ = null;

            /**
             * Object that contains information about all this instance's attributes.
             * @type {!Object<string, !Object>}
             * @protected
             */
            this.attrsInfo_ = {};

            this.mergeInvalidAttrs_();
            this.addAttrsFromStaticHint_(opt_config);
        }

        _inherits(src$public$vendor$metaljs$src$attribute$Attribute$$Attribute, _src$public$vendor$metaljs$src$events$EventEmitter$$default);

        _createClass(src$public$vendor$metaljs$src$attribute$Attribute$$Attribute, {
            addAttr: {

                /**
                 * Adds the given attribute.
                 * @param {string} name The name of the new attribute.
                 * @param {Object.<string, *>=} config The configuration object for the new attribute.
                 *   This object can have the following keys:
                 *   setter - Function for normalizing new attribute values. It receives the new value
                 *   that was set, and returns the value that should be stored.
                 *   validator - Function that validates new attribute values. When it returns false,
                 *   the new value is ignored.
                 *   value - The default value for this attribute. Note that setting this to an object
                 *   will cause all attribute instances to use the same reference to the object. To
                 *   have each attribute instance use a different reference, use the `valueFn` option
                 *   instead.
                 *   valueFn - A function that returns the default value for this attribute.
                 *   writeOnce - Ignores writes to the attribute after it's been first written to. That is,
                 *   allows writes only when setting the attribute for the first time.
                 * @param {*} initialValue The initial value of the new attribute. This value has higher
                 *   precedence than the default value specified in this attribute's configuration.
                 */

                value: function addAttr(name, config, initialValue) {
                    this.buildAttrInfo_(name, config, initialValue);

                    Object.defineProperty(this, name, {
                        configurable: true,
                        get: this.getAttrValue_.bind(this, name),
                        set: this.setAttrValue_.bind(this, name)
                    });
                }
            },
            addAttrs: {

                /**
                 * Adds the given attributes.
                 * @param {!Object.<string, !Object>} configs An object that maps the names of all the
                 *   attributes to be added to their configuration objects.
                 * @param {!Object.<string, *>} initialValues An object that maps the names of
                 *   attributes to their initial values. These values have higher precedence than the
                 *   default values specified in the attribute configurations.
                 * @param {boolean|Object=} opt_defineContext If value is false
                 *     `Object.defineProperties` will not be called. If value is a valid
                 *     context it will be used as definition context, otherwise `this`
                 *     will be the context.
                 */

                value: function addAttrs(configs, initialValues, opt_defineContext) {
                    initialValues = initialValues || {};
                    var names = Object.keys(configs);

                    var props = {};
                    for (var i = 0; i < names.length; i++) {
                        var name = names[i];
                        this.buildAttrInfo_(name, configs[name], initialValues[name]);
                        props[name] = this.buildAttrPropertyDef_(name);
                    }

                    if (opt_defineContext !== false) {
                        Object.defineProperties(opt_defineContext || this, props);
                    }
                }
            },
            addAttrsFromStaticHint_: {

                /**
                 * Adds attributes from super classes static hint `MyClass.ATTRS = {};`.
                 * @param {!Object.<string, !Object>} configs An object that maps the names
                 *     of all the attributes to be added to their configuration objects.
                 * @protected
                 */

                value: function addAttrsFromStaticHint_(config) {
                    var ctor = this.constructor;
                    var defineContext = false;
                    if (src$public$vendor$metaljs$src$core$$default.mergeSuperClassesProperty(ctor, "ATTRS", this.mergeAttrs_)) {
                        defineContext = ctor.prototype;
                    }
                    this.addAttrs(ctor.ATTRS_MERGED, config, defineContext);
                }
            },
            assertValidAttrName_: {

                /**
                 * Checks that the given name is a valid attribute name. If it's not, an error
                 * will be thrown.
                 * @param {string} name The name to be validated.
                 * @throws {Error}
                 */

                value: function assertValidAttrName_(name) {
                    if (this.constructor.INVALID_ATTRS_MERGED[name]) {
                        throw new Error("It's not allowed to create an attribute with the name \"" + name + "\".");
                    }
                }
            },
            buildAttrInfo_: {

                /**
                 * Builds the info object for the requested attribute.
                 * @param {string} name The name of the attribute.
                 * @param {Object} config The config object of the attribute.
                 * @param {*} initialValue The initial value of the attribute.
                 * @protected
                 */

                value: function buildAttrInfo_(name, config, initialValue) {
                    this.assertValidAttrName_(name);

                    this.attrsInfo_[name] = {
                        config: config || {},
                        initialValue: initialValue,
                        state: src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.UNINITIALIZED
                    };
                }
            },
            buildAttrPropertyDef_: {

                /**
                 * Builds the property definition object for the requested attribute.
                 * @param {string} name The name of the attribute.
                 * @return {!Object}
                 * @protected
                 */

                value: function buildAttrPropertyDef_(name) {
                    return {
                        configurable: true,
                        get: function get() {
                            return this.getAttrValue_(name);
                        },
                        set: function set(val) {
                            this.setAttrValue_(name, val);
                        }
                    };
                }
            },
            callFunction_: {

                /**
                 * Calls the requested function, running the appropriate code for when it's
                 * passed as an actual function object or just the function's name.
                 * @param {!Function|string} fn Function, or name of the function to run.
                 * @param {!Array} An optional array of parameters to be passed to the
                 *   function that will be called.
                 * @return {*} The return value of the called function.
                 * @protected
                 */

                value: function callFunction_(fn, args) {
                    if (src$public$vendor$metaljs$src$core$$default.isString(fn)) {
                        return this[fn].apply(this, args);
                    } else if (src$public$vendor$metaljs$src$core$$default.isFunction(fn)) {
                        return fn.apply(this, args);
                    }
                }
            },
            callSetter_: {

                /**
                 * Calls the attribute's setter, if there is one.
                 * @param {string} name The name of the attribute.
                 * @param {*} value The value to be set.
                 * @return {*} The final value to be set.
                 */

                value: function callSetter_(name, value) {
                    var info = this.attrsInfo_[name];
                    var config = info.config;
                    if (config.setter) {
                        value = this.callFunction_(config.setter, [value]);
                    }
                    return value;
                }
            },
            callValidator_: {

                /**
                 * Calls the attribute's validator, if there is one.
                 * @param {string} name The name of the attribute.
                 * @param {*} value The value to be validated.
                 * @return {boolean} Flag indicating if value is valid or not.
                 */

                value: function callValidator_(name, value) {
                    var info = this.attrsInfo_[name];
                    var config = info.config;
                    if (config.validator) {
                        return this.callFunction_(config.validator, [value]);
                    }
                    return true;
                }
            },
            canSetAttribute: {

                /**
                 * Checks if the it's allowed to write on the requested attribute.
                 * @param {string} name The name of the attribute.
                 * @return {boolean}
                 */

                value: function canSetAttribute(name) {
                    var info = this.attrsInfo_[name];
                    return !info.config.writeOnce || !info.written;
                }
            },
            disposeInternal: {

                /**
                 * @inheritDoc
                 */

                value: function disposeInternal() {
                    _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.prototype), "disposeInternal", this).call(this);
                    this.attrsInfo_ = null;
                    this.scheduledBatchData_ = null;
                }
            },
            emitBatchEvent_: {

                /**
                 * Emits the attribute change batch event.
                 * @protected
                 */

                value: function emitBatchEvent_() {
                    if (!this.isDisposed()) {
                        var data = this.scheduledBatchData_;
                        this.scheduledBatchData_ = null;
                        this.emit("attrsChanged", data);
                    }
                }
            },
            getAttrConfig: {

                /**
                 * Gets the config object for the requested attribute.
                 * @param {string} name The attribute's name.
                 * @return {!Object}
                 * @protected
                 */

                value: function getAttrConfig(name) {
                    return (this.attrsInfo_[name] || {}).config;
                }
            },
            getAttrs: {

                /**
                 * Returns an object that maps all attribute names to their values.
                 * @return {Object.<string, *>}
                 */

                value: function getAttrs() {
                    var attrsMap = {};
                    var names = this.getAttrNames();

                    for (var i = 0; i < names.length; i++) {
                        attrsMap[names[i]] = this[names[i]];
                    }

                    return attrsMap;
                }
            },
            getAttrNames: {

                /**
                 * Returns an array with all attribute names.
                 * @return {Array.<string>}
                 */

                value: function getAttrNames() {
                    return Object.keys(this.attrsInfo_);
                }
            },
            getAttrValue_: {

                /**
                 * Gets the value of the specified attribute. This is passed as that attribute's
                 * getter to the `Object.defineProperty` call inside the `addAttr` method.
                 * @param {string} name The name of the attribute.
                 * @return {*}
                 * @protected
                 */

                value: function getAttrValue_(name) {
                    this.initAttr_(name);

                    return this.attrsInfo_[name].value;
                }
            },
            informChange_: {

                /**
                 * Informs of changes to an attributes value through an event. Won't trigger
                 * the event if the value hasn't changed or if it's being initialized.
                 * @param {string} name The name of the attribute.
                 * @param {*} prevVal The previous value of the attribute.
                 * @protected
                 */

                value: function informChange_(name, prevVal) {
                    if (this.shouldInformChange_(name, prevVal)) {
                        var data = {
                            attrName: name,
                            newVal: this[name],
                            prevVal: prevVal
                        };
                        this.emit(name + "Changed", data);
                        this.scheduleBatchEvent_(data);
                    }
                }
            },
            initAttr_: {

                /**
                 * Initializes the specified attribute, giving it a first value.
                 * @param {string} name The name of the attribute.
                 * @protected
                 */

                value: function initAttr_(name) {
                    var info = this.attrsInfo_[name];
                    if (info.state !== src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.UNINITIALIZED) {
                        return;
                    }

                    info.state = src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.INITIALIZING;
                    this.setInitialValue_(name);
                    if (!info.written) {
                        info.state = src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.INITIALIZING_DEFAULT;
                        this.setDefaultValue_(name);
                    }
                    info.state = src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.INITIALIZED;
                }
            },
            mergeAttrs_: {

                /**
                 * Merges an array of values for the ATTRS property into a single object.
                 * @param {!Array} values The values to be merged.
                 * @return {!Object} The merged value.
                 * @protected
                 */

                value: function mergeAttrs_(values) {
                    return src$public$vendor$metaljs$src$object$object$$default.mixin.apply(null, [{}].concat(values.reverse()));
                }
            },
            mergeInvalidAttrs_: {

                /**
                 * Merges the values of the `INVALID_ATTRS` static for the whole hierarchy of
                 * the current instance.
                 * @protected
                 */

                value: function mergeInvalidAttrs_() {
                    src$public$vendor$metaljs$src$core$$default.mergeSuperClassesProperty(this.constructor, "INVALID_ATTRS", function (values) {
                        return src$public$vendor$metaljs$src$array$array$$default.flatten(values).reduce(function (merged, val) {
                            if (val) {
                                merged[val] = true;
                            }
                            return merged;
                        }, {});
                    });
                }
            },
            removeAttr: {

                /**
                 * Removes the requested attribute.
                 * @param {string} name The name of the attribute.
                 */

                value: function removeAttr(name) {
                    this.attrsInfo_[name] = null;
                    delete this[name];
                }
            },
            scheduleBatchEvent_: {

                /**
                 * Schedules an attribute change batch event to be emitted asynchronously.
                 * @param {!Object} attrChangeData Information about an attribute's update.
                 * @protected
                 */

                value: function scheduleBatchEvent_(attrChangeData) {
                    if (!this.scheduledBatchData_) {
                        src$public$vendor$metaljs$src$async$async$$default.nextTick(this.emitBatchEvent_, this);
                        this.scheduledBatchData_ = {
                            changes: {}
                        };
                    }

                    var name = attrChangeData.attrName;
                    var changes = this.scheduledBatchData_.changes;
                    if (changes[name]) {
                        changes[name].newVal = attrChangeData.newVal;
                    } else {
                        changes[name] = attrChangeData;
                    }
                }
            },
            setAttrs: {

                /**
                 * Sets the value of all the specified attributes.
                 * @param {!Object.<string,*>} values A map of attribute names to the values they
                 *   should be set to.
                 */

                value: function setAttrs(values) {
                    var names = Object.keys(values);

                    for (var i = 0; i < names.length; i++) {
                        this[names[i]] = values[names[i]];
                    }
                }
            },
            setAttrValue_: {

                /**
                 * Sets the value of the specified attribute. This is passed as that attribute's
                 * setter to the `Object.defineProperty` call inside the `addAttr` method.
                 * @param {string} name The name of the attribute.
                 * @param {*} value The new value of the attribute.
                 * @protected
                 */

                value: function setAttrValue_(name, value) {
                    if (!this.canSetAttribute(name) || !this.validateAttrValue_(name, value)) {
                        return;
                    }

                    var info = this.attrsInfo_[name];
                    if (info.initialValue === undefined && info.state === src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.UNINITIALIZED) {
                        info.state = src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.INITIALIZED;
                    }

                    var prevVal = this[name];
                    info.value = this.callSetter_(name, value);
                    info.written = true;
                    this.informChange_(name, prevVal);
                }
            },
            setDefaultValue_: {

                /**
                 * Sets the default value of the requested attribute.
                 * @param {string} name The name of the attribute.
                 * @return {*}
                 */

                value: function setDefaultValue_(name) {
                    var config = this.attrsInfo_[name].config;

                    if (config.value !== undefined) {
                        this[name] = config.value;
                    } else {
                        this[name] = this.callFunction_(config.valueFn);
                    }
                }
            },
            setInitialValue_: {

                /**
                 * Sets the initial value of the requested attribute.
                 * @param {string} name The name of the attribute.
                 * @return {*}
                 */

                value: function setInitialValue_(name) {
                    var info = this.attrsInfo_[name];
                    if (info.initialValue !== undefined) {
                        this[name] = info.initialValue;
                        info.initialValue = undefined;
                    }
                }
            },
            shouldInformChange_: {

                /**
                 * Checks if we should inform about an attributes update. Updates are ignored
                 * during attribute initialization. Otherwise, updates to primitive values
                 * are only informed when the new value is different from the previous
                 * one. Updates to objects (which includes functions and arrays) are always
                 * informed outside initialization though, since we can't be sure if all of
                 * the internal data has stayed the same.
                 * @param {string} name The name of the attribute.
                 * @param {*} prevVal The previous value of the attribute.
                 * @return {boolean}
                 */

                value: function shouldInformChange_(name, prevVal) {
                    var info = this.attrsInfo_[name];
                    return info.state === src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.INITIALIZED && (src$public$vendor$metaljs$src$core$$default.isObject(prevVal) || prevVal !== this[name]);
                }
            },
            validateAttrValue_: {

                /**
                 * Validates the attribute's value, which includes calling the validator defined
                 * in the attribute's configuration object, if there is one.
                 * @param {string} name The name of the attribute.
                 * @param {*} value The value to be validated.
                 * @return {boolean} Flag indicating if value is valid or not.
                 */

                value: function validateAttrValue_(name, value) {
                    var info = this.attrsInfo_[name];

                    return info.state === src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States.INITIALIZING_DEFAULT || this.callValidator_(name, value);
                }
            }
        });

        return src$public$vendor$metaljs$src$attribute$Attribute$$Attribute;
    })(src$public$vendor$metaljs$src$events$EventEmitter$$default);

    /**
     * A list with attribute names that will automatically be rejected as invalid.
     * Subclasses can define their own invalid attributes by setting this static
     * on their constructors, which will be merged together and handled automatically.
     * @type {!Array<string>}
     */
    src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.INVALID_ATTRS = ["attrs"];

    /**
     * Constants that represent the states that an attribute can be in.
     * @type {!Object}
     */
    src$public$vendor$metaljs$src$attribute$Attribute$$Attribute.States = {
        UNINITIALIZED: 0,
        INITIALIZING: 1,
        INITIALIZING_DEFAULT: 2,
        INITIALIZED: 3
    };

    var src$public$vendor$metaljs$src$attribute$Attribute$$default = src$public$vendor$metaljs$src$attribute$Attribute$$Attribute;
    "use strict";

    /**
     * EventEmitterProxy utility. It's responsible for linking two EventEmitter
     * instances together, emitting events from the first emitter through the
     * second one. That means that listening to a supported event on the target
     * emitter will mean listening to it on the origin emitter as well.
     * @param {EventEmitter | Element} originEmitter Events originated on this emitter
     *   will be fired for the target emitter's listeners as well. Can be either a real
     *   EventEmitter instance or a DOM element.
     * @param {EventEmitter} targetEmitter Event listeners attached to this emitter
     *   will also be triggered when the event is fired by the origin emitter.
     * @param {Object} opt_blacklist Optional blacklist of events that should not be
     *   proxied.
     * @constructor
     * @extends {Disposable}
     */

    var src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy = (function (_src$public$vendor$metaljs$src$disposable$Disposable$$default3) {
        function src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist, opt_whitelist) {
            _classCallCheck(this, src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy.prototype), "constructor", this).call(this);

            /**
             * Map of events that should not be proxied.
             * @type {Object}
             * @protected
             */
            this.blacklist_ = opt_blacklist || {};

            /**
             * The origin emitter. This emitter's events will be proxied through the
             * target emitter.
             * @type {EventEmitter}
             * @protected
             */
            this.originEmitter_ = originEmitter;

            /**
             * Holds a map of events from the origin emitter that are already being proxied.
             * @type {Object}
             * @protected
             */
            this.proxiedEvents_ = {};

            /**
             * The target emitter. This emitter will emit all events that come from
             * the origin emitter.
             * @type {EventEmitter}
             * @protected
             */
            this.targetEmitter_ = targetEmitter;

            /**
               * Map of events that should be proxied. If whitelist is set blacklist is
               * ignored.
               * @type {Object}
               * @protected
               */
            this.whitelist_ = opt_whitelist;

            this.startProxy_();
        }

        _inherits(src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy, _src$public$vendor$metaljs$src$disposable$Disposable$$default3);

        _createClass(src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy, {
            disposeInternal: {

                /**
                 * @inheritDoc
                 */

                value: function disposeInternal() {
                    var removeFnName = this.originEmitter_.removeEventListener ? "removeEventListener" : "removeListener";
                    for (var event in this.proxiedEvents_) {
                        this.originEmitter_[removeFnName](event, this.proxiedEvents_[event]);
                    }

                    this.proxiedEvents_ = null;
                    this.originEmitter_ = null;
                    this.targetEmitter_ = null;
                }
            },
            proxyEvent_: {

                /**
                 * Proxies the given event from the origin to the target emitter.
                 * @param {string} event
                 */

                value: function proxyEvent_(event) {
                    if (!this.shouldProxyEvent_(event)) {
                        return;
                    }

                    var self = this;
                    this.proxiedEvents_[event] = function () {
                        var args = [event].concat(Array.prototype.slice.call(arguments, 0));
                        self.targetEmitter_.emit.apply(self.targetEmitter_, args);
                    };

                    var addFnName = this.originEmitter_.addEventListener ? "addEventListener" : "on";
                    this.originEmitter_[addFnName](event, this.proxiedEvents_[event]);
                }
            },
            shouldProxyEvent_: {

                /**
                 * Checks if the given event should be proxied.
                 * @param {string} event
                 * @return {boolean}
                 * @protected
                 */

                value: function shouldProxyEvent_(event) {
                    if (this.whitelist_ && !this.whitelist_[event]) {
                        return false;
                    }
                    if (this.blacklist_[event]) {
                        return false;
                    }
                    return !this.proxiedEvents_[event] && (!(this.originEmitter_.removeEventListener || this.originEmitter_.addEventListener) || src$public$vendor$metaljs$src$dom$dom$$default.supportsEvent(this.originEmitter_, event));
                }
            },
            startProxy_: {

                /**
                 * Starts proxying all events from the origin to the target emitter.
                 * @protected
                 */

                value: function startProxy_() {
                    this.targetEmitter_.on("newListener", this.proxyEvent_.bind(this));
                }
            }
        });

        return src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy;
    })(src$public$vendor$metaljs$src$disposable$Disposable$$default);

    var src$public$vendor$metaljs$src$events$EventEmitterProxy$$default = src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy;
    "use strict";

    /**
     * Affix utility.
     */

    var lib$scripts$Affix$$Affix = (function (_src$public$vendor$metaljs$src$attribute$Attribute$$default) {
        /**
         * @inheritDoc
         */

        function lib$scripts$Affix$$Affix(opt_config) {
            _classCallCheck(this, lib$scripts$Affix$$Affix);

            _get(Object.getPrototypeOf(lib$scripts$Affix$$Affix.prototype), "constructor", this).call(this, opt_config);

            if (!lib$scripts$Affix$$Affix.emitter_) {
                lib$scripts$Affix$$Affix.emitter_ = new src$public$vendor$metaljs$src$events$EventEmitter$$default();
                lib$scripts$Affix$$Affix.proxy_ = new src$public$vendor$metaljs$src$events$EventEmitterProxy$$default(document, lib$scripts$Affix$$Affix.emitter_, null, { scroll: true });
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
            this.scrollHandle_ = lib$scripts$Affix$$Affix.emitter_.on("scroll", this.checkPosition.bind(this));

            this.on("elementChanged", this.checkPosition);
            this.on("offsetTopChanged", this.checkPosition);
            this.on("offsetBottomChanged", this.checkPosition);
            this.checkPosition();
        }

        _inherits(lib$scripts$Affix$$Affix, _src$public$vendor$metaljs$src$attribute$Attribute$$default);

        _createClass(lib$scripts$Affix$$Affix, {
            disposeInternal: {

                /**
                 * @inheritDoc
                 */

                value: function disposeInternal() {
                    src$public$vendor$metaljs$src$dom$dom$$default.removeClasses(this.element, [lib$scripts$Affix$$Affix.Position.Bottom, lib$scripts$Affix$$Affix.Position.Default, lib$scripts$Affix$$Affix.Position.Top]);
                    this.scrollHandle_.dispose();
                    _get(Object.getPrototypeOf(lib$scripts$Affix$$Affix.prototype), "disposeInternal", this).call(this);
                }
            },
            checkPosition: {

                /**
                 * Synchronize bottom, top and element regions and checks if position has
                 * changed. If position has changed syncs position.
                 */

                value: function checkPosition() {
                    if (this.intersectTopRegion()) {
                        this.syncPosition(lib$scripts$Affix$$Affix.Position.Top);
                    } else if (this.intersectBottomRegion()) {
                        this.syncPosition(lib$scripts$Affix$$Affix.Position.Bottom);
                    } else {
                        this.syncPosition(lib$scripts$Affix$$Affix.Position.Default);
                    }
                }
            },
            intersectBottomRegion: {

                /**
                 * Whether the element is intersecting with bottom region defined by
                 * offsetBottom.
                 * @return {boolean}
                 */

                value: function intersectBottomRegion() {
                    if (!src$public$vendor$metaljs$src$core$$default.isDef(this.offsetBottom)) {
                        return false;
                    }
                    var clientHeight = src$public$vendor$metal$position$src$position$$default.getHeight(this.scrollElement);
                    var scrollElementClientHeight = src$public$vendor$metal$position$src$position$$default.getClientHeight(this.scrollElement);
                    return src$public$vendor$metal$position$src$position$$default.getScrollTop(this.scrollElement) + scrollElementClientHeight >= clientHeight - this.offsetBottom;
                }
            },
            intersectTopRegion: {

                /**
                 * Whether the element is intersecting with top region defined by
                 * offsetTop.
                 * @return {boolean}
                 */

                value: function intersectTopRegion() {
                    if (!src$public$vendor$metaljs$src$core$$default.isDef(this.offsetTop)) {
                        return false;
                    }
                    return src$public$vendor$metal$position$src$position$$default.getScrollTop(this.scrollElement) <= this.offsetTop;
                }
            },
            syncPosition: {

                /**
                 * Synchronizes element css classes to match with the specified position.
                 * @param {Position.Bottom|Position.Default|Position.Top} position
                 */

                value: function syncPosition(position) {
                    if (this.lastPosition_ !== position) {
                        src$public$vendor$metaljs$src$dom$dom$$default.addClasses(this.element, [position]);
                        src$public$vendor$metaljs$src$dom$dom$$default.removeClasses(this.element, [this.lastPosition_]);
                        this.lastPosition_ = position;
                    }
                }
            }
        });

        return lib$scripts$Affix$$Affix;
    })(src$public$vendor$metaljs$src$attribute$Attribute$$default);

    /**
     * Holds positions enum.
     * @enum {string}
     */
    lib$scripts$Affix$$Affix.Position = {
        Top: "affix-top",
        Bottom: "affix-bottom",
        Default: "affix-default"
    };

    lib$scripts$Affix$$Affix.ATTRS = {
        /**
         * The scrollElement element to be used as scrollElement area for affix. The scrollElement is
         * where the scroll event is listened from.
         * @type {Element|Window}
         */
        scrollElement: {
            setter: src$public$vendor$metaljs$src$dom$dom$$default.toElement,
            value: document
        },

        /**
         * Defines the offset bottom that triggers affix.
         * @type {Number}
         */
        offsetTop: {
            validator: src$public$vendor$metaljs$src$core$$default.isNumber
        },

        /**
         * Defines the offset top that triggers affix.
         * @type {Number}
         */
        offsetBottom: {
            validator: src$public$vendor$metaljs$src$core$$default.isNumber
        },

        /**
         * Element to be used as alignment reference of affix.
         * @type {Element}
         */
        element: {
            setter: src$public$vendor$metaljs$src$dom$dom$$default.toElement
        }
    };

    var lib$scripts$Affix$$default = lib$scripts$Affix$$Affix;
    "use strict";

    /**
     * Class with static methods responsible for doing browser feature checks.
     */

    var src$public$vendor$metaljs$src$dom$features$$features = (function () {
        function src$public$vendor$metaljs$src$dom$features$$features() {
            _classCallCheck(this, src$public$vendor$metaljs$src$dom$features$$features);
        }

        _createClass(src$public$vendor$metaljs$src$dom$features$$features, null, {
            checkAttrOrderChange: {
                /**
                 * Some browsers (like IE9) change the order of element attributes, when html
                 * is rendered. This method can be used to check if this behavior happens on
                 * the current browser.
                 * @return {boolean}
                 */

                value: function checkAttrOrderChange() {
                    if (src$public$vendor$metaljs$src$dom$features$$features.attrOrderChange_ === undefined) {
                        var originalContent = "<div data-component=\"\" data-ref=\"\"></div>";
                        var element = document.createElement("div");
                        src$public$vendor$metaljs$src$dom$dom$$default.append(element, originalContent);
                        src$public$vendor$metaljs$src$dom$features$$features.attrOrderChange_ = originalContent !== element.innerHTML;
                    }
                    return src$public$vendor$metaljs$src$dom$features$$features.attrOrderChange_;
                }
            }
        });

        return src$public$vendor$metaljs$src$dom$features$$features;
    })();

    src$public$vendor$metaljs$src$dom$features$$features.attrOrderChange_ = undefined;

    var src$public$vendor$metaljs$src$dom$features$$default = src$public$vendor$metaljs$src$dom$features$$features;
    "use strict";

    var src$public$vendor$metaljs$src$string$string$$string = (function () {
        function src$public$vendor$metaljs$src$string$string$$string() {
            _classCallCheck(this, src$public$vendor$metaljs$src$string$string$$string);
        }

        _createClass(src$public$vendor$metaljs$src$string$string$$string, null, {
            collapseBreakingSpaces: {
                /**
                 * Removes the breaking spaces from the left and right of the string and
                 * collapses the sequences of breaking spaces in the middle into single spaces.
                 * The original and the result strings render the same way in HTML.
                 * @param {string} str A string in which to collapse spaces.
                 * @return {string} Copy of the string with normalized breaking spaces.
                 */

                value: function collapseBreakingSpaces(str) {
                    return str.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
                }
            },
            hashCode: {

                /**
                 * Calculates the hashcode for a string. The hashcode value is computed by
                 * the sum algorithm: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]. A nice
                 * property of using 31 prime is that the multiplication can be replaced by
                 * a shift and a subtraction for better performance: 31*i == (i<<5)-i.
                 * Modern VMs do this sort of optimization automatically.
                 * @param {String} val Target string.
                 * @return {Number} Returns the string hashcode.
                 */

                value: function hashCode(val) {
                    var hash = 0;
                    for (var i = 0, len = val.length; i < len; i++) {
                        hash = 31 * hash + val.charCodeAt(i);
                        hash %= 4294967296;
                    }
                    return hash;
                }
            },
            replaceInterval: {

                /**
                 * Replaces interval into the string with specified value, e.g.
                 * `replaceInterval("abcde", 1, 4, "")` returns "ae".
                 * @param {string} str The input string.
                 * @param {Number} start Start interval position to be replaced.
                 * @param {Number} end End interval position to be replaced.
                 * @param {string} value The value that replaces the specified interval.
                 * @return {string}
                 */

                value: function replaceInterval(str, start, end, value) {
                    return str.substring(0, start) + value + str.substring(end);
                }
            }
        });

        return src$public$vendor$metaljs$src$string$string$$string;
    })();

    var src$public$vendor$metaljs$src$string$string$$default = src$public$vendor$metaljs$src$string$string$$string;
    "use strict";

    var src$public$vendor$metaljs$src$html$html$$html = (function () {
        function src$public$vendor$metaljs$src$html$html$$html() {
            _classCallCheck(this, src$public$vendor$metaljs$src$html$html$$html);
        }

        _createClass(src$public$vendor$metaljs$src$html$html$$html, null, {
            compress: {
                /**
                 * Minifies given HTML source by removing extra white spaces, comments and
                 * other unneeded characters without breaking the content structure. As a
                 * result HTML become smaller in size.
                 * - Contents within <code>, <pre>, <script>, <style>, <textarea> and
                 *   conditional comments tags are preserved.
                 * - Comments are removed.
                 * - Conditional comments are preserved.
                 * - Breaking spaces are collapsed into a single space.
                 * - Unneeded spaces inside tags (around = and before />) are removed.
                 * - Spaces between tags are removed, even from inline-block elements.
                 * - Spaces surrounding tags are removed.
                 * - DOCTYPE declaration is simplified to <!DOCTYPE html>.
                 * - Does not remove default attributes from <script>, <style>, <link>,
                 *   <form>, <input>.
                 * - Does not remove values from boolean tag attributes.
                 * - Does not remove "javascript:" from in-line event handlers.
                 * - Does not remove http:// and https:// protocols.
                 * @param {string} htmlString Input HTML to be compressed.
                 * @return {string} Compressed version of the HTML.
                 */

                value: function compress(htmlString) {
                    var preserved = {};
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveBlocks_(htmlString, preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.simplifyDoctype_(htmlString);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.removeComments_(htmlString);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.removeIntertagSpaces_(htmlString);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.collapseBreakingSpaces_(htmlString);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.removeSpacesInsideTags_(htmlString);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.removeSurroundingSpaces_(htmlString);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.returnBlocks_(htmlString, preserved);
                    return htmlString.trim();
                }
            },
            collapseBreakingSpaces_: {

                /**
                 * Collapses breaking spaces into a single space.
                 * @param {string} htmlString
                 * @return {string}
                 * @protected
                 */

                value: function collapseBreakingSpaces_(htmlString) {
                    return src$public$vendor$metaljs$src$string$string$$default.collapseBreakingSpaces(htmlString);
                }
            },
            lookupPossibleTagBoundary_: {

                /**
                 * Searches for first occurrence of the specified open tag string pattern
                 * and from that point finds next ">" position, identified as possible tag
                 * end position.
                 * @param {string} htmlString
                 * @param {string} openTag Open tag string pattern without open tag ending
                 *     character, e.g. "<textarea" or "<code".
                 * @return {string}
                 * @protected
                 */

                value: function lookupPossibleTagBoundary_(htmlString, openTag) {
                    var tagPos = htmlString.indexOf(openTag);
                    if (tagPos > -1) {
                        tagPos += htmlString.substring(tagPos).indexOf(">") + 1;
                    }
                    return tagPos;
                }
            },
            preserveBlocks_: {

                /**
                 * Preserves contents inside any <code>, <pre>, <script>, <style>,
                 * <textarea> and conditional comment tags. When preserved, original content
                 * are replaced with an unique generated block id and stored into
                 * `preserved` map.
                 * @param {string} htmlString
                 * @param {Object} preserved Object to preserve the content indexed by an
                 *     unique generated block id.
                 * @return {html} The preserved HTML.
                 * @protected
                 */

                value: function preserveBlocks_(htmlString, preserved) {
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveOuterHtml_(htmlString, "<!--[if", "<![endif]-->", preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveInnerHtml_(htmlString, "<code", "</code", preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveInnerHtml_(htmlString, "<pre", "</pre", preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveInnerHtml_(htmlString, "<script", "</script", preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveInnerHtml_(htmlString, "<style", "</style", preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveInnerHtml_(htmlString, "<textarea", "</textarea", preserved);
                    return htmlString;
                }
            },
            preserveInnerHtml_: {

                /**
                 * Preserves inner contents inside the specified tag. When preserved,
                 * original content are replaced with an unique generated block id and
                 * stored into `preserved` map.
                 * @param {string} htmlString
                 * @param {string} openTag Open tag string pattern without open tag ending
                 *     character, e.g. "<textarea" or "<code".
                 * @param {string} closeTag Close tag string pattern without close tag
                 *     ending character, e.g. "</textarea" or "</code".
                 * @param {Object} preserved Object to preserve the content indexed by an
                 *     unique generated block id.
                 * @return {html} The preserved HTML.
                 * @protected
                 */

                value: function preserveInnerHtml_(htmlString, openTag, closeTag, preserved) {
                    var tagPosEnd = src$public$vendor$metaljs$src$html$html$$html.lookupPossibleTagBoundary_(htmlString, openTag);
                    while (tagPosEnd > -1) {
                        var tagEndPos = htmlString.indexOf(closeTag);
                        htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveInterval_(htmlString, tagPosEnd, tagEndPos, preserved);
                        htmlString = htmlString.replace(openTag, "%%%~1~%%%");
                        htmlString = htmlString.replace(closeTag, "%%%~2~%%%");
                        tagPosEnd = src$public$vendor$metaljs$src$html$html$$html.lookupPossibleTagBoundary_(htmlString, openTag);
                    }
                    htmlString = htmlString.replace(/%%%~1~%%%/g, openTag);
                    htmlString = htmlString.replace(/%%%~2~%%%/g, closeTag);
                    return htmlString;
                }
            },
            preserveInterval_: {

                /**
                 * Preserves interval of the specified HTML into the preserved map replacing
                 * original contents with an unique generated id.
                 * @param {string} htmlString
                 * @param {Number} start Start interval position to be replaced.
                 * @param {Number} end End interval position to be replaced.
                 * @param {Object} preserved Object to preserve the content indexed by an
                 *     unique generated block id.
                 * @return {string} The HTML with replaced interval.
                 * @protected
                 */

                value: function preserveInterval_(htmlString, start, end, preserved) {
                    var blockId = "%%%~BLOCK~" + src$public$vendor$metaljs$src$core$$default.getUid() + "~%%%";
                    preserved[blockId] = htmlString.substring(start, end);
                    return src$public$vendor$metaljs$src$string$string$$default.replaceInterval(htmlString, start, end, blockId);
                }
            },
            preserveOuterHtml_: {

                /**
                 * Preserves outer contents inside the specified tag. When preserved,
                 * original content are replaced with an unique generated block id and
                 * stored into `preserved` map.
                 * @param {string} htmlString
                 * @param {string} openTag Open tag string pattern without open tag ending
                 *     character, e.g. "<textarea" or "<code".
                 * @param {string} closeTag Close tag string pattern without close tag
                 *     ending character, e.g. "</textarea" or "</code".
                 * @param {Object} preserved Object to preserve the content indexed by an
                 *     unique generated block id.
                 * @return {html} The preserved HTML.
                 * @protected
                 */

                value: function preserveOuterHtml_(htmlString, openTag, closeTag, preserved) {
                    var tagPos = htmlString.indexOf(openTag);
                    while (tagPos > -1) {
                        var tagEndPos = htmlString.indexOf(closeTag) + closeTag.length;
                        htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveInterval_(htmlString, tagPos, tagEndPos, preserved);
                        tagPos = htmlString.indexOf(openTag);
                    }
                    return htmlString;
                }
            },
            removeComments_: {

                /**
                 * Removes all comments of the HTML. Including conditional comments and
                 * "<![CDATA[" blocks.
                 * @param {string} htmlString
                 * @return {string} The HTML without comments.
                 * @protected
                 */

                value: function removeComments_(htmlString) {
                    var preserved = {};
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveOuterHtml_(htmlString, "<![CDATA[", "]]>", preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveOuterHtml_(htmlString, "<!--", "-->", preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.replacePreservedBlocks_(htmlString, preserved, "");
                    return htmlString;
                }
            },
            removeIntertagSpaces_: {

                /**
                 * Removes spaces between tags, even from inline-block elements.
                 * @param {string} htmlString
                 * @return {string} The HTML without spaces between tags.
                 * @protected
                 */

                value: function removeIntertagSpaces_(htmlString) {
                    htmlString = htmlString.replace(src$public$vendor$metaljs$src$html$html$$html.Patterns.INTERTAG_CUSTOM_CUSTOM, "~%%%%%%~");
                    htmlString = htmlString.replace(src$public$vendor$metaljs$src$html$html$$html.Patterns.INTERTAG_CUSTOM_TAG, "~%%%<");
                    htmlString = htmlString.replace(src$public$vendor$metaljs$src$html$html$$html.Patterns.INTERTAG_TAG, "><");
                    htmlString = htmlString.replace(src$public$vendor$metaljs$src$html$html$$html.Patterns.INTERTAG_TAG_CUSTOM, ">%%%~");
                    return htmlString;
                }
            },
            removeSpacesInsideTags_: {

                /**
                 * Removes spaces inside tags.
                 * @param {string} htmlString
                 * @return {string} The HTML without spaces inside tags.
                 * @protected
                 */

                value: function removeSpacesInsideTags_(htmlString) {
                    htmlString = htmlString.replace(src$public$vendor$metaljs$src$html$html$$html.Patterns.TAG_END_SPACES, "$1$2");
                    htmlString = htmlString.replace(src$public$vendor$metaljs$src$html$html$$html.Patterns.TAG_QUOTE_SPACES, "=$1$2$3");
                    return htmlString;
                }
            },
            removeSurroundingSpaces_: {

                /**
                 * Removes spaces surrounding tags.
                 * @param {string} htmlString
                 * @return {string} The HTML without spaces surrounding tags.
                 * @protected
                 */

                value: function removeSurroundingSpaces_(htmlString) {
                    return htmlString.replace(src$public$vendor$metaljs$src$html$html$$html.Patterns.SURROUNDING_SPACES, "$1");
                }
            },
            replacePreservedBlocks_: {

                /**
                 * Restores preserved map keys inside the HTML. Note that the passed HTML
                 * should contain the unique generated block ids to be replaced.
                 * @param {string} htmlString
                 * @param {Object} preserved Object to preserve the content indexed by an
                 *     unique generated block id.
                 * @param {string} replaceValue The value to replace any block id inside the
                 * HTML.
                 * @return {string}
                 * @protected
                 */

                value: function replacePreservedBlocks_(htmlString, preserved, replaceValue) {
                    for (var blockId in preserved) {
                        htmlString = htmlString.replace(blockId, replaceValue);
                    }
                    return htmlString;
                }
            },
            simplifyDoctype_: {

                /**
                 * Simplifies DOCTYPE declaration to <!DOCTYPE html>.
                 * @param {string} htmlString
                 * @return {string}
                 * @protected
                 */

                value: function simplifyDoctype_(htmlString) {
                    var preserved = {};
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.preserveOuterHtml_(htmlString, "<!DOCTYPE", ">", preserved);
                    htmlString = src$public$vendor$metaljs$src$html$html$$html.replacePreservedBlocks_(htmlString, preserved, "<!DOCTYPE html>");
                    return htmlString;
                }
            },
            returnBlocks_: {

                /**
                 * Restores preserved map original contents inside the HTML. Note that the
                 * passed HTML should contain the unique generated block ids to be restored.
                 * @param {string} htmlString
                 * @param {Object} preserved Object to preserve the content indexed by an
                 *     unique generated block id.
                 * @return {string}
                 * @protected
                 */

                value: function returnBlocks_(htmlString, preserved) {
                    for (var blockId in preserved) {
                        htmlString = htmlString.replace(blockId, preserved[blockId]);
                    }
                    return htmlString;
                }
            }
        });

        return src$public$vendor$metaljs$src$html$html$$html;
    })();

    /**
     * HTML regex patterns.
     * @enum {RegExp}
     * @protected
     */
    src$public$vendor$metaljs$src$html$html$$html.Patterns = {
        /**
         * @type {RegExp}
         */
        INTERTAG_CUSTOM_CUSTOM: /~%%%\s+%%%~/g,

        /**
         * @type {RegExp}
         */
        INTERTAG_TAG_CUSTOM: />\s+%%%~/g,

        /**
         * @type {RegExp}
         */
        INTERTAG_CUSTOM_TAG: /~%%%\s+</g,

        /**
         * @type {RegExp}
         */
        INTERTAG_TAG: />\s+</g,

        /**
         * @type {RegExp}
         */
        SURROUNDING_SPACES: /\s*(<[^>]+>)\s*/g,

        /**
         * @type {RegExp}
         */
        TAG_END_SPACES: /(<(?:[^>]+?))(?:\s+?)(\/?>)/g,

        /**
         * @type {RegExp}
         */
        TAG_QUOTE_SPACES: /\s*=\s*(["']?)\s*(.*?)\s*(\1)/g
    };

    var src$public$vendor$metaljs$src$html$html$$default = src$public$vendor$metaljs$src$html$html$$html;
    "use strict";

    /**
     * EventHandler utility. It's useful for easily removing a group of
     * listeners from different EventEmitter instances.
     * @constructor
     * @extends {Disposable}
     */

    var src$public$vendor$metaljs$src$events$EventHandler$$EventHandler = (function (_src$public$vendor$metaljs$src$disposable$Disposable$$default4) {
        function src$public$vendor$metaljs$src$events$EventHandler$$EventHandler() {
            _classCallCheck(this, src$public$vendor$metaljs$src$events$EventHandler$$EventHandler);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$events$EventHandler$$EventHandler.prototype), "constructor", this).call(this);

            /**
             * An array that holds the added event handles, so the listeners can be
             * removed later.
             * @type {Array.<EventHandle>}
             * @protected
             */
            this.eventHandles_ = [];
        }

        _inherits(src$public$vendor$metaljs$src$events$EventHandler$$EventHandler, _src$public$vendor$metaljs$src$disposable$Disposable$$default4);

        _createClass(src$public$vendor$metaljs$src$events$EventHandler$$EventHandler, {
            add: {

                /**
                 * Adds event handles to be removed later through the `removeAllListeners`
                 * method.
                 * @param {...(!EventHandle)} var_args
                 */

                value: function add() {
                    for (var i = 0; i < arguments.length; i++) {
                        this.eventHandles_.push(arguments[i]);
                    }
                }
            },
            disposeInternal: {

                /**
                 * Disposes of this instance's object references.
                 * @override
                 */

                value: function disposeInternal() {
                    this.eventHandles_ = null;
                }
            },
            removeAllListeners: {

                /**
                 * Removes all listeners that have been added through the `add` method.
                 */

                value: function removeAllListeners() {
                    for (var i = 0; i < this.eventHandles_.length; i++) {
                        this.eventHandles_[i].removeListener();
                    }

                    this.eventHandles_ = [];
                }
            }
        });

        return src$public$vendor$metaljs$src$events$EventHandler$$EventHandler;
    })(src$public$vendor$metaljs$src$disposable$Disposable$$default);

    var src$public$vendor$metaljs$src$events$EventHandler$$default = src$public$vendor$metaljs$src$events$EventHandler$$EventHandler;
    "use strict";

    /**
     * Component collects common behaviors to be followed by UI components, such
     * as Lifecycle, bounding box element creation, CSS classes management,
     * events encapsulation and surfaces support. Surfaces are an area of the
     * component that can have information rendered into it. A component
     * manages multiple surfaces. Surfaces are only rendered when its content is
     * modified, representing render performance gains. For each surface, render
     * attributes could be associated, when the render context of a surface gets
     * modified the component Lifecycle re-paints the modified surface
     * automatically.
     *
     * Example:
     *
     * <code>
     * class CustomComponent extends Component {
     *   constructor(config) {
     *     super(config);
     *   }
     *
     *   created() {
     *   }
     *
     *   decorateInternal() {
     *   }
     *
     *   renderInternal() {
     *     this.element.appendChild(this.getSurfaceElement('header'));
     *     this.element.appendChild(this.getSurfaceElement('bottom'));
     *   }
     *
     *   getSurfaceContent(surfaceId) {
     *   }
     *
     *   attached() {
     *   }
     *
     *   detached() {
     *   }
     * }
     *
     * CustomComponent.ATTRS = {
     *   title: { value: 'Title' },
     *   fontSize: { value: '10px' }
     * };
     *
     * CustomComponent.SURFACES = {
     *   header: { renderAttrs: ['title', 'fontSize'] },
     *   bottom: { renderAttrs: ['fontSize'] }
     * };
     * </code>
     *
     * @param {!Object} opt_config An object with the initial values for this component's
     *   attributes.
     * @constructor
     * @extends {Attribute}
     */

    var src$public$vendor$metaljs$src$component$Component$$Component = (function (_src$public$vendor$metaljs$src$attribute$Attribute$$default2) {
        function src$public$vendor$metaljs$src$component$Component$$Component(opt_config) {
            _classCallCheck(this, src$public$vendor$metaljs$src$component$Component$$Component);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$component$Component$$Component.prototype), "constructor", this).call(this, opt_config);

            /**
             * Whether the element is being decorated.
             * @type {boolean}
             * @protected
             */
            this.decorating_ = false;

            /**
             * Holds events that were listened through the `delegate` Component function.
             * @type {EventHandler}
             * @protected
             */
            this.delegateEventHandler_ = null;

            /**
             * Instance of `EventEmitterProxy` which proxies events from the component's
             * element to the component itself.
             * @type {EventEmitterProxy}
             * @protected
             */
            this.elementEventProxy_ = null;

            /**
             * Whether the element is in document.
             * @type {boolean}
             */
            this.inDocument = false;

            /**
             * Maps that index the surfaces instances by the surface id.
             * @type {Object}
             * @default null
             * @protected
             */
            this.surfaces_ = null;

            /**
             * Whether the element was rendered.
             * @type {boolean}
             */
            this.wasRendered = false;

            /**
             * Whether the element was decorated.
             * @type {boolean}
             */
            this.wasDecorated = false;

            src$public$vendor$metaljs$src$core$$default.mergeSuperClassesProperty(this.constructor, "ELEMENT_CLASSES", this.mergeElementClasses_);
            src$public$vendor$metaljs$src$core$$default.mergeSuperClassesProperty(this.constructor, "ELEMENT_TAG_NAME", src$public$vendor$metaljs$src$array$array$$default.firstDefinedValue);
            src$public$vendor$metaljs$src$core$$default.mergeSuperClassesProperty(this.constructor, "SURFACE_TAG_NAME", src$public$vendor$metaljs$src$array$array$$default.firstDefinedValue);
            this.addSurfacesFromStaticHint_();

            this.delegateEventHandler_ = new src$public$vendor$metaljs$src$events$EventHandler$$default();

            this.created_();
        }

        _inherits(src$public$vendor$metaljs$src$component$Component$$Component, _src$public$vendor$metaljs$src$attribute$Attribute$$default2);

        _createClass(src$public$vendor$metaljs$src$component$Component$$Component, {
            addSingleListener_: {

                /**
                 * Overrides `addSingleListener_` from `EventEmitter`, so we can create
                 * the `EventEmitterProxy` instance only when it's needed for the first
                 * time.
                 * @param {string} event
                 * @param {!Function} listener
                 * @param {Function=} opt_origin The original function that was added as a
                 *   listener, if there is any.
                 * @protected
                 * @override
                 */

                value: function addSingleListener_(event, listener, opt_origin) {
                    if (!this.elementEventProxy_ && src$public$vendor$metaljs$src$dom$dom$$default.supportsEvent(this.constructor.ELEMENT_TAG_NAME_MERGED, event)) {
                        this.elementEventProxy_ = new src$public$vendor$metaljs$src$events$EventEmitterProxy$$default(this.element, this);
                    }
                    _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$component$Component$$Component.prototype), "addSingleListener_", this).call(this, event, listener, opt_origin);
                }
            },
            addSurface: {

                /**
                 * Registers a surface to the component. Surface elements are not
                 * automatically appended to the component element.
                 * @param {string} surfaceId The surface id to be registered.
                 * @param {Object=} opt_config Optional surface configuration.
                 * @chainable
                 */

                value: function addSurface(surfaceId, opt_config) {
                    this.surfaces_[surfaceId] = opt_config || {};
                    this.cacheSurfaceRenderAttrs_(surfaceId);
                    return this;
                }
            },
            addSurfaces: {

                /**
                 * Registers surfaces to the component. Surface elements are not
                 * automatically appended to the component element.
                 * @param {!Object.<string, Object=>} configs An object that maps the names
                 *     of all the surfaces to be added to their configuration objects.
                 * @chainable
                 */

                value: function addSurfaces(configs) {
                    for (var surfaceId in configs) {
                        this.addSurface(surfaceId, configs[surfaceId]);
                    }
                    return this;
                }
            },
            addSurfacesFromStaticHint_: {

                /**
                 * Adds surfaces from super classes static hint.
                 * @protected
                 */

                value: function addSurfacesFromStaticHint_() {
                    src$public$vendor$metaljs$src$core$$default.mergeSuperClassesProperty(this.constructor, "SURFACES", this.mergeSurfaces_);
                    this.surfaces_ = {};
                    this.surfacesRenderAttrs_ = {};

                    var configs = this.constructor.SURFACES_MERGED;
                    for (var surfaceId in configs) {
                        this.addSurface(surfaceId, src$public$vendor$metaljs$src$object$object$$default.mixin({}, configs[surfaceId]));
                    }
                }
            },
            attach: {

                /**
                 * Invokes the attached Lifecycle. When attached, the component element is
                 * appended to the DOM and any other action to be performed must be
                 * implemented in this method, such as, binding DOM events. A component can
                 * be re-attached multiple times.
                 * @param {(string|Element)=} opt_parentElement Optional parent element
                 *     to render the component.
                 * @param {(string|Element)=} opt_siblingElement Optional sibling element
                 *     to render the component before it. Relevant when the component needs
                 *     to be rendered before an existing element in the DOM, e.g.
                 *     `component.render(null, existingElement)`.
                 * @protected
                 * @chainable
                 */

                value: function attach(opt_parentElement, opt_siblingElement) {
                    if (!this.inDocument) {
                        this.renderElement_(opt_parentElement, opt_siblingElement);
                        this.inDocument = true;
                        this.attached();
                    }
                    return this;
                }
            },
            attached: {

                /**
                 * Lifecycle. When attached, the component element is appended to the DOM
                 * and any other action to be performed must be implemented in this method,
                 * such as, binding DOM events. A component can be re-attached multiple
                 * times, therefore the undo behavior for any action performed in this phase
                 * must be implemented on the detach phase.
                 */

                value: function attached() {}
            },
            cacheSurfaceContent: {

                /**
                 * Caches the given content for the surface with the requested id.
                 * @param {string} surfaceId
                 * @param {string} content
                 */

                value: function cacheSurfaceContent(surfaceId, content) {
                    var cacheState = this.computeSurfaceCacheState_(content);
                    var surface = this.getSurface(surfaceId);
                    surface.cacheState = cacheState;
                }
            },
            cacheSurfaceRenderAttrs_: {

                /**
                 * Caches surface render attributes into a O(k) flat map representation.
                 * Relevant for performance to calculate the surfaces group that were
                 * modified by attributes mutation.
                 * @param {string} surfaceId The surface id to be cached into the flat map.
                 * @protected
                 */

                value: function cacheSurfaceRenderAttrs_(surfaceId) {
                    var attrs = this.getSurface(surfaceId).renderAttrs || [];
                    for (var i = 0; i < attrs.length; i++) {
                        this.surfacesRenderAttrs_[attrs[i]] = this.surfacesRenderAttrs_[attrs[i]] || {};
                        this.surfacesRenderAttrs_[attrs[i]][surfaceId] = true;
                    }
                }
            },
            clearSurfacesCache_: {

                /**
                 * Clears the surfaces content cache.
                 * @protected
                 */

                value: function clearSurfacesCache_() {
                    for (var surfaceId in this.surfaces_) {
                        this.getSurface(surfaceId).cacheState = src$public$vendor$metaljs$src$component$Component$$Component.Cache.NOT_INITIALIZED;
                    }
                }
            },
            computeSurfaceCacheState_: {

                /**
                 * Computes the cache state for the surface content. If value is string, the
                 * cache state is represented by its hashcode.
                 * @param {Object} value The value to calculate the cache state.
                 * @return {Object} The computed cache state.
                 * @protected
                 */

                value: function computeSurfaceCacheState_(value) {
                    if (src$public$vendor$metaljs$src$core$$default.isString(value)) {
                        if (src$public$vendor$metaljs$src$dom$features$$default.checkAttrOrderChange()) {
                            value = this.convertHtmlToBrowserFormat_(value);
                        }
                        return src$public$vendor$metaljs$src$string$string$$default.hashCode(value);
                    }
                    return src$public$vendor$metaljs$src$component$Component$$Component.Cache.NOT_CACHEABLE;
                }
            },
            computeSurfacesCacheStateFromDom_: {

                /**
                 * Computes the cache state for the surface content based on the decorated
                 * DOM element. The innerHTML of the surface element is read and compressed
                 * in order to minimize mismatches caused by breaking spaces or HTML
                 * formatting differences that does not affect the content structure.
                 * @protected
                 */

                value: function computeSurfacesCacheStateFromDom_() {
                    for (var surfaceId in this.surfaces_) {
                        this.cacheSurfaceContent(surfaceId, src$public$vendor$metaljs$src$html$html$$default.compress(this.getSurfaceElement(surfaceId).innerHTML));
                    }
                }
            },
            convertHtmlToBrowserFormat_: {

                /**
                 * Converts the given html string to the format the current browser uses
                 * when html is rendered. This is done by rendering the html in a temporary
                 * element, and returning its resulting rendered html.
                 * @param {string} htmlString The html to be converted.
                 * @return {string}
                 * @protected
                 */

                value: function convertHtmlToBrowserFormat_(htmlString) {
                    var element = document.createElement("div");
                    src$public$vendor$metaljs$src$dom$dom$$default.append(element, htmlString);
                    return element.innerHTML;
                }
            },
            created: {

                /**
                 * Lifecycle. Creation phase of the component happens once after the
                 * component is instantiated, therefore its the initial phase of the
                 * component Lifecycle. Be conscious about actions performed in this phase
                 * to not compromise instantiation time with operations that can be
                 * postponed to further phases. It's recommended to bind component custom
                 * events in this phase, in contrast to DOM events that must be bind on
                 * attach phase.
                 */

                value: function created() {}
            },
            createSurfaceElement_: {

                /**
                 * Creates the surface element with its id namespaced to the component id.
                 * @param {string} surfaceElementId The id of the element for the surface to be
                 *   created.
                 * @return {Element} The surface element.
                 * @protected
                 */

                value: function createSurfaceElement_(surfaceElementId) {
                    var el = document.createElement(this.constructor.SURFACE_TAG_NAME_MERGED);
                    el.id = surfaceElementId;
                    return el;
                }
            },
            decorateInternal: {

                /**
                 * Lifecycle. Internal implementation for decoration. Any extra operation
                 * necessary to prepare the component DOM must be implemented in this phase.
                 */

                value: function decorateInternal() {}
            },
            delegate: {

                /**
                 * Listens to a delegate event on the component's element.
                 * @param {string} eventName The name of the event to listen to.
                 * @param {string} selector The selector that matches the child elements that
                 *   the event should be triggered for.
                 * @param {!function(!Object)} callback Function to be called when the event is
                 *   triggered. It will receive the normalized event object.
                 * @return {!DomEventHandle} Can be used to remove the listener.
                 */

                value: function delegate(eventName, selector, callback) {
                    var handle = src$public$vendor$metaljs$src$dom$dom$$default.delegate(this.element, eventName, selector, callback);
                    this.delegateEventHandler_.add(handle);
                    return handle;
                }
            },
            detach: {

                /**
                 * Invokes the detached Lifecycle. When detached, the component element is
                 * removed from the DOM and any other action to be performed must be
                 * implemented in this method, such as, unbinding DOM events. A component
                 * can be detached multiple times.
                 * @chainable
                 */

                value: function detach() {
                    if (this.inDocument) {
                        this.element.parentNode.removeChild(this.element);
                        this.inDocument = false;
                        this.detached();
                    }
                    return this;
                }
            },
            detached: {

                /**
                 * Lifecycle. When detached, the component element is removed from the DOM
                 * and any other action to be performed must be implemented in this method,
                 * such as, unbinding DOM events. A component can be detached multiple
                 * times, therefore the undo behavior for any action performed in this phase
                 * must be implemented on the attach phase.
                 */

                value: function detached() {}
            },
            created_: {

                /**
                 * Internal implementation for the creation phase of the component.
                 * @protected
                 */

                value: function created_() {
                    this.on("attrsChanged", this.handleAttributesChanges_);
                    this.created();
                }
            },
            decorate: {

                /**
                 * Lifecycle. Creates the component using existing DOM elements. Often the
                 * component can be created using existing elements in the DOM to leverage
                 * progressive enhancement. Any extra operation necessary to prepare the
                 * component DOM must be implemented in this phase. Decorate phase replaces
                 * render phase.
                 *
                 * Decoration Lifecycle:
                 *   decorate - Decorate is manually called.
                 *   decorateInternal - Internal implementation for decoration happens.
                 *   render surfaces - All surfaces content are rendered.
                 *   attribute synchronization - All synchronization methods are called.
                 *   attach - Attach Lifecycle is called.
                 * @chainable
                 */

                value: function decorate() {
                    if (this.inDocument) {
                        throw new Error(src$public$vendor$metaljs$src$component$Component$$Component.Error.ALREADY_RENDERED);
                    }
                    this.decorating_ = true;

                    this.decorateInternal();
                    this.computeSurfacesCacheStateFromDom_(); // TODO(edu): This optimization seems worth it, analyze it.
                    this.renderSurfacesContent_(this.surfaces_); // TODO(edu): Sync surfaces on decorate?

                    this.syncAttrs_();

                    this.attach();

                    this.decorating_ = false;
                    this.wasDecorated = true;
                    this.wasRendered = true;

                    return this;
                }
            },
            disposeInternal: {

                /**
                 * @inheritDoc
                 */

                value: function disposeInternal() {
                    this.detach();

                    if (this.elementEventProxy_) {
                        this.elementEventProxy_.dispose();
                        this.elementEventProxy_ = null;
                    }

                    this.delegateEventHandler_.removeAllListeners();
                    this.delegateEventHandler_ = null;

                    this.surfaces_ = null;
                    this.surfacesRenderAttrs_ = null;
                    _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$component$Component$$Component.prototype), "disposeInternal", this).call(this);
                }
            },
            syncAttrs_: {

                /**
                 * Fires attributes synchronization changes for attributes.
                 * @protected
                 */

                value: function syncAttrs_() {
                    var attrNames = this.getAttrNames();
                    for (var i = 0; i < attrNames.length; i++) {
                        this.fireAttrChange_(attrNames[i]);
                    }
                }
            },
            syncAttrsFromChanges_: {

                /**
                 * Fires attributes synchronization changes for attributes.
                 * @param {Object.<string, Object>} changes Object containing the attribute
                 *     name as key and an object with newVal and prevVal as value.
                 * @protected
                 */

                value: function syncAttrsFromChanges_(changes) {
                    for (var attr in changes) {
                        this.fireAttrChange_(attr, changes[attr]);
                    }
                }
            },
            fireAttrChange_: {

                /**
                 * Fires attribute synchronization change for the attribute.
                 * @param {Object.<string, Object>} change Object containing newVal and
                 *     prevVal keys.
                 * @protected
                 */

                value: function fireAttrChange_(attr, opt_change) {
                    var fn = this["sync" + attr.charAt(0).toUpperCase() + attr.slice(1)];
                    if (src$public$vendor$metaljs$src$core$$default.isFunction(fn)) {
                        if (!opt_change) {
                            opt_change = {
                                newVal: this[attr],
                                prevVal: undefined
                            };
                        }
                        fn.call(this, opt_change.newVal, opt_change.prevVal);
                    }
                }
            },
            getModifiedSurfacesFromChanges_: {

                /**
                 * Gets surfaces that got modified by the specified attributes changes.
                 * @param {Object.<string, Object>} changes Object containing the attribute
                 *     name as key and an object with newVal and prevVal as value.
                 * @return {Object.<string, boolean>} Object containing modified surface ids
                 *     as key and true as value.
                 */

                value: function getModifiedSurfacesFromChanges_(changes) {
                    var surfaces = [];
                    for (var attr in changes) {
                        surfaces.push(this.surfacesRenderAttrs_[attr]);
                    }
                    return src$public$vendor$metaljs$src$object$object$$default.mixin.apply(null, surfaces);
                }
            },
            getSurface: {

                /**
                 * Gets surface configuration object. If surface is not registered returns
                 * null.
                 * @param {string} surfaceId The surface id.
                 * @return {?Object} The surface configuration object.
                 */

                value: function getSurface(surfaceId) {
                    return this.surfaces_[surfaceId] || null;
                }
            },
            getSurfaceContent: {

                /**
                 * Gets the content for the requested surface. Should be implemented by subclasses.
                 * @param {string} surfaceId The surface id.
                 * @return {Object|string} The content to be rendered.
                 */

                value: function getSurfaceContent() {}
            },
            getSurfaceContent_: {

                /**
                 * Gets the content for the requested surface. By default this just calls
                 * `getSurfaceContent`, but can be overriden to add more behavior (check
                 * `SoyComponent` for an example).
                 * @param {string} surfaceId The surface id.
                 * @return {Object|string} The content to be rendered.
                 * @protected
                 */

                value: function getSurfaceContent_(surfaceId) {
                    return this.getSurfaceContent(surfaceId);
                }
            },
            getSurfaceElement: {

                /**
                 * Queries from the document or creates an element for the surface. Surface
                 * elements have its surface id namespaced to the component id, e.g. for a
                 * component with id `gallery` and a surface with id `pictures` the surface
                 * element will be represented by the id `gallery-pictures`. Surface
                 * elements must also be appended to the component element.
                 * @param {string} surfaceId The surface id.
                 * @return {Element} The surface element or null if surface not registered.
                 */

                value: function getSurfaceElement(surfaceId) {
                    var surface = this.getSurface(surfaceId);
                    if (!surface) {
                        return null;
                    }
                    if (!surface.element) {
                        var surfaceElementId = this.makeSurfaceId_(surfaceId);
                        surface.element = document.getElementById(surfaceElementId) || this.element.querySelector("#" + surfaceElementId) || this.createSurfaceElement_(surfaceElementId);
                    }
                    return surface.element;
                }
            },
            getSurfaces: {

                /**
                 * A map of surface ids to the respective surface object.
                 * @return {!Object}
                 */

                value: function getSurfaces() {
                    return this.surfaces_;
                }
            },
            handleAttributesChanges_: {

                /**
                 * Handles attributes batch changes. Responsible for surface mutations and
                 * attributes synchronization.
                 * @param {Event} event
                 * @protected
                 */

                value: function handleAttributesChanges_(event) {
                    if (this.inDocument) {
                        this.renderSurfacesContent_(this.getModifiedSurfacesFromChanges_(event.changes));
                    }
                    this.syncAttrsFromChanges_(event.changes);
                }
            },
            makeId_: {

                /**
                 * Makes an unique id for the component.
                 * @return {string} Unique id.
                 * @protected
                 */

                value: function makeId_() {
                    return "metal_c_" + src$public$vendor$metaljs$src$core$$default.getUid(this);
                }
            },
            makeSurfaceId_: {

                /**
                 * Makes the id for the surface scoped by the component.
                 * @param {string} surfaceId The surface id.
                 * @return {string}
                 * @protected
                 */

                value: function makeSurfaceId_(surfaceId) {
                    return this.id + "-" + surfaceId;
                }
            },
            mergeElementClasses_: {

                /**
                 * Merges an array of values for the ELEMENT_CLASSES property into a single object.
                 * @param {!Array.<string>} values The values to be merged.
                 * @return {!string} The merged value.
                 * @protected
                 */

                value: function mergeElementClasses_(values) {
                    return values.filter(function (val) {
                        return val;
                    }).join(" ");
                }
            },
            mergeSurfaces_: {

                /**
                 * Merges an array of values for the SURFACES property into a single object.
                 * @param {!Array} values The values to be merged.
                 * @return {!Object} The merged value.
                 * @protected
                 */

                value: function mergeSurfaces_(values) {
                    return src$public$vendor$metaljs$src$object$object$$default.mixin.apply(null, [{}].concat(values.reverse()));
                }
            },
            removeSurface: {

                /**
                 * Unregisters a surface and removes its element from the DOM.
                 * @param {string} surfaceId The surface id.
                 * @chainable
                 */

                value: function removeSurface(surfaceId) {
                    var el = this.getSurfaceElement(surfaceId);
                    if (el && el.parentNode) {
                        el.parentNode.removeChild(el);
                    }
                    delete this.surfaces_[surfaceId];
                    return this;
                }
            },
            render: {

                /**
                 * Lifecycle. Renders the component into the DOM. Render phase replaces
                 * decorate phase, without progressive enhancement support.
                 *
                 * Render Lifecycle:
                 *   render - Decorate is manually called.
                 *   renderInternal - Internal implementation for rendering happens.
                 *   render surfaces - All surfaces content are rendered.
                 *   attribute synchronization - All synchronization methods are called.
                 *   attach - Attach Lifecycle is called.
                 *
                 * @param {(string|Element)=} opt_parentElement Optional parent element
                 *     to render the component.
                 * @param {(string|Element)=} opt_siblingElement Optional sibling element
                 *     to render the component before it. Relevant when the component needs
                 *     to be rendered before an existing element in the DOM, e.g.
                 *     `component.render(null, existingElement)`.
                 * @chainable
                 */

                value: function render(opt_parentElement, opt_siblingElement) {
                    if (this.wasRendered) {
                        throw new Error(src$public$vendor$metaljs$src$component$Component$$Component.Error.ALREADY_RENDERED);
                    }

                    this.renderInternal();
                    this.clearSurfacesCache_();
                    this.renderSurfacesContent_(this.surfaces_);

                    this.syncAttrs_();

                    this.attach(opt_parentElement, opt_siblingElement);

                    this.wasRendered = true;

                    return this;
                }
            },
            renderElement_: {

                /**
                 * Renders the component element into the DOM.
                 * @param {(string|Element)=} opt_parentElement Optional parent element
                 *     to render the component.
                 * @param {(string|Element)=} opt_siblingElement Optional sibling element
                 *     to render the component before it. Relevant when the component needs
                 *     to be rendered before an existing element in the DOM, e.g.
                 *     `component.render(null, existingElement)`.
                 * @protected
                 */

                value: function renderElement_(opt_parentElement, opt_siblingElement) {
                    var element = this.element;
                    element.id = this.id;
                    if (opt_siblingElement || !element.parentNode) {
                        var parent = src$public$vendor$metaljs$src$dom$dom$$default.toElement(opt_parentElement) || document.body;
                        parent.insertBefore(element, src$public$vendor$metaljs$src$dom$dom$$default.toElement(opt_siblingElement));
                    }
                }
            },
            renderInternal: {

                /**
                 * Lifecycle. Internal implementation for rendering. Any extra operation
                 * necessary to prepare the component DOM must be implemented in this phase.
                 */

                value: function renderInternal() {}
            },
            renderSurfaceContent: {

                /**
                 * Render content into a surface. If the specified content is the same of
                 * the current surface content, nothing happens. If the surface cache state
                 * is not initialized or the content is not eligible for cache or content is
                 * different, the surfaces re-renders. It's not recommended to use this
                 * method directly since surface content can be provided by
                 * `getSurfaceContent(surfaceId)`.
                 * @param {string} surfaceId The surface id.
                 * @param {Object|string} content The content to be rendered.
                 */

                value: function renderSurfaceContent(surfaceId, content) {
                    if (src$public$vendor$metaljs$src$core$$default.isDefAndNotNull(content)) {
                        var surface = this.getSurface(surfaceId);
                        var previousCacheState = surface.cacheState;
                        this.cacheSurfaceContent(surfaceId, content);

                        var cacheState = surface.cacheState;
                        surface.cacheMiss = cacheState === src$public$vendor$metaljs$src$component$Component$$Component.Cache.NOT_INITIALIZED || cacheState === src$public$vendor$metaljs$src$component$Component$$Component.Cache.NOT_CACHEABLE || cacheState !== previousCacheState;
                        if (surface.cacheMiss) {
                            this.replaceSurfaceContent_(surfaceId, content);
                        }
                    }
                }
            },
            renderSurfacesContent_: {

                /**
                 * Renders all surfaces contents ignoring the cache.
                 * @param {Object.<string, Object=>} surfaces Object map where the key is
                 *     the surface id and value the optional surface configuration.
                 * @protected
                 */

                value: function renderSurfacesContent_(surfaces) {
                    for (var surfaceId in surfaces) {
                        this.renderSurfaceContent(surfaceId, this.getSurfaceContent_(surfaceId));
                    }
                }
            },
            replaceSurfaceContent_: {

                /**
                 * Replaces the content of a surface with a new one.
                 * @param {string} surfaceId The surface id.
                 * @param {Element|string} content The content to be rendered.
                 * @protected
                 */

                value: function replaceSurfaceContent_(surfaceId, content) {
                    var el = this.getSurfaceElement(surfaceId);
                    src$public$vendor$metaljs$src$dom$dom$$default.removeChildren(el);
                    src$public$vendor$metaljs$src$dom$dom$$default.append(el, content);
                }
            },
            setterElementFn_: {

                /**
                 * Setter logic for element attribute.
                 * @param {string|Element} val
                 * @return {Element}
                 * @protected
                 */

                value: function setterElementFn_(val) {
                    var element = src$public$vendor$metaljs$src$dom$dom$$default.toElement(val);
                    if (!element) {
                        element = this.valueElementFn_();
                    }
                    return element;
                }
            },
            syncElementClasses: {

                /**
                 * Attribute synchronization logic for elementClasses attribute.
                 * @param {string} newVal
                 * @param {string} prevVal
                 */

                value: function syncElementClasses(newVal, prevVal) {
                    var classesToAdd = this.constructor.ELEMENT_CLASSES_MERGED;
                    if (newVal) {
                        classesToAdd = classesToAdd + " " + newVal;
                    }
                    if (prevVal) {
                        src$public$vendor$metaljs$src$dom$dom$$default.removeClasses(this.element, prevVal.split(" "));
                    }
                    src$public$vendor$metaljs$src$dom$dom$$default.addClasses(this.element, classesToAdd.split(" "));
                }
            },
            validatorElementFn_: {

                /**
                 * Validator logic for element attribute.
                 * @param {string|Element} val
                 * @return {boolean} True if val is a valid element.
                 * @protected
                 */

                value: function validatorElementFn_(val) {
                    return src$public$vendor$metaljs$src$core$$default.isElement(val) || src$public$vendor$metaljs$src$core$$default.isString(val);
                }
            },
            validatorElementClassesFn_: {

                /**
                 * Validator logic for elementClasses attribute.
                 * @param {string} val
                 * @return {Boolean} True if val is a valid element classes.
                 * @protected
                 */

                value: function validatorElementClassesFn_(val) {
                    return src$public$vendor$metaljs$src$core$$default.isString(val);
                }
            },
            validatorIdFn_: {

                /**
                 * Validator logic for id attribute.
                 * @param {string} val
                 * @return {Boolean} True if val is a valid id.
                 * @protected
                 */

                value: function validatorIdFn_(val) {
                    return src$public$vendor$metaljs$src$core$$default.isString(val);
                }
            },
            valueElementFn_: {

                /**
                 * Provides the default value for element attribute.
                 * @return {Element} The element.
                 * @protected
                 */

                value: function valueElementFn_() {
                    return document.createElement(this.constructor.ELEMENT_TAG_NAME_MERGED);
                }
            },
            valueIdFn_: {

                /**
                 * Provides the default value for id attribute.
                 * @return {string} The id.
                 * @protected
                 */

                value: function valueIdFn_() {
                    return this.element.id || this.makeId_();
                }
            }
        }, {
            extractComponentId: {

                /**
                 * Extracts the surfaceId from the elementId.
                 * @param {Element} element
                 * @return {?string}
                 */

                value: function extractComponentId(surfaceElementId) {
                    var index = surfaceElementId.lastIndexOf("-");
                    return index === -1 ? surfaceElementId : surfaceElementId.substring(0, index);
                }
            }
        });

        return src$public$vendor$metaljs$src$component$Component$$Component;
    })(src$public$vendor$metaljs$src$attribute$Attribute$$default);

    /**
     * Component attributes definition.
     * @type {Object}
     * @static
     */
    src$public$vendor$metaljs$src$component$Component$$Component.ATTRS = {
        /**
         * Component element bounding box.
         * @type {Element}
         * @writeOnce
         */
        element: {
            setter: "setterElementFn_",
            validator: "validatorElementFn_",
            valueFn: "valueElementFn_",
            writeOnce: true
        },

        /**
         * CSS classes to be applied to the element.
         * @type {Array.<string>}
         */
        elementClasses: {
            validator: "validatorElementClassesFn_"
        },

        /**
         * Component element id. If not specified will be generated.
         * @type {string}
         * @writeOnce
         */
        id: {
            validator: "validatorIdFn_",
            valueFn: "valueIdFn_",
            writeOnce: true
        }
    };

    /**
     * CSS classes to be applied to the element.
     * @type {string}
     * @protected
     * @static
     */
    src$public$vendor$metaljs$src$component$Component$$Component.ELEMENT_CLASSES = "component";

    /**
     * Element tag name is a string that specifies the type of element to be
     * created. The nodeName of the created element is initialized with the
     * value of tag name.
     * @type {string}
     * @default div
     * @protected
     * @static
     */
    src$public$vendor$metaljs$src$component$Component$$Component.ELEMENT_TAG_NAME = "div";

    /**
     * Surface tag name is a string that specifies the type of element to be
     * created for the surfaces. The nodeName of the created element is
     * initialized with the value of tag name.
     * @type {string}
     * @default div
     * @protected
     * @static
     */
    src$public$vendor$metaljs$src$component$Component$$Component.SURFACE_TAG_NAME = "div";

    /**
     * Cache states for the component.
     * @enum {string}
     */
    src$public$vendor$metaljs$src$component$Component$$Component.Cache = {
        /**
         * Cache is not allowed for this state.
         */
        NOT_CACHEABLE: -1,

        /**
         * Cache not initialized.
         */
        NOT_INITIALIZED: -2
    };

    /**
     * Errors thrown by the component.
     * @enum {string}
     */
    src$public$vendor$metaljs$src$component$Component$$Component.Error = {
        /**
         * Error when the component is already rendered and another render attempt
         * is made.
         */
        ALREADY_RENDERED: "Component already rendered"
    };

    /**
     * A list with attribute names that will automatically be rejected as invalid.
     * @type {!Array<string>}
     */
    src$public$vendor$metaljs$src$component$Component$$Component.INVALID_ATTRS = ["componentName", "components", "elementContent", "ref"];

    var src$public$vendor$metaljs$src$component$Component$$default = src$public$vendor$metaljs$src$component$Component$$Component;
    "use strict";

    /**
     * The component registry is used to register components, so they can
     * be accessible by name.
     * @type {Object}
     */

    var src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry = (function () {
        function src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry() {
            _classCallCheck(this, src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry);
        }

        _createClass(src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry, null, {
            getConstructor: {
                /**
                 * Gets the constructor function for the given component name, or
                 * undefined if it hasn't been registered yet.
                 * @param {string} name The component's name.
                 * @return {?function}
                 * @static
                 */

                value: function getConstructor(name) {
                    var constructorFn = src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry.components_[name];
                    if (!constructorFn) {
                        console.error("There's no constructor registered for the component " + "named " + name + ". Components need to be registered via " + "ComponentRegistry.register.");
                    }
                    return constructorFn;
                }
            },
            register: {

                /**
                 * Registers a component.
                 * @param {string} name The component's name.
                 * @param {string} constructorFn The component's constructor function.
                 * @static
                 */

                value: function register(name, constructorFn) {
                    src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry.components_[name] = constructorFn;
                    constructorFn.NAME = name;
                    constructorFn.TEMPLATES = src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry.Templates[name];
                }
            }
        });

        return src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry;
    })();

    /**
     * Holds all registered components, indexed by their names.
     * @type {!Object<string, function()>}
     * @protected
     * @static
     */
    src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry.components_ = {};

    /**
     * Holds all registered component templates, indexed by component names.
     * Soy files automatically add their templates to this object when imported.
     * @type {!Object<string, !Object<string, !function()>>}
     * @static
     */
    src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry.Templates = {};

    var src$public$vendor$metaljs$src$component$ComponentRegistry$$default = src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry;
    "use strict";

    var src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector = (function (_src$public$vendor$metaljs$src$disposable$Disposable$$default5) {
        function src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector() {
            _classCallCheck(this, src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector.prototype), "constructor", this).call(this);
        }

        _inherits(src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector, _src$public$vendor$metaljs$src$disposable$Disposable$$default5);

        _createClass(src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector, {
            createOrUpdateComponent: {

                /**
                 * Creates the appropriate component from the given config data if it doesn't
                 * exist yet, or updates an existing instance with the new attributes.
                 * @param {string} componentName The name of the component to be extracted.
                 * @param {!Object} data The component's config data.
                 * @return {!Component} The extracted component instance.
                 */

                value: function createOrUpdateComponent(componentName, data) {
                    var component = src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector.components[data.id];
                    if (component) {
                        component.setAttrs(data);
                    } else {
                        var ConstructorFn = src$public$vendor$metaljs$src$component$ComponentRegistry$$default.getConstructor(componentName);
                        data.element = "#" + data.id;
                        component = new ConstructorFn(data);
                        src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector.components[data.id] = component;
                    }
                    return component;
                }
            },
            extractComponentsFromString: {

                /**
                 * Handles the given string of rendered templates, converting them to
                 * component instances.
                 * @param {string} renderedComponents Rendered components.
                 * @return {!Array<!Component>}
                 */

                value: function extractComponentsFromString(renderedComponents) {
                    var components = [];
                    var regex = /\%\%\%\%~comp-([^~]+)~\%\%\%\%/g;
                    var match = regex.exec(renderedComponents);
                    while (match) {
                        if (match && match.length === 2) {
                            var id = match[1];
                            var component = src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector.components[id];
                            if (component) {
                                components.push(component);
                            }
                            match = regex.exec(renderedComponents);
                        }
                    }
                    return components;
                }
            }
        });

        return src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector;
    })(src$public$vendor$metaljs$src$disposable$Disposable$$default);

    /**
     * Holds all collected components, indexed by their id.
     * @type {!Object<string, !Component>}
     */
    src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector.components = {};

    var src$public$vendor$metaljs$src$component$ComponentCollector$$default = src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector;
    "use strict";

    /**
     * Collects inline events from a passed element, detaching previously
     * attached events that are not being used anymore.
     * @param {Component} component
     * @constructor
     * @extends {Disposable}
     */

    var src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector = (function (_src$public$vendor$metaljs$src$disposable$Disposable$$default6) {
        function src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector(component) {
            _classCallCheck(this, src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector.prototype), "constructor", this).call(this);

            if (!component) {
                throw new Error("The component instance is mandatory");
            }

            /**
             * Holds the component intance.
             * @type {!Component}
             * @protected
             */
            this.component_ = component;

            /**
             * Holds the attached delegate event handles, indexed by the css selector.
             * @type {!Object<string, !DomEventHandle>}
             * @protected
             */
            this.eventHandles_ = {};

            /**
             * Holds flags indicating which selectors a group has listeners for.
             * @type {!Object<string, !Object<string, boolean>>}
             * @protected
             */
            this.groupHasListener_ = {};
        }

        _inherits(src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector, _src$public$vendor$metaljs$src$disposable$Disposable$$default6);

        _createClass(src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector, {
            attachListener_: {

                /**
                 * Attaches the listener described by the given params, unless it has already
                 * been attached.
                 * @param {string} eventType
                 * @param {string} fnName
                 * @param {boolean} permanent
                 * @protected
                 */

                value: function attachListener_(eventType, fnName, groupName) {
                    var selector = "[data-on" + eventType + "=\"" + fnName + "\"]";

                    this.groupHasListener_[groupName][selector] = true;

                    if (!this.eventHandles_[selector]) {
                        var fn = this.component_[fnName].bind(this.component_);
                        this.eventHandles_[selector] = this.component_.delegate(eventType, selector, fn);
                    }
                }
            },
            attachListeners: {

                /**
                 * Attaches all listeners declared as attributes on the given element and
                 * its children.
                 * @param {string} content
                 * @param {boolean} groupName
                 */

                value: function attachListeners(content, groupName) {
                    this.groupHasListener_[groupName] = {};
                    this.attachListenersFromHtml_(content, groupName);
                }
            },
            attachListenersFromHtml_: {

                /**
                 * Attaches listeners found in the given html content.
                 * @param {string} content
                 * @param {boolean} groupName
                 * @protected
                 */

                value: function attachListenersFromHtml_(content, groupName) {
                    if (content.indexOf("data-on") === -1) {
                        return;
                    }
                    var regex = /data-on([a-z]+)=['|"](\w+)['"]/g;
                    var match = regex.exec(content);
                    while (match) {
                        this.attachListener_(match[1], match[2], groupName);
                        match = regex.exec(content);
                    }
                }
            },
            detachAllListeners: {

                /**
                 * Removes all previously attached event listeners to the component.
                 */

                value: function detachAllListeners() {
                    for (var selector in this.eventHandles_) {
                        if (this.eventHandles_[selector]) {
                            this.eventHandles_[selector].removeListener();
                        }
                    }
                    this.eventHandles_ = {};
                    this.listenerCounts_ = {};
                }
            },
            detachUnusedListeners: {

                /**
                 * Detaches all existing listeners that are not being used anymore.
                 * @protected
                 */

                value: function detachUnusedListeners() {
                    for (var selector in this.eventHandles_) {
                        var unused = true;
                        for (var groupName in this.groupHasListener_) {
                            if (this.groupHasListener_[groupName][selector]) {
                                unused = false;
                                break;
                            }
                        }
                        if (unused) {
                            this.eventHandles_[selector].removeListener();
                            this.eventHandles_[selector] = null;
                        }
                    }
                }
            },
            disposeInternal: {

                /**
                 * @inheritDoc
                 */

                value: function disposeInternal() {
                    this.detachAllListeners();
                    this.component_ = null;
                }
            }
        });

        return src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector;
    })(src$public$vendor$metaljs$src$disposable$Disposable$$default);

    var src$public$vendor$metaljs$src$component$EventsCollector$$default = src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector;
    var src$public$vendor$metaljs$src$soy$SoyComponent$soy$$Templates = src$public$vendor$metaljs$src$component$ComponentRegistry$$default.Templates;
    // This file was automatically generated from SoyComponent.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Templates.SoyComponent.
     * @hassoydeltemplate {ComponentChildren}
     */

    if (typeof src$public$vendor$metaljs$src$soy$SoyComponent$soy$$Templates.SoyComponent == "undefined") {
        src$public$vendor$metaljs$src$soy$SoyComponent$soy$$Templates.SoyComponent = {};
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    src$public$vendor$metaljs$src$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s2_26860e4b = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-children-placeholder\" data-component-children=\"\">" + (opt_data.children ? soy.$$escapeHtml(opt_data.children) : "") + "</div>");
    };
    if (goog.DEBUG) {
        src$public$vendor$metaljs$src$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s2_26860e4b.soyTemplateName = "Templates.SoyComponent.__deltemplate_s2_26860e4b";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("ComponentChildren"), "", 0, src$public$vendor$metaljs$src$soy$SoyComponent$soy$$Templates.SoyComponent.__deltemplate_s2_26860e4b);

    "use strict";

    /**
     * We need to listen to calls to soy deltemplates so we can use them to
     * properly instantiate and update child components defined through soy.
     * TODO: Switch to using proper AOP.
     */
    var src$public$vendor$metaljs$src$soy$SoyComponent$$originalGetDelegateFn = soy.$$getDelegateFn;

    /**
     * Special Component class that handles a better integration between soy templates
     * and the components. It allows for automatic rendering of surfaces that have soy
     * templates defined with their names, skipping the call to `getSurfaceContent`.
     * @param {Object} opt_config An object with the initial values for this component's
     *   attributes.
     * @constructor
     * @extends {Component}
     */

    var src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent = (function (_src$public$vendor$metaljs$src$component$Component$$default) {
        function src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent(opt_config) {
            _classCallCheck(this, src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent);

            _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "constructor", this).call(this, opt_config);

            src$public$vendor$metaljs$src$core$$default.mergeSuperClassesProperty(this.constructor, "TEMPLATES", this.mergeTemplates_);

            /**
             * Gets all nested components.
             * @type {!Array<!Component>}
             */
            this.components = {};

            /**
             * Holds events that were listened through the element.
             * @type {!EventHandler}
             * @protected
             */
            this.eventsCollector_ = new src$public$vendor$metaljs$src$component$EventsCollector$$default(this);

            /**
             * The component that should receive extracted component references when a
             * soy template is called. Starts with this component instance, but can change
             * as nested templates are called.
             * @type {!Component}
             * @protected
             */
            this.componentInProcess_ = this;

            /**
             * Holds the html strings of each rendered nested component or surface,
             * indexed by their element ids.
             * @type {!Object<string, !{content: string, isSurface: ?boolean}>}
             * @protected
             */
            this.renderedTemplates_ = {};

            /**
             * Holds the ids of the components that were most recently added via
             * `addComponentRef`. This object is cleared after the `attach` and
             * `renderSurfacesContent` methods are run.
             * @type {!Array<string>}
             * @protected
             */
            this.recentlyAddedComponents_ = [];

            this.addSurfacesFromTemplates_();
        }

        _inherits(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent, _src$public$vendor$metaljs$src$component$Component$$default);

        _createClass(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent, {
            addComponentRef: {

                /**
                 * Adds a component reference to the `components` variable.
                 * @param {string} ref Key that should be used to reference the give component.
                 * @param {!Component} component Component instance to be referenced.
                 */

                value: function addComponentRef(ref, component) {
                    this.components[ref] = component;
                    this.recentlyAddedComponents_.push(ref);
                }
            },
            addSurfacesFromTemplates_: {

                /**
                 * Adds surfaces for each registered template that is not named `element`.
                 * @protected
                 */

                value: function addSurfacesFromTemplates_() {
                    var templates = this.constructor.TEMPLATES_MERGED;
                    var templateNames = Object.keys(templates);
                    for (var i = 0; i < templateNames.length; i++) {
                        var templateName = templateNames[i];
                        if (templateName !== "content" && templateName.substr(0, 13) !== "__deltemplate") {

                            var surface = this.getSurface(templateName);
                            if (!surface) {
                                this.addSurface(templateName, {
                                    renderAttrs: templates[templateName].params
                                });
                            }
                        }
                    }
                }
            },
            attach: {

                /**
                 * @inheritDoc
                 * @override
                 */

                value: function attach(opt_parentElement, opt_siblingElement) {
                    if (this.decorating_) {
                        // We need to call the element soy template function when the component
                        // is being decorated, even though we won't use its results. This call is
                        // only needed in order for us to intercept the call data for nested components
                        // that are outside surfaces.
                        var templateContent = this.renderElementTemplate({ skipSurfaceContents: true });
                        this.renderedTemplates_[this.id] = { content: templateContent };
                    }

                    _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "attach", this).call(this, opt_parentElement, opt_siblingElement);

                    if (!this.wasRendered) {
                        this.attachNestedComponents_();
                        this.finishProcessingRenderedTemplates_();
                    }

                    return this;
                }
            },
            attachNestedComponent_: {

                /**
                 * Attaches the given component at the position of the given placeholder.
                 * @param {!Component} component
                 * @param {!Element} placeholder
                 * @protected
                 */

                value: function attachNestedComponent_(component, placeholder) {
                    var replacedPlaceholder = false;
                    if (placeholder !== component.element) {
                        // If the component's element is not the placeholder, we need to replace
                        // the placeholder with the real element.
                        placeholder.parentNode.insertBefore(component.element, placeholder);
                        placeholder.parentNode.removeChild(placeholder);
                        replacedPlaceholder = true;
                    }

                    if (!component.wasRendered) {
                        // If this component hasn't been rendered yet, we should do it now.
                        if (replacedPlaceholder) {
                            // If we had to replace the placeholder with the component's element,
                            // we'll need to copy the html over so we don't have to run soy again
                            // to render it.
                            src$public$vendor$metaljs$src$dom$dom$$default.append(component.element, placeholder.innerHTML);
                        }
                        component.decorateAsSubComponent();
                    }
                }
            },
            attachNestedComponents_: {

                /**
                 * Attaches recently added components to the dom.
                 * @protected
                 */

                value: function attachNestedComponents_() {
                    var element = this.element;
                    var componentIds = this.recentlyAddedComponents_;
                    for (var i = componentIds.length - 1; i >= 0; i--) {
                        var id = componentIds[i];
                        var placeholder = document.getElementById(id) || element.querySelector("#" + id);
                        if (placeholder) {
                            this.attachNestedComponent_(this.components[id], placeholder);
                        }
                    }
                    this.recentlyAddedComponents_ = [];
                }
            },
            buildAttrInfo_: {

                /**
                 * Overrides Attribute's `buildAttrInfo_` method to handle the `isComponentsArray`
                 * special attribute config.
                 * @param {string} name The name of the attribute.
                 * @param {Object} config The config object of the attribute.
                 * @param {*} initialValue The initial value of the attribute.
                 * @protected
                 * @override
                 */

                value: function buildAttrInfo_(name, config, initialValue) {
                    if (config.isComponentsArray && !config.setter) {
                        config.setter = "extractComponents_";
                    }
                    _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "buildAttrInfo_", this).call(this, name, config, initialValue);
                }
            },
            buildComponentConfigData_: {

                /**
                 * Builds the config data for a component from the data that was passed to its
                 * soy template function.
                 * @param {!Object} templateData
                 * @return {!Object} The component's config data.
                 * @protected
                 */

                value: function buildComponentConfigData_(templateData) {
                    var config = {};
                    for (var key in templateData) {
                        config[key] = templateData[key];
                    }
                    return config;
                }
            },
            buildTemplateData_: {

                /**
                 * Builds the data object that should be passed to the real soy template function
                 * for a component.
                 * @param {!Component} component The component that was extracted from the original
                 *   template data.
                 * @param {!Object} data The original data passed to the template function.
                 * @return {!Object}
                 * @protected
                 */

                value: function buildTemplateData_(component, data) {
                    var newData = {};
                    var attrNames = component.getAttrNames();
                    for (var i = 0; i < attrNames.length; i++) {
                        var name = attrNames[i];
                        if (name !== "element" && !component.getAttrConfig(name).isComponentsArray) {
                            newData[name] = component[name];
                        }
                    }
                    newData.componentName = data.componentName;
                    newData.children = data.children;
                    return newData;
                }
            },
            cacheSurfaceContent: {

                /**
                 * Overrides the original `cacheSurfaceContent_` function from `Component`, so it
                 * will cache a version of the surface content without nested component contents
                 * (that is, before replacing their placeholders with the contents).
                 * @param {string} surfaceId
                 * @param {string} content
                 * @override
                 */

                value: function cacheSurfaceContent(surfaceId, content) {
                    if (this.decorating_) {
                        return _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "cacheSurfaceContent", this).call(this, surfaceId, content);
                    }

                    var elementId = this.makeSurfaceId_(surfaceId);
                    if (this.renderedTemplates_[elementId]) {
                        content = this.renderedTemplates_[elementId].content;
                    }
                    _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "cacheSurfaceContent", this).call(this, surfaceId, content);
                }
            },
            decorateAsSubComponent: {

                /**
                 * Decorates this component as a subcomponent, meaning that no rendering is
                 * needed since it was already rendered by the parent component.
                 */

                value: function decorateAsSubComponent() {
                    this.decoratingAsSubcomponent_ = true;

                    this.syncAttrs_();
                    this.attach();

                    this.wasRendered = true;
                    this.decoratingAsSubcomponent_ = false;
                }
            },
            detach: {

                /**
                 * @inheritDoc
                 * @override
                 */

                value: function detach() {
                    this.eventsCollector_.detachAllListeners();
                    _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "detach", this).call(this);
                    return this;
                }
            },
            extractComponents_: {

                /**
                 * Extracts components from the given value, if it's a rendered soy template.
                 * Otherwise, returns the original value.
                 * @param {!Array|string} val
                 * @return {!Array}
                 * @protected
                 */

                value: function extractComponents_(val) {
                    if (this.hasSubcomponents_(val)) {
                        return src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.componentsCollector.extractComponentsFromString(val);
                    }
                    return val;
                }
            },
            finishProcessingRenderedTemplates_: {

                /**
                 * Finishes processing the templates rendered by this component. This processing
                 * includes attaching listeners and caching surface contents.
                 * @protected
                 */

                value: function finishProcessingRenderedTemplates_() {
                    src$public$vendor$metaljs$src$component$ComponentCollector$$default.components[this.id] = this;
                    var ids = Object.keys(this.renderedTemplates_);
                    for (var i = 0; i < ids.length; i++) {
                        var id = ids[i];
                        var componentId = id;
                        if (this.renderedTemplates_[id].isSurface) {
                            componentId = src$public$vendor$metaljs$src$component$Component$$default.extractComponentId(id);
                        }
                        var componentInProcess = src$public$vendor$metaljs$src$component$ComponentCollector$$default.components[componentId];
                        componentInProcess.getEventsCollector().attachListeners(this.renderedTemplates_[id].content, id);

                        if (this.renderedTemplates_[id].isSurface) {
                            var surfaceId = id.substr(componentId.length + 1);
                            componentInProcess.cacheSurfaceContent(surfaceId, this.renderedTemplates_[id].content);
                        }
                    }
                    this.renderedTemplates_ = {};
                }
            },
            getEventsCollector: {

                /**
                 * Gets this component's `EventsCollector` instance.
                 * @return {!EventsCollector}
                 */

                value: function getEventsCollector() {
                    return this.eventsCollector_;
                }
            },
            getSurfaceContent_: {

                /**
                 * Overrides the default behavior so that this can automatically render
                 * the appropriate soy template when one exists.
                 * @param {string} surfaceId The surface id.
                 * @return {Object|string} The content to be rendered.
                 * @protected
                 * @override
                 */

                value: function getSurfaceContent_(surfaceId) {
                    var surfaceTemplate = this.constructor.TEMPLATES_MERGED[surfaceId];
                    if (src$public$vendor$metaljs$src$core$$default.isFunction(surfaceTemplate)) {
                        var content = this.renderTemplate_(surfaceTemplate);
                        this.renderedTemplates_[this.makeSurfaceId_(surfaceId)] = {
                            content: content,
                            isSurface: true
                        };
                        return this.replaceComponentStringPlaceholders_(content);
                    }
                    return _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "getSurfaceContent_", this).call(this, surfaceId);
                }
            },
            handleGetDelegateFnCall_: {

                /**
                 * Handles a call to the soy function for getting delegate functions.
                 * @param {string} delTemplateId
                 * @param {string|number} delTemplateVariant
                 * @param {boolean} allowsEmptyDefault
                 * @return {!function}
                 * @protected
                 */

                value: function handleGetDelegateFnCall_(delTemplateId, delTemplateVariant, allowsEmptyDefault) {
                    var delegateFn = src$public$vendor$metaljs$src$soy$SoyComponent$$originalGetDelegateFn(delTemplateId, delTemplateVariant, allowsEmptyDefault);
                    if (delTemplateVariant !== "content") {
                        return delegateFn;
                    }

                    var splitId = delTemplateId.split(".");
                    var componentName = splitId[0];
                    var surfaceName = splitId[1];
                    if (surfaceName) {
                        return this.handleSurfaceCall_.bind(this, delegateFn, surfaceName);
                    } else {
                        return this.handleTemplateCall_.bind(this, delegateFn, componentName);
                    }
                }
            },
            handleSurfaceCall_: {

                /**
                 * Handles a call to the SoyComponent surface template.
                 * @param {!function} templateFn The original surface template function.
                 * @param {string} surfaceName The surface's name.
                 * @param {!Object} data The data the template was called with.
                 * @param {(null|undefined)=} ignored Second argument for soy templates.
                 * @param {Object.<string, *>=} ijData Optional injected data.
                 * @return {string} A placeholder to be rendered instead of the content the template
                 *   function would have returned.
                 * @protected
                 */

                value: function handleSurfaceCall_(templateFn, surfaceName, data, ignored, ijData) {
                    var elementId = data.id + "-" + surfaceName;
                    var rendered = templateFn(data, ignored, ijData);
                    this.renderedTemplates_[elementId] = {
                        content: rendered.content,
                        isSurface: true
                    };
                    return "%%%%~surface-" + elementId + "~%%%%";
                }
            },
            handleTemplateCall_: {

                /**
                 * Handles a call to the SoyComponent component template.
                 * @param {!function} templateFn The original component template function.
                 * @param {string} componentName The component's name.
                 * @param {!Object} data The data the template was called with.
                 * @param {(null|undefined)=} ignored Second argument for soy templates.
                 * @param {Object.<string, *>=} ijData Optional injected data.
                 * @return {string} A placeholder to be rendered instead of the content the template
                 *   function would have returned.
                 * @protected
                 */

                value: function handleTemplateCall_(templateFn, componentName, data, ignored, ijData) {
                    var config = this.buildComponentConfigData_(data);
                    var component = src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.componentsCollector.createOrUpdateComponent(componentName, config);
                    this.componentInProcess_.addComponentRef(data.id, component);

                    var prevComponentInProcess = this.componentInProcess_;
                    this.componentInProcess_ = component;
                    var newData = this.buildTemplateData_(component, data);
                    var renderedComponent = templateFn(newData, ignored, ijData);
                    this.renderedTemplates_[data.id] = renderedComponent;
                    this.componentInProcess_ = prevComponentInProcess;

                    return "%%%%~comp-" + data.id + "~%%%%";
                }
            },
            hasSubcomponents_: {

                /**
                 * Checks if the given value has subcomponents to be extracted.
                 * @param {*} value
                 * @return {boolean}
                 * @protected
                 */

                value: function hasSubcomponents_(value) {
                    return value instanceof soydata.SanitizedHtml;
                }
            },
            mergeTemplates_: {

                /**
                 * Merges an array of values for the `TEMPLATES` property into a single object.
                 * @param {!Array} values The values to be merged.
                 * @return {!Object} The merged value.
                 * @protected
                 */

                value: function mergeTemplates_(values) {
                    return src$public$vendor$metaljs$src$object$object$$default.mixin.apply(null, [{}].concat(values.reverse()));
                }
            },
            renderChildrenComponents_: {

                /**
                 * Renders this component's child components, if their placeholder is found.
                 * @param {!Array<!Component>} children
                 * @protected
                 * TODO(edu): Re-think this part.
                 */

                value: function renderChildrenComponents_(children) {
                    var id = this.makeSurfaceId_("children-placeholder");
                    var placeholder = document.getElementById(id) || this.element.querySelector("#" + id);
                    if (placeholder && children.length) {
                        src$public$vendor$metaljs$src$dom$dom$$default.removeChildren(placeholder);
                        children.forEach(function (child) {
                            if (child.wasRendered) {
                                src$public$vendor$metaljs$src$dom$dom$$default.append(placeholder, child.element);
                            } else {
                                child.render(placeholder);
                            }
                        });
                    }
                }
            },
            renderElementTemplate: {

                /**
                 * Renders the main element's template.
                 * @param {Object=} opt_injectedData
                 * @return {?string} The template's result content, or undefined if the
                 *   template doesn't exist.
                 */

                value: function renderElementTemplate(opt_injectedData) {
                    var elementTemplate = this.constructor.TEMPLATES_MERGED.content;
                    if (src$public$vendor$metaljs$src$core$$default.isFunction(elementTemplate)) {
                        return this.renderTemplate_(elementTemplate, opt_injectedData);
                    }
                }
            },
            renderInternal: {

                /**
                 * Overrides the behavior of this method to automatically render the element
                 * template if it's defined and to automatically attach listeners to all
                 * specified events by the user in the template. Also handles any calls to
                 * component templates.
                 * @override
                 */

                value: function renderInternal() {
                    var templateContent = this.renderElementTemplate();
                    if (templateContent) {
                        this.renderedTemplates_[this.id] = { content: templateContent };
                        templateContent = this.replaceComponentStringPlaceholders_(templateContent);
                        src$public$vendor$metaljs$src$dom$dom$$default.append(this.element, templateContent);
                    }
                }
            },
            renderSurfacesContent_: {

                /**
                 * @inheritDoc
                 */

                value: function renderSurfacesContent_(surfaces) {
                    // If this component is still being rendered we shouldn't render
                    // surfaces content or attach inline listeners, since these will
                    // already be done for the entire content.
                    if (this.inDocument || this.decorating_) {
                        _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "renderSurfacesContent_", this).call(this, surfaces);
                        this.renderedTemplates_ = {};
                    }
                    if (this.inDocument) {
                        this.attachNestedComponents_();
                        this.eventsCollector_.detachUnusedListeners();
                    }
                }
            },
            renderTemplate_: {

                /**
                 * Renders the specified template.
                 * @param {!function()} templateFn
                 * @param {Object=} opt_injectedData
                 * @return {string} The template's result content.
                 */

                value: function renderTemplate_(templateFn, opt_injectedData) {
                    soy.$$getDelegateFn = this.handleGetDelegateFnCall_.bind(this);
                    var content = templateFn(this, null, opt_injectedData || {}).content;
                    soy.$$getDelegateFn = src$public$vendor$metaljs$src$soy$SoyComponent$$originalGetDelegateFn;
                    return content;
                }
            },
            replaceComponentStringPlaceholder_: {

                /**
                 * Replaces the matched placeholder with the appropriate component's content, if
                 * it exists. Otherwise, keep the original content as it is.
                 * @param {string} match String placeholder.
                 * @param {string} type Either `comp` or `surface`.
                 * @param {string} id The id of the component that should replace the placeholder.
                 * @return {string} The content that should replace the placeholder.
                 * @protected
                 */

                value: function replaceComponentStringPlaceholder_(match, type, id) {
                    return this.renderedTemplates_[id] ? this.renderedTemplates_[id].content : match[0];
                }
            },
            replaceComponentStringPlaceholders_: {

                /**
                 * Replaces all string placeholders added to the given content by `handleGetDelegateFnCall_`
                 * with the real component content that should have been inserted there instead.
                 * @param {string} content
                 * @return {string} The content string with the replaced placeholders.
                 * @protected
                 */

                value: function replaceComponentStringPlaceholders_(content) {
                    var regex = /\%\%\%\%~(comp|surface)-([^~]+)~\%\%\%\%/g;
                    var previousContent;
                    do {
                        previousContent = content;
                        content = content.replace(regex, this.replaceComponentStringPlaceholder_.bind(this));
                    } while (previousContent !== content);
                    return content;
                }
            },
            replaceSurfaceContent_: {

                /**
                 * @inheritDoc
                 * @override
                 */

                value: function replaceSurfaceContent_(surfaceId, content) {
                    var id = this.makeSurfaceId_(surfaceId);
                    this.eventsCollector_.attachListeners(this.renderedTemplates_[id].content, id);
                    _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "replaceSurfaceContent_", this).call(this, surfaceId, content);
                }
            },
            syncChildren: {

                /**
                 * Syncs the component according to the new value of the `children` attribute.
                 */

                value: function syncChildren(newVal, prevVal) {
                    if (!this.decoratingAsSubcomponent_ && !src$public$vendor$metaljs$src$array$array$$default.equal(newVal, prevVal || [])) {
                        this.renderChildrenComponents_(newVal);
                    }
                }
            },
            validatorChildrenFn_: {

                /**
                 * Validator logic for `children` element.
                 * @param {*} val
                 * @return {boolean}
                 * @protected
                 */

                value: function validatorChildrenFn_(val) {
                    return this.hasSubcomponents_(val) || Array.isArray(val);
                }
            },
            valueElementFn_: {

                /**
                 * Provides the default value for element attribute.
                 * @return {Element} The element.
                 * @protected
                 */

                value: function valueElementFn_() {
                    var templateFn = soy.$$getDelegateFn(this.constructor.NAME, "element", true);
                    var attrs = this.getAttrs();
                    attrs.elementContent = "";
                    attrs.id = attrs.id || this.makeId_();
                    var rendered = templateFn(attrs, null, {}).content;
                    if (!rendered) {
                        return _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "valueElementFn_", this).call(this);
                    }

                    var frag = src$public$vendor$metaljs$src$dom$dom$$default.buildFragment(rendered);
                    var element = frag.childNodes[0];

                    // Remove element from fragment, so it won't have a parent. Otherwise,
                    // the `attach` method will think that the element has already been
                    // attached.
                    frag.removeChild(element);

                    return element;
                }
            },
            valueIdFn_: {

                /**
                 * Overrides the default value function for the `id` attribute, so it will
                 * handle the case where `element` is in the middle of its creation, which
                 * means the id should be generated.
                 * @return {string} The id.
                 * @protected
                 * @override
                 */

                value: function valueIdFn_() {
                    if (!this.element) {
                        return this.makeId_();
                    }
                    return _get(Object.getPrototypeOf(src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.prototype), "valueIdFn_", this).call(this);
                }
            }
        });

        return src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent;
    })(src$public$vendor$metaljs$src$component$Component$$default);

    /**
     * Helper responsible for extracting components from strings and config data.
     * @type {!ComponentCollector}
     * @protected
     * @static
     */
    src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.componentsCollector = new src$public$vendor$metaljs$src$component$ComponentCollector$$default();

    /**
     * SoyComponent attributes definition.
     * @type {Object}
     * @static
     */
    src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.ATTRS = {
        /**
         * Child components passed to this component.
         * @type {Array<Component>}
         */
        children: {
            isComponentsArray: true,
            validator: "validatorChildrenFn_",
            valueFn: function valueFn() {
                return [];
            }
        }
    };

    /**
     * The soy templates for this component. Templates that have the same
     * name of a registered surface will be used for automatically rendering
     * it.
     * @type {Object<string, !function(Object):Object>}
     * @protected
     * @static
     */
    src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent.TEMPLATES = {};

    var src$public$vendor$metaljs$src$soy$SoyComponent$$default = src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent;
    "use strict";

    var lib$scripts$Component$$Component = (function (_src$public$vendor$metaljs$src$soy$SoyComponent$$default) {
        function lib$scripts$Component$$Component(opt_config) {
            _classCallCheck(this, lib$scripts$Component$$Component);

            _get(Object.getPrototypeOf(lib$scripts$Component$$Component.prototype), "constructor", this).call(this, opt_config);
        }

        _inherits(lib$scripts$Component$$Component, _src$public$vendor$metaljs$src$soy$SoyComponent$$default);

        _createClass(lib$scripts$Component$$Component, {
            syncVisible: {
                value: function syncVisible(visible) {
                    this.element.style.display = visible ? null : "none";
                }
            }
        });

        return lib$scripts$Component$$Component;
    })(src$public$vendor$metaljs$src$soy$SoyComponent$$default);

    lib$scripts$Component$$Component.ATTRS = {
        visible: {
            validator: src$public$vendor$metaljs$src$core$$default.isBoolean,
            value: true
        }
    };

    var lib$scripts$Component$$default = lib$scripts$Component$$Component;
    "use strict";

    var lib$scripts$Features$$Features = {
        dragDrop: function dragDrop() {
            return typeof FileReader !== "undefined" && "draggable" in document.createElement("span");
        },

        ajaxUpload: function ajaxUpload() {
            return !!window.FormData && "upload" in new XMLHttpRequest();
        }
    };

    var lib$scripts$Features$$default = lib$scripts$Features$$Features;
    "use strict";

    /*
     * DragDropUpload component.
     */

    var lib$scripts$DragDropUpload$$DragDropUpload = (function (_src$public$vendor$metaljs$src$component$Component$$default2) {
        /**
         * @inheritDoc
         */

        function lib$scripts$DragDropUpload$$DragDropUpload(opt_config) {
            _classCallCheck(this, lib$scripts$DragDropUpload$$DragDropUpload);

            _get(Object.getPrototypeOf(lib$scripts$DragDropUpload$$DragDropUpload.prototype), "constructor", this).call(this, opt_config);
        }

        _inherits(lib$scripts$DragDropUpload$$DragDropUpload, _src$public$vendor$metaljs$src$component$Component$$default2);

        _createClass(lib$scripts$DragDropUpload$$DragDropUpload, {
            attached: {

                /**
                 * @inheritDoc
                 */

                value: function attached() {
                    if (this.isCompatible_) {
                        this.eventHandler_ = new src$public$vendor$metaljs$src$events$EventHandler$$default();
                        this.eventHandler_.add(this.on("dragenter", this.onDragEnter_, this), this.on("dragleave", this.onDragLeave_, this), this.on("dragover", this.preventEvent_, this), this.on("drop", this.onDrop_, this));
                    }
                }
            },
            created: {

                /**
                 * @inheritDoc
                 */

                value: function created() {
                    this.isCompatible_ = lib$scripts$Features$$default.dragDrop() && lib$scripts$Features$$default.ajaxUpload();
                }
            },
            detached: {

                /**
                 * @inheritDoc
                 */

                value: function detached() {
                    if (this.isCompatible_) {
                        this.eventHandler_.removeAllListeners();
                    }
                }
            },
            onDragEnter_: {

                /**
                 * Adds a class, specified in `hoverClass` attribute, to the main element.
                 *
                 * @protected
                 * @param {!Event} event Drag enter event
                 */

                value: function onDragEnter_(event) {
                    this.preventEvent_(event);

                    if (this.hoverClass) {
                        src$public$vendor$metaljs$src$dom$dom$$default.addClasses(this.element, [this.hoverClass]);
                    }
                }
            },
            onDragLeave_: {

                /**
                 * Removes a class, specified in `hoverClass` attribute, from the main element.
                 *
                 * @protected
                 * @param {!Event} event Drag leave event
                 */

                value: function onDragLeave_(event) {
                    this.preventEvent_(event);

                    if (this.hoverClass && src$public$vendor$metaljs$src$dom$dom$$default.hasClass(event.target, this.hoverClass)) {
                        src$public$vendor$metaljs$src$dom$dom$$default.removeClasses(this.element, [this.hoverClass]);
                    }
                }
            },
            onDrop_: {

                /**
                 * Handles dropping files in the main area.
                 *
                 * @protected
                 * @param {!Event} event Drop event
                 */

                value: function onDrop_(event) {
                    this.preventEvent_(event);
                    this.uploadFiles_(event.dataTransfer.files);
                }
            },
            preventEvent_: {

                /**
                 * Prevents a native event.
                 *
                 * @protected
                 * @param {!Event} event The event to be prevented
                 */

                value: function preventEvent_(event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
            },
            uploadFiles_: {

                /**
                 * Uploads files to the provided URL from the `uploadURL` attribute.
                 *
                 * @param {!Array.<File>} files List of files to be uploaded to server
                 */

                value: function uploadFiles_(files) {
                    var formData = new FormData();

                    for (var i = 0; i < files.length; i++) {
                        formData.append("file", files[i]);
                    }

                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", this.uploadURL);

                    xhr.onerror = (function () {
                        this.emit("uploadFailed");
                    }).bind(this);

                    xhr.onload = (function () {
                        this.emit("uploadFinished");
                    }).bind(this);

                    xhr.upload.onprogress = (function (event) {
                        if (event.lengthComputable) {
                            this.emit("uploadProgress", event.loaded / event.total * 100 | 0);
                        }
                    }).bind(this);

                    xhr.send(formData);

                    this.emit("uploadStart", xhr);
                }
            }
        });

        return lib$scripts$DragDropUpload$$DragDropUpload;
    })(src$public$vendor$metaljs$src$component$Component$$default);

    /**
     * DragDropUpload attributes definition.
     * @type {Object}
     * @static
     */
    lib$scripts$DragDropUpload$$DragDropUpload.ATTRS = {
        /**
         * The class which have to be added on the bounding box when user hovers on it.
         *
         * @type {string}
         * @default dragdrop-hover
         */
        hoverClass: {
            validator: function validator(value) {
                return src$public$vendor$metaljs$src$core$$default.isString(value) || src$public$vendor$metaljs$src$core$$default.isNull(value);
            },
            value: "dragdrop-hover"
        },

        /**
         * The URL where the files should be uploaded.
         *
         * @type {string}
         */
        uploadURL: {
            validator: src$public$vendor$metaljs$src$core$$default.isString
        }
    };

    src$public$vendor$metaljs$src$component$ComponentRegistry$$default.register("DragDropUpload", lib$scripts$DragDropUpload$$DragDropUpload);

    var lib$scripts$DragDropUpload$$default = lib$scripts$DragDropUpload$$DragDropUpload;
    var lib$scripts$List$soy$$Templates = src$public$vendor$metaljs$src$component$ComponentRegistry$$default.Templates;
    // This file was automatically generated from List.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Templates.List.
     * @hassoydeltemplate {List}
     * @hassoydeltemplate {List.items}
     * @hassoydelcall {List}
     * @hassoydelcall {List.items}
     */

    if (typeof lib$scripts$List$soy$$Templates.List == "undefined") {
        lib$scripts$List$soy$$Templates.List = {};
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$List$soy$$Templates.List.content = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("List.items"), "", true)(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$List$soy$$Templates.List.content.soyTemplateName = "Templates.List.content";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$List$soy$$Templates.List.items = function (opt_data, opt_ignored, opt_ijData) {
        var output = "";
        var itemList5 = opt_data.items;
        var itemListLen5 = itemList5.length;
        for (var itemIndex5 = 0; itemIndex5 < itemListLen5; itemIndex5++) {
            var itemData5 = itemList5[itemIndex5];
            output += "<li class=\"list-item u-cf\">";
            if (itemData5.icons) {
                output += "<div class=\"list-icons u-pull-right\">";
                var iconList10 = itemData5.icons;
                var iconListLen10 = iconList10.length;
                for (var iconIndex10 = 0; iconIndex10 < iconListLen10; iconIndex10++) {
                    var iconData10 = iconList10[iconIndex10];
                    output += "<span class=\"list-icon " + soy.$$escapeHtmlAttribute(iconData10) + "\"></span>";
                }
                output += "</div>";
            }
            output += (itemData5.img ? "<span class=\"list-image u-pull-left " + soy.$$escapeHtmlAttribute(itemData5.img["class"]) + "\"><img src=\"" + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData5.img.src)) + "\"></span>" : "") + "<div class=\"list-main-content u-pull-left\"><div class=\"list-text-primary\">" + soy.$$escapeHtml(itemData5.content) + "</div>" + (itemData5.help ? "<div class=\"list-text-secondary\">" + soy.$$escapeHtml(itemData5.help) + "</div>" : "") + "</div></li>";
        }
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
    };
    if (goog.DEBUG) {
        lib$scripts$List$soy$$Templates.List.items.soyTemplateName = "Templates.List.items";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$List$soy$$Templates.List.__deltemplate_s33_e3f298e9 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<ul id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-items\">" + soy.$$escapeHtml(opt_data.elementContent) + "</ul>");
    };
    if (goog.DEBUG) {
        lib$scripts$List$soy$$Templates.List.__deltemplate_s33_e3f298e9.soyTemplateName = "Templates.List.__deltemplate_s33_e3f298e9";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("List.items"), "element", 0, lib$scripts$List$soy$$Templates.List.__deltemplate_s33_e3f298e9);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$List$soy$$Templates.List.__deltemplate_s39_88d36183 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("List"), "element", true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + soy.$$getDelegateFn(soy.$$getDelTemplateId("List"), "content", true)(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$List$soy$$Templates.List.__deltemplate_s39_88d36183.soyTemplateName = "Templates.List.__deltemplate_s39_88d36183";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("List"), "", 0, lib$scripts$List$soy$$Templates.List.__deltemplate_s39_88d36183);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$List$soy$$Templates.List.__deltemplate_s45_22b2cd87 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$List$soy$$Templates.List.content(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$List$soy$$Templates.List.__deltemplate_s45_22b2cd87.soyTemplateName = "Templates.List.__deltemplate_s45_22b2cd87";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("List"), "content", 0, lib$scripts$List$soy$$Templates.List.__deltemplate_s45_22b2cd87);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$List$soy$$Templates.List.__deltemplate_s47_4ac84340 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "\" class=\"list component" + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? " " + opt_data.elementClasses : "") + "\" data-component=\"\">" + soy.$$escapeHtml(opt_data.elementContent) + "</div>");
    };
    if (goog.DEBUG) {
        lib$scripts$List$soy$$Templates.List.__deltemplate_s47_4ac84340.soyTemplateName = "Templates.List.__deltemplate_s47_4ac84340";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("List"), "element", 0, lib$scripts$List$soy$$Templates.List.__deltemplate_s47_4ac84340);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$List$soy$$Templates.List.__deltemplate_s55_605e1843 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("List.items"), "element", true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (!opt_ijData.skipSurfaceContents ? soy.$$getDelegateFn(soy.$$getDelTemplateId("List.items"), "content", true)(opt_data, null, opt_ijData) : "")), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$List$soy$$Templates.List.__deltemplate_s55_605e1843.soyTemplateName = "Templates.List.__deltemplate_s55_605e1843";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("List.items"), "", 0, lib$scripts$List$soy$$Templates.List.__deltemplate_s55_605e1843);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$List$soy$$Templates.List.__deltemplate_s62_a7f1f1fc = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$List$soy$$Templates.List.items(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$List$soy$$Templates.List.__deltemplate_s62_a7f1f1fc.soyTemplateName = "Templates.List.__deltemplate_s62_a7f1f1fc";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("List.items"), "content", 0, lib$scripts$List$soy$$Templates.List.__deltemplate_s62_a7f1f1fc);

    lib$scripts$List$soy$$Templates.List.items.params = ["items"];
    "use strict";

    /**
     * List component.
     */

    var lib$scripts$List$$List = (function (_lib$scripts$Component$$default) {
        function lib$scripts$List$$List(opt_config) {
            _classCallCheck(this, lib$scripts$List$$List);

            _get(Object.getPrototypeOf(lib$scripts$List$$List.prototype), "constructor", this).call(this, opt_config);
        }

        _inherits(lib$scripts$List$$List, _lib$scripts$Component$$default);

        return lib$scripts$List$$List;
    })(lib$scripts$Component$$default);

    /**
     * Default list elementClasses.
     * @default list
     * @type {String}
     * @static
     */
    lib$scripts$List$$List.ELEMENT_CLASSES = "list";

    /**
     * List attributes definition.
     * @type {Object}
     * @static
     */
    lib$scripts$List$$List.ATTRS = {
        /**
         * The list items. Each is represented by an object that can have the following keys:
         *   - content: The item's main content.
         *   - help: (Optional) The item's help content.
         *   - icons: (Optional) A list of icon css classes to render on the right side.
         *   - img: (Optional) An object that specifies the image's src and, optionally, a css
         *       class it should use.
         * @type {!Array<!Object>}
         * @default []
         */
        items: {
            validator: Array.isArray,
            valueFn: function valueFn() {
                return [];
            }
        }
    };

    src$public$vendor$metaljs$src$component$ComponentRegistry$$default.register("List", lib$scripts$List$$List);

    var lib$scripts$List$$default = lib$scripts$List$$List;
    var lib$scripts$Modal$soy$$Templates = src$public$vendor$metaljs$src$component$ComponentRegistry$$default.Templates;
    // This file was automatically generated from Modal.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Templates.Modal.
     * @hassoydeltemplate {Modal}
     * @hassoydeltemplate {Modal.body}
     * @hassoydeltemplate {Modal.footer}
     * @hassoydeltemplate {Modal.header}
     * @hassoydelcall {Modal}
     * @hassoydelcall {Modal.body}
     * @hassoydelcall {Modal.footer}
     * @hassoydelcall {Modal.header}
     */

    if (typeof lib$scripts$Modal$soy$$Templates.Modal == "undefined") {
        lib$scripts$Modal$soy$$Templates.Modal = {};
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.content = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.header"), "", true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.body"), "", true)(opt_data, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "", true)(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.content.soyTemplateName = "Templates.Modal.content";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.body = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.body ? soy.$$escapeHtml(opt_data.body) : "");
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.body.soyTemplateName = "Templates.Modal.body";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.footer = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.footer ? soy.$$escapeHtml(opt_data.footer) : "");
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.footer.soyTemplateName = "Templates.Modal.footer";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.header = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.header ? "<a class=\"modal-close icon-12-close-long\" data-onclick=\"close\"></a>" + soy.$$escapeHtml(opt_data.header) : "");
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.header.soyTemplateName = "Templates.Modal.header";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s82_65c2d4d4 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<section id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-body\">" + soy.$$escapeHtml(opt_data.elementContent) + "</section>");
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s82_65c2d4d4.soyTemplateName = "Templates.Modal.__deltemplate_s82_65c2d4d4";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.body"), "element", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s82_65c2d4d4);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s88_c9897a65 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<footer id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-footer\">" + soy.$$escapeHtml(opt_data.elementContent) + "</footer>");
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s88_c9897a65.soyTemplateName = "Templates.Modal.__deltemplate_s88_c9897a65";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "element", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s88_c9897a65);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s94_499dc9aa = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<header id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-header\">" + soy.$$escapeHtml(opt_data.elementContent) + "</header>");
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s94_499dc9aa.soyTemplateName = "Templates.Modal.__deltemplate_s94_499dc9aa";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.header"), "element", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s94_499dc9aa);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s100_45b138fb = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal"), "element", true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal"), "content", true)(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s100_45b138fb.soyTemplateName = "Templates.Modal.__deltemplate_s100_45b138fb";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal"), "", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s100_45b138fb);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s106_77dbabf9 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$Modal$soy$$Templates.Modal.content(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s106_77dbabf9.soyTemplateName = "Templates.Modal.__deltemplate_s106_77dbabf9";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal"), "content", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s106_77dbabf9);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s108_df8ef55a = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "\" class=\"modal component" + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? " " + opt_data.elementClasses : "") + "\" data-component=\"\">" + soy.$$escapeHtml(opt_data.elementContent) + "</div>");
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s108_df8ef55a.soyTemplateName = "Templates.Modal.__deltemplate_s108_df8ef55a";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal"), "element", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s108_df8ef55a);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s116_90747620 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.body"), "element", true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (!opt_ijData.skipSurfaceContents ? soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.body"), "content", true)(opt_data, null, opt_ijData) : "")), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s116_90747620.soyTemplateName = "Templates.Modal.__deltemplate_s116_90747620";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.body"), "", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s116_90747620);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s123_016394a5 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$Modal$soy$$Templates.Modal.body(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s123_016394a5.soyTemplateName = "Templates.Modal.__deltemplate_s123_016394a5";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.body"), "content", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s123_016394a5);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s125_231e36e7 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "element", true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (!opt_ijData.skipSurfaceContents ? soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "content", true)(opt_data, null, opt_ijData) : "")), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s125_231e36e7.soyTemplateName = "Templates.Modal.__deltemplate_s125_231e36e7";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s125_231e36e7);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s132_ff0238db = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$Modal$soy$$Templates.Modal.footer(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s132_ff0238db.soyTemplateName = "Templates.Modal.__deltemplate_s132_ff0238db";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.footer"), "content", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s132_ff0238db);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s134_b8354b7d = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.header"), "element", true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (!opt_ijData.skipSurfaceContents ? soy.$$getDelegateFn(soy.$$getDelTemplateId("Modal.header"), "content", true)(opt_data, null, opt_ijData) : "")), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s134_b8354b7d.soyTemplateName = "Templates.Modal.__deltemplate_s134_b8354b7d";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.header"), "", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s134_b8354b7d);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s141_7a6de6d1 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$Modal$soy$$Templates.Modal.header(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s141_7a6de6d1.soyTemplateName = "Templates.Modal.__deltemplate_s141_7a6de6d1";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Modal.header"), "content", 0, lib$scripts$Modal$soy$$Templates.Modal.__deltemplate_s141_7a6de6d1);

    lib$scripts$Modal$soy$$Templates.Modal.body.params = ["body"];
    lib$scripts$Modal$soy$$Templates.Modal.footer.params = ["footer"];
    lib$scripts$Modal$soy$$Templates.Modal.header.params = ["header"];
    "use strict";

    /**
     * Modal component.
     */

    var lib$scripts$Modal$$Modal = (function (_lib$scripts$Component$$default2) {
        /**
         * @inheritDoc
         */

        function lib$scripts$Modal$$Modal(opt_config) {
            _classCallCheck(this, lib$scripts$Modal$$Modal);

            _get(Object.getPrototypeOf(lib$scripts$Modal$$Modal.prototype), "constructor", this).call(this, opt_config);
        }

        _inherits(lib$scripts$Modal$$Modal, _lib$scripts$Component$$default2);

        _createClass(lib$scripts$Modal$$Modal, {
            close: {

                /**
                 * Closes the tooltip.
                 */

                value: function close() {
                    this.visible = false;
                }
            },
            disposeInternal: {

                /**
                 * @inheritDoc
                 */

                value: function disposeInternal() {
                    src$public$vendor$metaljs$src$dom$dom$$default.exitDocument(this.overlayElement);
                    _get(Object.getPrototypeOf(lib$scripts$Modal$$Modal.prototype), "disposeInternal", this).call(this);
                }
            },
            syncOverlay: {

                /**
                 * @inheritDoc
                 */

                value: function syncOverlay(overlay) {
                    src$public$vendor$metaljs$src$dom$dom$$default[overlay ? "enterDocument" : "exitDocument"](this.overlayElement);
                }
            },
            syncVisible: {

                /**
                 * @inheritDoc
                 */

                value: function syncVisible(visible) {
                    if (this.overlay) {
                        this.syncOverlay(visible);
                    }
                    _get(Object.getPrototypeOf(lib$scripts$Modal$$Modal.prototype), "syncVisible", this).call(this, visible);
                }
            },
            valueOverlayElementFn_: {

                /**
                 * @inheritDoc
                 */

                value: function valueOverlayElementFn_() {
                    return src$public$vendor$metaljs$src$dom$dom$$default.buildFragment("<div class=\"overlay\"></div>").firstChild;
                }
            }
        });

        return lib$scripts$Modal$$Modal;
    })(lib$scripts$Component$$default);

    /**
     * Default modal elementClasses.
     * @default modal
     * @type {String}
     * @static
     */
    lib$scripts$Modal$$Modal.ELEMENT_CLASSES = "modal";

    lib$scripts$Modal$$Modal.ATTRS = {
        /**
         * Content to be placed inside modal body.
         * @type {String}
         */
        body: {
            validator: src$public$vendor$metaljs$src$core$$default.isString
        },

        /**
         * Modal default elementClasses attribute.
         * @default centered
         * @type {String}
         */
        elementClasses: {
            value: "centered"
        },

        /**
         * Content to be placed inside modal footer.
         * @type {String}
         */
        footer: {
            validator: src$public$vendor$metaljs$src$core$$default.isString
        },

        /**
         * Content to be placed inside modal header.
         * @type {String}
         */
        header: {
            validator: src$public$vendor$metaljs$src$core$$default.isString
        },

        /**
         * Whether overlay should be visible when modal is visible.
         * @type {boolean}
         * @default true
         */
        overlay: {
            validator: src$public$vendor$metaljs$src$core$$default.isBoolean,
            value: true
        },

        /**
         * Element to be used as overlay.
         * @type {Element}
         */
        overlayElement: {
            initOnly: true,
            valueFn: "valueOverlayElementFn_"
        }
    };

    src$public$vendor$metaljs$src$component$ComponentRegistry$$default.register("Modal", lib$scripts$Modal$$Modal);

    var lib$scripts$Modal$$default = lib$scripts$Modal$$Modal;
    "use strict";

    /**
     * Position utility. Computes region or best region to align an element with
     * another. Regions are relative to viewport, make sure to use element with
     * position fixed, or position absolute when the element first positioned
     * parent is the body element.
     */

    var lib$scripts$Position$$Position = (function () {
        function lib$scripts$Position$$Position() {
            _classCallCheck(this, lib$scripts$Position$$Position);
        }

        _createClass(lib$scripts$Position$$Position, null, {
            align: {

                /**
                 * Aligns the element with the best region around alignElement. The best
                 * region is defined by clockwise rotation starting from the specified
                 * `position`. The element is always aligned in the middle of alignElement
                 * axis.
                 * @param {!Element} element Element to be aligned.
                 * @param {!Element} alignElement Element to align with.
                 * @param {Position.Top|Position.Right|Position.Bottom|Position.Left} pos
                 *     The initial position to try. Options `Position.Top`, `Position.Right`,
                 *     `Position.Bottom`, `Position.Left`.
                 * @static
                 */

                value: function align(element, alignElement, position) {
                    var bestRegion = this.getAlignBestRegion(element, alignElement, position);

                    var computedStyle = window.getComputedStyle(element, null);
                    if (computedStyle.getPropertyValue("position") !== "fixed") {
                        var docEl = window.document.documentElement;
                        bestRegion.top += docEl.clientTop + window.pageYOffset;
                        bestRegion.left += docEl.clientLeft + window.pageXOffset;
                    }

                    element.style.top = bestRegion.top + "px";
                    element.style.left = bestRegion.left + "px";
                }
            },
            getAlignBestRegion: {

                /**
                 * Returns the best region to align element with alignElement. The best
                 * region is defined by clockwise rotation starting from the specified
                 * `position`. The element is always aligned in the middle of alignElement
                 * axis.
                 * @param {!Element} element Element to be aligned.
                 * @param {!Element} alignElement Element to align with.
                 * @param {Position.Top|Position.Right|Position.Bottom|Position.Left} pos
                 *     The initial position to try. Options `Position.Top`, `Position.Right`,
                 *     `Position.Bottom`, `Position.Left`.
                 * @return {DOMRect} Best region to align element.
                 * @static
                 */

                value: function getAlignBestRegion(element, alignElement, position) {
                    var bestArea = 0;
                    var bestPosition = position;
                    var bestRegion = this.getAlignRegion(element, alignElement, bestPosition);
                    var tryPosition = bestPosition;
                    var tryRegion = bestRegion;
                    var viewportRegion = src$public$vendor$metal$position$src$position$$default.getRegion(window);

                    for (var i = 0; i < 4;) {
                        if (src$public$vendor$metal$position$src$position$$default.intersectRegion(viewportRegion, tryRegion)) {
                            var visibleRegion = src$public$vendor$metal$position$src$position$$default.intersection(viewportRegion, tryRegion);
                            var area = visibleRegion.width * visibleRegion.height;
                            if (area > bestArea) {
                                bestArea = area;
                                bestRegion = tryRegion;
                                bestPosition = tryPosition;
                            }
                            if (src$public$vendor$metal$position$src$position$$default.insideViewport(tryRegion)) {
                                break;
                            }
                        }
                        tryPosition = (position + ++i) % 4;
                        tryRegion = this.getAlignRegion(element, alignElement, tryPosition);
                    }

                    return bestRegion;
                }
            },
            getAlignRegion: {

                /**
                 * Returns the region to align element with alignElement. The element is
                 * always aligned in the middle of alignElement axis.
                 * @param {!Element} element Element to be aligned.
                 * @param {!Element} alignElement Element to align with.
                 * @param {Position.Top|Position.Right|Position.Bottom|Position.Left} pos
                 *     The position to align. Options `Position.Top`, `Position.Right`,
                 *     `Position.Bottom`, `Position.Left`.
                 * @return {DOMRect} Region to align element.
                 * @static
                 */

                value: function getAlignRegion(element, alignElement, position) {
                    var r1 = src$public$vendor$metal$position$src$position$$default.getRegion(alignElement);
                    var r2 = src$public$vendor$metal$position$src$position$$default.getRegion(element);
                    var top = 0;
                    var left = 0;

                    switch (position) {
                        case lib$scripts$Position$$Position.Top:
                            top = r1.top - r2.height;
                            left = r1.left + r1.width / 2 - r2.width / 2;
                            break;
                        case lib$scripts$Position$$Position.Right:
                            top = r1.top + r1.height / 2 - r2.height / 2;
                            left = r1.left + r1.width;
                            break;
                        case lib$scripts$Position$$Position.Bottom:
                            top = r1.bottom;
                            left = r1.left + r1.width / 2 - r2.width / 2;
                            break;
                        case lib$scripts$Position$$Position.Left:
                            top = r1.top + r1.height / 2 - r2.height / 2;
                            left = r1.left - r2.width;
                            break;
                    }

                    return {
                        bottom: top + r2.height,
                        height: r2.height,
                        left: left,
                        right: left + r2.width,
                        top: top,
                        width: r2.width
                    };
                }
            },
            isValidPosition: {

                /**
                 * Checks if specified value is a valid position. Options `Position.Top`,
                 *     `Position.Right`, `Position.Bottom`, `Position.Left`.
                 * @param {Position.Top|Position.Right|Position.Bottom|Position.Left} val
                 * @return {Boolean} Returns true if value is a valid position.
                 * @static
                 */

                value: function isValidPosition(val) {
                    return 0 <= val && val <= 3;
                }
            }
        });

        return lib$scripts$Position$$Position;
    })();

    /**
     * Represents the `Position.Top` constant.
     * @type {Number}
     * @default 0
     * @static
     */
    lib$scripts$Position$$Position.Top = 0;

    /**
     * Represents the `Position.Right` constant.
     * @type {Number}
     * @default 1
     * @static
     */
    lib$scripts$Position$$Position.Right = 1;

    /**
     * Represents the `Position.Bottom` constant.
     * @type {Number}
     * @default 2
     * @static
     */
    lib$scripts$Position$$Position.Bottom = 2;

    /**
     * Represents the `Position.Left` constant.
     * @type {Number}
     * @default 3
     * @static
     */
    lib$scripts$Position$$Position.Left = 3;

    var lib$scripts$Position$$default = lib$scripts$Position$$Position;
    "use strict";

    /**
     * Scrollspy utility.
     */

    var lib$scripts$Scrollspy$$Scrollspy = (function (_src$public$vendor$metaljs$src$attribute$Attribute$$default3) {
        /**
         * @inheritDoc
         */

        function lib$scripts$Scrollspy$$Scrollspy(opt_config) {
            _classCallCheck(this, lib$scripts$Scrollspy$$Scrollspy);

            _get(Object.getPrototypeOf(lib$scripts$Scrollspy$$Scrollspy.prototype), "constructor", this).call(this, opt_config);

            /**
             * Holds the active index.
             * @type {Number}
             * @private
             * @default -1
             */
            this.activeIndex = -1;

            /**
             * Holds the regions cache.
             * @type {Object}
             * @private
             * @default []
             */
            this.regions = [];

            /**
             * Holds event handle that listens scroll shared event emitter proxy.
             * @type {EventHandle}
             * @protected
             */
            this.scrollHandle_ = src$public$vendor$metaljs$src$dom$dom$$default.on(this.scrollElement, "scroll", this.checkPosition.bind(this));

            this.refresh();
            this.checkPosition();
            this.on("elementChanged", this.refresh);
            this.on("offsetChanged", this.refresh);
            this.on("scrollElementChanged", this.refresh);
            this.on("selectorChanged", this.refresh);
        }

        _inherits(lib$scripts$Scrollspy$$Scrollspy, _src$public$vendor$metaljs$src$attribute$Attribute$$default3);

        _createClass(lib$scripts$Scrollspy$$Scrollspy, {
            disposeInternal: {

                /**
                 * @inheritDoc
                 */

                value: function disposeInternal() {
                    this.deactivateAll();
                    this.scrollHandle_.dispose();
                    _get(Object.getPrototypeOf(lib$scripts$Scrollspy$$Scrollspy.prototype), "disposeInternal", this).call(this);
                }
            },
            activate: {

                /**
                 * Activates index matching element.
                 * @param {Number} index
                 */

                value: function activate(index) {
                    if (this.activeIndex >= 0) {
                        this.deactivate(this.activeIndex);
                    }
                    this.activeIndex = index;
                    src$public$vendor$metaljs$src$dom$dom$$default.addClasses(this.resolveElement(this.regions[index].link), [this.activeClass]);
                }
            },
            checkPosition: {

                /**
                 * Checks position of elements and activate the one in region.
                 */

                value: function checkPosition() {
                    var scrollHeight = this.getScrollHeight_();
                    var scrollTop = src$public$vendor$metal$position$src$position$$default.getScrollTop(this.scrollElement);

                    if (this.activeIndex >= 0 && scrollTop < this.offset) {
                        this.deactivateAll();
                        return;
                    }

                    if (scrollHeight !== this.scrollHeight_) {
                        this.refresh();
                        return;
                    }

                    if (scrollHeight < scrollTop + this.offset) {
                        this.activate(this.regions.length - 1);
                        return;
                    }

                    var index = this.findBestRegionAt_(scrollTop);
                    if (index >= 0 && index !== this.activeIndex) {
                        this.activate(index);
                    }
                }
            },
            deactivate: {

                /**
                 * Deactivates index matching element.
                 * @param {Number} index
                 */

                value: function deactivate(index) {
                    src$public$vendor$metaljs$src$dom$dom$$default.removeClasses(this.resolveElement(this.regions[index].link), [this.activeClass]);
                }
            },
            deactivateAll: {

                /**
                 * Deactivates all elements.
                 */

                value: function deactivateAll() {
                    for (var i = 0; i < this.regions.length; i++) {
                        this.deactivate(i);
                    }
                    this.activeIndex = -1;
                }
            },
            findBestRegionAt_: {

                /**
                 * Finds best region to activate.
                 * @param {number} scrollTop The scrollTop to use as reference.
                 * @return {number} The index of best region found.
                 */

                value: function findBestRegionAt_(scrollTop) {
                    var index = -1;
                    var origin = scrollTop + this.offset + this.scrollElementRegion_.top;
                    for (var i = 0; i < this.regions.length; i++) {
                        var region = this.regions[i];
                        if (origin >= region.top && origin < region.bottom) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                }
            },
            getScrollHeight_: {

                /**
                 * Gets the scroll height of `scrollElement`.
                 * @return {Number}
                 */

                value: function getScrollHeight_() {
                    var scrollHeight = src$public$vendor$metal$position$src$position$$default.getHeight(this.scrollElement);
                    scrollHeight += this.scrollElementRegion_.top;
                    scrollHeight -= src$public$vendor$metal$position$src$position$$default.getClientHeight(this.scrollElement);
                    return scrollHeight;
                }
            },
            refresh: {

                /**
                 * Refreshes all regions from document. Relevant when spying elements that
                 * nodes can be added and removed.
                 */

                value: function refresh() {
                    this.deactivateAll();

                    this.scrollElementRegion_ = src$public$vendor$metal$position$src$position$$default.getRegion(this.scrollElement);
                    this.scrollHeight_ = this.getScrollHeight_();

                    this.regions = [];
                    var links = this.element.querySelectorAll(this.selector);
                    var scrollTop = src$public$vendor$metal$position$src$position$$default.getScrollTop(this.scrollElement);
                    for (var i = 0; i < links.length; ++i) {
                        var link = links[i];
                        if (link.hash && link.hash.length > 1) {
                            var element = document.getElementById(link.hash.substring(1));
                            if (element) {
                                var region = src$public$vendor$metal$position$src$position$$default.getRegion(element);
                                this.regions.push({
                                    link: link,
                                    top: region.top + scrollTop,
                                    bottom: region.bottom + scrollTop
                                });
                            }
                        }
                    }
                    this.sortRegions_();
                }
            },
            sortRegions_: {

                /**
                 * Sorts regions from lower to higher on y-axis.
                 * @protected
                 */

                value: function sortRegions_() {
                    this.regions.sort(function (a, b) {
                        return a.top - b.top;
                    });
                }
            }
        });

        return lib$scripts$Scrollspy$$Scrollspy;
    })(src$public$vendor$metaljs$src$attribute$Attribute$$default);

    lib$scripts$Scrollspy$$Scrollspy.ATTRS = {
        /**
         * Class to be used as active class.
         * @attribute activeClass
         * @type {string}
         */
        activeClass: {
            validator: src$public$vendor$metaljs$src$core$$default.isString,
            value: "active"
        },

        /**
         * Function that receives the matching element as argument and return
         * itself. Relevant when the `activeClass` must be applied to a different
         * element, e.g. a parentNode.
         * @type {function}
         * @default core.identityFunction
         */
        resolveElement: {
            validator: src$public$vendor$metaljs$src$core$$default.isFunction,
            value: src$public$vendor$metaljs$src$core$$default.identityFunction
        },

        /**
         * The scrollElement element to be used as scrollElement area for affix. The scrollElement is
         * where the scroll event is listened from.
         * @type {Element|Window}
         */
        scrollElement: {
            setter: src$public$vendor$metaljs$src$dom$dom$$default.toElement,
            value: document
        },

        /**
         * Defines the offset that triggers scrollspy.
         * @type {Number}
         * @default 0
         */
        offset: {
            validator: src$public$vendor$metaljs$src$core$$default.isNumber,
            value: 0
        },

        /**
         * Element to be used as alignment reference of affix.
         * @type {Element}
         */
        element: {
            setter: src$public$vendor$metaljs$src$dom$dom$$default.toElement
        },

        /**
         * Selector to query elements inside `element` to be activated.
         * @type {Element}
         * @default 'a'
         */
        selector: {
            validator: src$public$vendor$metaljs$src$core$$default.isString,
            value: "a"
        }
    };

    var lib$scripts$Scrollspy$$default = lib$scripts$Scrollspy$$Scrollspy;
    var lib$scripts$Tooltip$soy$$Templates = src$public$vendor$metaljs$src$component$ComponentRegistry$$default.Templates;
    // This file was automatically generated from Tooltip.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Templates.Tooltip.
     * @hassoydeltemplate {Tooltip}
     * @hassoydelcall {Tooltip}
     */

    if (typeof lib$scripts$Tooltip$soy$$Templates.Tooltip == "undefined") {
        lib$scripts$Tooltip$soy$$Templates.Tooltip = {};
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Tooltip$soy$$Templates.Tooltip.content = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.content));
    };
    if (goog.DEBUG) {
        lib$scripts$Tooltip$soy$$Templates.Tooltip.content.soyTemplateName = "Templates.Tooltip.content";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s146_8d49094e = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("Tooltip"), "element", true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + soy.$$getDelegateFn(soy.$$getDelTemplateId("Tooltip"), "content", true)(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s146_8d49094e.soyTemplateName = "Templates.Tooltip.__deltemplate_s146_8d49094e";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Tooltip"), "", 0, lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s146_8d49094e);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s152_5eaa83f8 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$Tooltip$soy$$Templates.Tooltip.content(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s152_5eaa83f8.soyTemplateName = "Templates.Tooltip.__deltemplate_s152_5eaa83f8";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Tooltip"), "content", 0, lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s152_5eaa83f8);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s154_71828d2a = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "\" class=\"tooltip component" + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? " " + opt_data.elementClasses : "") + "\" data-component=\"\">" + soy.$$escapeHtml(opt_data.elementContent) + "</div>");
    };
    if (goog.DEBUG) {
        lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s154_71828d2a.soyTemplateName = "Templates.Tooltip.__deltemplate_s154_71828d2a";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("Tooltip"), "element", 0, lib$scripts$Tooltip$soy$$Templates.Tooltip.__deltemplate_s154_71828d2a);

    lib$scripts$Tooltip$soy$$Templates.Tooltip.content.params = ["content"];
    "use strict";

    /**
     * Tooltip component.
     */

    var lib$scripts$Tooltip$$Tooltip = (function (_lib$scripts$Component$$default3) {
        /**
         * @inheritDoc
         */

        function lib$scripts$Tooltip$$Tooltip(opt_config) {
            _classCallCheck(this, lib$scripts$Tooltip$$Tooltip);

            _get(Object.getPrototypeOf(lib$scripts$Tooltip$$Tooltip.prototype), "constructor", this).call(this, opt_config);

            this.eventsHandler_ = new src$public$vendor$metaljs$src$events$EventHandler$$default();
        }

        _inherits(lib$scripts$Tooltip$$Tooltip, _lib$scripts$Component$$default3);

        _createClass(lib$scripts$Tooltip$$Tooltip, {
            attached: {

                /**
                 * @inheritDoc
                 */

                value: function attached() {
                    this.align();
                    this.syncEvents(this.events);
                }
            },
            detached: {

                /**
                 * @inheritDoc
                 */

                value: function detached() {
                    this.eventsHandler_.removeAllListeners();
                }
            },
            align: {

                /**
                 * Aligns the tooltip with the best region around alignElement. The best
                 * region is defined by clockwise rotation starting from the specified
                 * `position`. The element is always aligned in the middle of alignElement
                 * axis.
                 * @param {Element=} opt_alignElement Optional element to align with.
                 */

                value: function align(opt_alignElement) {
                    this.syncAlignElement(opt_alignElement || this.alignElement);
                }
            },
            callAsync_: {

                /**
                 * @param {Function} fn
                 * @param {number} delay
                 * @private
                 */

                value: function callAsync_(fn, delay) {
                    clearTimeout(this.delay_);
                    this.delay_ = setTimeout(fn.bind(this), delay);
                }
            },
            handleHide: {

                /**
                 * Handles hide event triggered by `events`.
                 * @param {Event} event
                 * @protected
                 */

                value: function handleHide(event) {
                    var interactingWithDifferentTarget = event.delegateTarget && event.delegateTarget !== this.alignElement;
                    this.callAsync_(function () {
                        if (this.locked_) {
                            return;
                        }
                        if (interactingWithDifferentTarget) {
                            this.alignElement = event.delegateTarget;
                        } else {
                            this.visible = false;
                        }
                    }, this.delay[1]);
                }
            },
            handleShow: {

                /**
                 * Handles show event triggered by `events`.
                 * @param {Event} event
                 * @protected
                 */

                value: function handleShow(event) {
                    this.callAsync_(function () {
                        this.alignElement = event.delegateTarget;
                        this.visible = true;
                    }, this.delay[0]);
                }
            },
            handleToggle: {

                /**
                 * Handles toggle event triggered by `events`.
                 * @param {Event} event
                 * @protected
                 */

                value: function handleToggle(event) {
                    this.visible ? this.handleHide(event) : this.handleShow(event);
                }
            },
            lock: {

                /**
                 * Locks tooltip visibility.
                 * @param {Event} event
                 */

                value: function lock() {
                    this.locked_ = true;
                }
            },
            unlock: {

                /**
                 * Unlocks tooltip visibility.
                 * @param {Event} event
                 */

                value: function unlock(event) {
                    this.locked_ = false;
                    this.handleHide(event);
                }
            },
            syncAlignElement: {

                /**
                 * @inheritDoc
                 */

                value: function syncAlignElement(alignElement) {
                    if (this.inDocument && alignElement) {
                        lib$scripts$Tooltip$$Tooltip.Position.align(this.element, alignElement, this.position);
                    }
                }
            },
            syncContent: {

                /**
                 * @inheritDoc
                 */

                value: function syncContent(content) {
                    if (this.inDocument) {
                        src$public$vendor$metaljs$src$dom$dom$$default.removeChildren(this.element);
                        src$public$vendor$metaljs$src$dom$dom$$default.append(this.element, content);
                    }
                }
            },
            syncSelector: {

                /**
                 * @inheritDoc
                 */

                value: function syncSelector() {
                    this.syncEvents(this.events);
                }
            },
            syncEvents: {

                /**
                 * @inheritDoc
                 */

                value: function syncEvents(events) {
                    if (!this.inDocument) {
                        return;
                    }
                    this.eventsHandler_.removeAllListeners();
                    var selector = this.selector;
                    if (!selector) {
                        return;
                    }

                    this.eventsHandler_.add(this.on("mouseenter", this.lock), this.on("mouseleave", this.unlock));

                    if (events[0] === events[1]) {
                        this.eventsHandler_.add(src$public$vendor$metaljs$src$dom$dom$$default.delegate(document, events[0], selector, this.handleToggle.bind(this)));
                    } else {
                        this.eventsHandler_.add(src$public$vendor$metaljs$src$dom$dom$$default.delegate(document, events[0], selector, this.handleShow.bind(this)), src$public$vendor$metaljs$src$dom$dom$$default.delegate(document, events[1], selector, this.handleHide.bind(this)));
                    }
                }
            },
            syncVisible: {

                /**
                 * @inheritDoc
                 */

                value: function syncVisible(visible) {
                    _get(Object.getPrototypeOf(lib$scripts$Tooltip$$Tooltip.prototype), "syncVisible", this).call(this, visible);
                    this.align();
                }
            }
        });

        return lib$scripts$Tooltip$$Tooltip;
    })(lib$scripts$Component$$default);

    /**
     * @inheritDoc
     * @see `Position` class.
     * @static
     */
    lib$scripts$Tooltip$$Tooltip.Position = lib$scripts$Position$$default;

    /**
     * Default tooltip elementClasses.
     * @default tooltip
     * @type {String}
     * @static
     */
    lib$scripts$Tooltip$$Tooltip.ELEMENT_CLASSES = "tooltip";

    /**
     * Tooltip attrbutes definition.
     * @type {Object}
     * @static
     */
    lib$scripts$Tooltip$$Tooltip.ATTRS = {
        /**
         * Element to align tooltip with.
         * @type {Element}
         */
        alignElement: {
            setter: src$public$vendor$metaljs$src$dom$dom$$default.toElement
        },

        /**
         * Delay showing and hiding the tooltip (ms).
         * @type {!Array.<number>}
         * @default [ 500, 250 ]
         */
        delay: {
            validator: Array.isArray,
            value: [500, 250]
        },

        /**
         * Trigger events used to bind handlers to show and hide tooltip.
         * @type {!Array.<string>}
         * @default ['mouseenter', 'mouseleave']
         */
        events: {
            validator: Array.isArray,
            value: ["mouseenter", "mouseleave"]
        },

        /**
         * If a selector is provided, tooltip objects will be delegated to the
         * specified targets by setting the `alignElement`.
         * @type {?string}
         */
        selector: {
            validator: src$public$vendor$metaljs$src$core$$default.isString
        },

        /**
         * Content to be placed inside tooltip.
         * @type {String}
         */
        content: {
            validator: src$public$vendor$metaljs$src$core$$default.isString
        },

        /**
         * The position to try alignment. If not possible the best position will be
         * found.
         * @type {Position.Top|Position.Right|Position.Bottom|Position.Left}
         * @default Position.Bottom
         */
        position: {
            validator: lib$scripts$Tooltip$$Tooltip.Position.isValidPosition,
            value: lib$scripts$Tooltip$$Tooltip.Position.Bottom
        }
    };

    src$public$vendor$metaljs$src$component$ComponentRegistry$$default.register("Tooltip", lib$scripts$Tooltip$$Tooltip);

    var lib$scripts$Tooltip$$default = lib$scripts$Tooltip$$Tooltip;
    var lib$scripts$TooltipMenu$soy$$Templates = src$public$vendor$metaljs$src$component$ComponentRegistry$$default.Templates;
    // This file was automatically generated from TooltipMenu.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Templates.TooltipMenu.
     * @hassoydeltemplate {TooltipMenu}
     * @hassoydeltemplate {TooltipMenu.items}
     * @hassoydelcall {TooltipMenu}
     * @hassoydelcall {TooltipMenu.items}
     */

    if (typeof lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu == "undefined") {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu = {};
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.content = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("TooltipMenu.items"), "", true)(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.content.soyTemplateName = "Templates.TooltipMenu.content";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.items = function (opt_data, opt_ignored, opt_ijData) {
        var output = "";
        var itemList166 = opt_data.content;
        var itemListLen166 = itemList166.length;
        for (var itemIndex166 = 0; itemIndex166 < itemListLen166; itemIndex166++) {
            var itemData166 = itemList166[itemIndex166];
            output += "<li class=\"tooltip-menu-item\"><a class=\"tooltip-menu-link\" href=\"" + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(itemData166.href ? itemData166.href : "#")) + "\">" + soy.$$escapeHtml(itemData166.content) + "</a></li>";
        }
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
    };
    if (goog.DEBUG) {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.items.soyTemplateName = "Templates.TooltipMenu.items";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s173_cfc546d2 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<nav id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "\" class=\"tooltip-menu " + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : "") + "\" data-component>" + soy.$$escapeHtml(opt_data.elementContent) + "</nav>");
    };
    if (goog.DEBUG) {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s173_cfc546d2.soyTemplateName = "Templates.TooltipMenu.__deltemplate_s173_cfc546d2";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TooltipMenu"), "element", 0, lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s173_cfc546d2);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s181_c0ab3df3 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<ul id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-items\" class=\"tooltip-menu-list\">" + soy.$$escapeHtml(opt_data.elementContent) + "</ul>");
    };
    if (goog.DEBUG) {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s181_c0ab3df3.soyTemplateName = "Templates.TooltipMenu.__deltemplate_s181_c0ab3df3";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TooltipMenu.items"), "element", 0, lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s181_c0ab3df3);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s187_8f8c631d = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("TooltipMenu"), "element", true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + soy.$$getDelegateFn(soy.$$getDelTemplateId("TooltipMenu"), "content", true)(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s187_8f8c631d.soyTemplateName = "Templates.TooltipMenu.__deltemplate_s187_8f8c631d";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TooltipMenu"), "", 0, lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s187_8f8c631d);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s193_f618b41e = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.content(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s193_f618b41e.soyTemplateName = "Templates.TooltipMenu.__deltemplate_s193_f618b41e";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TooltipMenu"), "content", 0, lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s193_f618b41e);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s195_8278e063 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("TooltipMenu.items"), "element", true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (!opt_ijData.skipSurfaceContents ? soy.$$getDelegateFn(soy.$$getDelTemplateId("TooltipMenu.items"), "content", true)(opt_data, null, opt_ijData) : "")), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s195_8278e063.soyTemplateName = "Templates.TooltipMenu.__deltemplate_s195_8278e063";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TooltipMenu.items"), "", 0, lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s195_8278e063);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s202_d55fbf7b = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.items(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s202_d55fbf7b.soyTemplateName = "Templates.TooltipMenu.__deltemplate_s202_d55fbf7b";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TooltipMenu.items"), "content", 0, lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.__deltemplate_s202_d55fbf7b);

    lib$scripts$TooltipMenu$soy$$Templates.TooltipMenu.items.params = ["content"];
    "use strict";

    /**
     * TooltipMenu component.
     */

    var lib$scripts$TooltipMenu$$TooltipMenu = (function (_lib$scripts$Tooltip$$default) {
        /**
         * @inheritDoc
         */

        function lib$scripts$TooltipMenu$$TooltipMenu(opt_config) {
            _classCallCheck(this, lib$scripts$TooltipMenu$$TooltipMenu);

            _get(Object.getPrototypeOf(lib$scripts$TooltipMenu$$TooltipMenu.prototype), "constructor", this).call(this, opt_config);
        }

        _inherits(lib$scripts$TooltipMenu$$TooltipMenu, _lib$scripts$Tooltip$$default);

        _createClass(lib$scripts$TooltipMenu$$TooltipMenu, {
            syncContent: {

                /**
                 * @inheritDoc
                 */

                value: function syncContent() {}
            }
        });

        return lib$scripts$TooltipMenu$$TooltipMenu;
    })(lib$scripts$Tooltip$$default);

    /**
     * Default tooltip elementClasses.
     * @default tooltip
     * @type {String}
     * @static
     */
    lib$scripts$TooltipMenu$$TooltipMenu.ELEMENT_CLASSES_MERGED = "tooltip-menu component";

    /**
     * TooltipMenu attrbutes definition.
     * @type {Object}
     * @static
     */
    lib$scripts$TooltipMenu$$TooltipMenu.ATTRS = {
        /**
         * Delay showing and hiding the menu (ms).
         * @type {!Array.<number>}
         * @default [ 0, 0 ]
         */
        delay: {
            validator: Array.isArray,
            value: [0, 0]
        },

        /**
         * Trigger events used to bind handlers to show and hide tooltip.
         * @type {!Array.<string>}
         * @default ['click', 'mouseout']
         */
        events: {
            validator: Array.isArray,
            value: ["click", "click"]
        },

        /**
         * Items to be placed inside tooltip menu. Each item must contain at least a
         * label key.
         * @type {!Array.<!object>}
         */
        content: {
            validator: Array.isArray,
            valueFn: function valueFn() {
                return [];
            }
        }
    };

    src$public$vendor$metaljs$src$component$ComponentRegistry$$default.register("TooltipMenu", lib$scripts$TooltipMenu$$TooltipMenu);

    var lib$scripts$TooltipMenu$$default = lib$scripts$TooltipMenu$$TooltipMenu;
    var lib$scripts$TreeView$soy$$Templates = src$public$vendor$metaljs$src$component$ComponentRegistry$$default.Templates;
    // This file was automatically generated from TreeView.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Templates.TreeView.
     * @hassoydeltemplate {TreeView}
     * @hassoydeltemplate {TreeView.nodes}
     * @hassoydelcall {TreeView}
     * @hassoydelcall {TreeView.nodes}
     */

    if (typeof lib$scripts$TreeView$soy$$Templates.TreeView == "undefined") {
        lib$scripts$TreeView$soy$$Templates.TreeView = {};
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TreeView$soy$$Templates.TreeView.content = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("TreeView.nodes"), "", true)(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TreeView$soy$$Templates.TreeView.content.soyTemplateName = "Templates.TreeView.content";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TreeView$soy$$Templates.TreeView.nodes = function (opt_data, opt_ignored, opt_ijData) {
        var output = "<ul class=\"treeview-nodes\">";
        var nodeList209 = opt_data.nodes;
        var nodeListLen209 = nodeList209.length;
        for (var nodeIndex209 = 0; nodeIndex209 < nodeListLen209; nodeIndex209++) {
            var nodeData209 = nodeList209[nodeIndex209];
            var nodeId__soy210 = (opt_data.parentNodeId ? opt_data.parentNodeId : opt_data.id) + "-" + nodeIndex209;
            var expanded__soy211 = nodeData209.children && nodeData209.expanded;
            output += "<li id=\"" + soy.$$escapeHtmlAttribute(nodeId__soy210) + "\" class=\"treeview-node " + soy.$$escapeHtmlAttribute(expanded__soy211 ? "expanded" : "") + " " + soy.$$escapeHtmlAttribute(nodeData209.children ? "hasChildren" : "") + "\"><div class=\"treeview-node-main u-cf\" data-onclick=\"handleNodeClicked_\"><div class=\"treeview-node-toggler\"></div><span class=\"treeview-node-name\">" + soy.$$escapeHtml(nodeData209.name) + "</span></div>" + (nodeData209.children ? lib$scripts$TreeView$soy$$Templates.TreeView.nodes({ id: opt_data.id, nodes: nodeData209.children, parentNodeId: nodeId__soy210 }, null, opt_ijData) : "") + "</li>";
        }
        output += "</ul>";
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
    };
    if (goog.DEBUG) {
        lib$scripts$TreeView$soy$$Templates.TreeView.nodes.soyTemplateName = "Templates.TreeView.nodes";
    }

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s230_13da0f6e = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("TreeView"), "element", true)({ elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + soy.$$getDelegateFn(soy.$$getDelTemplateId("TreeView"), "content", true)(opt_data, null, opt_ijData)), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s230_13da0f6e.soyTemplateName = "Templates.TreeView.__deltemplate_s230_13da0f6e";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TreeView"), "", 0, lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s230_13da0f6e);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s236_e5ca7691 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$TreeView$soy$$Templates.TreeView.content(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s236_e5ca7691.soyTemplateName = "Templates.TreeView.__deltemplate_s236_e5ca7691";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TreeView"), "content", 0, lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s236_e5ca7691);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s238_38810b2c = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "\" class=\"treeview component" + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? " " + opt_data.elementClasses : "") + "\" data-component=\"\">" + soy.$$escapeHtml(opt_data.elementContent) + "</div>");
    };
    if (goog.DEBUG) {
        lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s238_38810b2c.soyTemplateName = "Templates.TreeView.__deltemplate_s238_38810b2c";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TreeView"), "element", 0, lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s238_38810b2c);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s246_6f4f2112 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml("<div id=\"" + soy.$$escapeHtmlAttribute(opt_data.id) + "-nodes\">" + soy.$$escapeHtml(opt_data.elementContent) + "</div>");
    };
    if (goog.DEBUG) {
        lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s246_6f4f2112.soyTemplateName = "Templates.TreeView.__deltemplate_s246_6f4f2112";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TreeView.nodes"), "element", 0, lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s246_6f4f2112);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s252_c801199b = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId("TreeView.nodes"), "element", true)({ elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks("" + (!opt_ijData.skipSurfaceContents ? soy.$$getDelegateFn(soy.$$getDelTemplateId("TreeView.nodes"), "content", true)(opt_data, null, opt_ijData) : "")), id: opt_data.id }, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s252_c801199b.soyTemplateName = "Templates.TreeView.__deltemplate_s252_c801199b";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TreeView.nodes"), "", 0, lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s252_c801199b);

    /**
     * @param {Object.<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object.<string, *>=} opt_ijData
     * @return {!soydata.SanitizedHtml}
     * @suppress {checkTypes}
     */
    lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s259_96976d66 = function (opt_data, opt_ignored, opt_ijData) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(lib$scripts$TreeView$soy$$Templates.TreeView.nodes(opt_data, null, opt_ijData));
    };
    if (goog.DEBUG) {
        lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s259_96976d66.soyTemplateName = "Templates.TreeView.__deltemplate_s259_96976d66";
    }
    soy.$$registerDelegateFn(soy.$$getDelTemplateId("TreeView.nodes"), "content", 0, lib$scripts$TreeView$soy$$Templates.TreeView.__deltemplate_s259_96976d66);

    lib$scripts$TreeView$soy$$Templates.TreeView.nodes.params = ["id", "nodes"];
    "use strict";

    /**
     * TreeView component.
     */

    var lib$scripts$TreeView$$TreeView = (function (_lib$scripts$Component$$default4) {
        function lib$scripts$TreeView$$TreeView(opt_config) {
            _classCallCheck(this, lib$scripts$TreeView$$TreeView);

            _get(Object.getPrototypeOf(lib$scripts$TreeView$$TreeView.prototype), "constructor", this).call(this, opt_config);
        }

        _inherits(lib$scripts$TreeView$$TreeView, _lib$scripts$Component$$default4);

        _createClass(lib$scripts$TreeView$$TreeView, {
            attached: {

                /**
                 * Called after this component has been attached to the dom.
                 */

                value: function attached() {
                    this.on("nodesChanged", this.onNodesChanged_.bind(this));
                }
            },
            getNodeObj: {

                /**
                 * Gets the node object from the nodes attribute that is located at the given
                 * index path.
                 * @param {!Array<number>} path An array of indexes indicating where the searched
                 *   node is located inside the nodes attribute.
                 * @return {!Object}
                 */

                value: function getNodeObj(path) {
                    var obj = this.nodes[path[0]];
                    for (var i = 1; i < path.length; i++) {
                        obj = obj.children[path[i]];
                    }
                    return obj;
                }
            },
            getNodeObjFromId_: {

                /**
                 * Gets the node object that the given element id represents from the nodes
                 * attribute
                 * @param {string} id
                 * @return {!Object}
                 */

                value: function getNodeObjFromId_(id) {
                    var path = id.substr(this.id.length + 1).split("-");
                    return this.getNodeObj(path);
                }
            },
            getSurfaceContent_: {

                /**
                 * Overrides SoyComponent's original method, skipping it when the flag for
                 * ignoring surface updates is set.
                 * @param {string} surfaceId The surface id.
                 * @return {Object|string} The content to be rendered.
                 * @protected
                 * @override
                 */

                value: function getSurfaceContent_(surfaceId) {
                    if (!this.ignoreSurfaceUpdate_) {
                        return _get(Object.getPrototypeOf(lib$scripts$TreeView$$TreeView.prototype), "getSurfaceContent_", this).call(this, surfaceId);
                    }
                    this.ignoreSurfaceUpdate_ = false;
                }
            },
            handleNodeClicked_: {

                /**
                 * This is called when one of this tree view's nodes is clicked.
                 * @param {Event} event
                 * @protected
                 */

                value: function handleNodeClicked_(event) {
                    var node = event.delegateTarget.parentNode;
                    var nodeObj = this.getNodeObjFromId_(node.id);
                    nodeObj.expanded = !nodeObj.expanded;
                    if (nodeObj.expanded) {
                        src$public$vendor$metaljs$src$dom$dom$$default.addClasses(node, ["expanded"]);
                    } else {
                        src$public$vendor$metaljs$src$dom$dom$$default.removeClasses(node, ["expanded"]);
                    }

                    this.nodes = this.nodes;
                    this.ignoreSurfaceUpdate_ = true;
                }
            },
            onNodesChanged_: {

                /**
                 * Fired when the `nodes` attribute changes. Make sure that any other
                 * updates to the `nodes` attribute made after ignoreSurfaceUpdate_ is
                 * set to true, cause surfaces to update again.
                 * @return {[type]} [description]
                 */

                value: function onNodesChanged_() {
                    this.ignoreSurfaceUpdate_ = false;
                }
            }
        });

        return lib$scripts$TreeView$$TreeView;
    })(lib$scripts$Component$$default);

    /**
     * Default tree view elementClasses.
     * @default treeView
     * @type {String}
     * @static
     */
    lib$scripts$TreeView$$TreeView.ELEMENT_CLASSES = "treeView";

    /**
     * TreeView attributes definition.
     * @type {Object}
     * @static
     */
    lib$scripts$TreeView$$TreeView.ATTRS = {
        /**
         * This tree view's nodes. Each node should have a name, and can optionally
         * have nested children nodes. It should also indicate if its children are
         * expanded or not.
         * @type {Array<!{children: Array, expanded: boolean?, name: string}>}
         * @default []
         */
        nodes: {
            validator: Array.isArray,
            valueFn: function valueFn() {
                return [];
            }
        }
    };

    src$public$vendor$metaljs$src$component$ComponentRegistry$$default.register("TreeView", lib$scripts$TreeView$$TreeView);

    var lib$scripts$TreeView$$default = lib$scripts$TreeView$$TreeView;
    this.ui = this.ui || {};
    this.ui.Affix = lib$scripts$Affix$$Affix;
    this.ui.Component = lib$scripts$Component$$Component;
    this.ui.DragDropUpload = lib$scripts$DragDropUpload$$DragDropUpload;
    this.ui.Features = lib$scripts$Features$$Features;
    this.ui.List = lib$scripts$List$$List;
    this.ui.Modal = lib$scripts$Modal$$Modal;
    this.ui.Position = lib$scripts$Position$$Position;
    this.ui.Scrollspy = lib$scripts$Scrollspy$$Scrollspy;
    this.ui.Tooltip = lib$scripts$Tooltip$$Tooltip;
    this.ui.TooltipMenu = lib$scripts$TooltipMenu$$TooltipMenu;
    this.ui.TreeView = lib$scripts$TreeView$$TreeView;
    this.ui.core = src$public$vendor$metaljs$src$core$$core;
    this.ui.dom = src$public$vendor$metaljs$src$dom$dom$$dom;
    this.ui.position = src$public$vendor$metal$position$src$position$$position;
    this.ui.Attribute = src$public$vendor$metaljs$src$attribute$Attribute$$Attribute;
    this.ui.EventEmitter = src$public$vendor$metaljs$src$events$EventEmitter$$EventEmitter;
    this.ui.EventEmitterProxy = src$public$vendor$metaljs$src$events$EventEmitterProxy$$EventEmitterProxy;
    this.ui.SoyComponent = src$public$vendor$metaljs$src$soy$SoyComponent$$SoyComponent;
    this.ui.Component = src$public$vendor$metaljs$src$component$Component$$Component;
    this.ui.ComponentRegistry = src$public$vendor$metaljs$src$component$ComponentRegistry$$ComponentRegistry;
    this.ui.EventHandler = src$public$vendor$metaljs$src$events$EventHandler$$EventHandler;
    this.ui.object = src$public$vendor$metaljs$src$object$object$$object;
    this.ui.DomEventHandle = src$public$vendor$metaljs$src$events$DomEventHandle$$DomEventHandle;
    this.ui.math = src$public$vendor$metal$position$src$math$$math;
    this.ui.array = src$public$vendor$metaljs$src$array$array$$array;
    this.ui.async = src$public$vendor$metaljs$src$async$async$$async;
    this.ui.Disposable = src$public$vendor$metaljs$src$disposable$Disposable$$Disposable;
    this.ui.EventHandle = src$public$vendor$metaljs$src$events$EventHandle$$EventHandle;
    this.ui.ComponentCollector = src$public$vendor$metaljs$src$component$ComponentCollector$$ComponentCollector;
    this.ui.EventsCollector = src$public$vendor$metaljs$src$component$EventsCollector$$EventsCollector;
    this.ui.features = src$public$vendor$metaljs$src$dom$features$$features;
    this.ui.html = src$public$vendor$metaljs$src$html$html$$html;
    this.ui.string = src$public$vendor$metaljs$src$string$string$$string;
}).call(this);
}());
//# sourceMappingURL=main.js.map
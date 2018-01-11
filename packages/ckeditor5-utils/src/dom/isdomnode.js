/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/dom/isdomnode
 */

/**
 * Checks if the object is a native DOM Node.
 *
 * @param {*} obj
 * @returns {Boolean}
 */
export default function isDomNode( obj ) {
	if ( obj ) {
		if ( obj.defaultView ) {
			return obj instanceof obj.defaultView.Document;
		} else if ( obj.ownerDocument && obj.ownerDocument.defaultView ) {
			return obj instanceof obj.ownerDocument.defaultView.Node;
		}
	}

	return false;
}

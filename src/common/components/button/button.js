/**
* @fileoverview Defines a common button for focus.
* @author Obrymec - obrymecsprinces@gmail.com
* @project GitLab - https://www.google.com
* @supported DESKTOP, MOBILE
* @created 2023-08-03
* @updated 2023-08-04
* @file button.js
* @version 0.0.1
* @type {Button}
*/

// Custom dependencies.
import {buildIcon} from "../icon_logo_image/icon_logo_image.js";
import {clearStr} from "../../utilities/string/string.js";

/**
 * @description Builds a native button.
 * @param {{
 *  withIcon: boolean=,
 *  className: String=,
 *  iconType: String,
 *  idName: String=,
 *  title: String=,
 *  text: String
 * }} data The button data configs.
 *  It supports the following keys:
 *  - String text: The text to be
 *    displayed on the button.
 *  - boolean= withIcon: Whether
 *    you want to add an icon to
 *    the right.
 *  - String iconType: The icon
 *    type to be displayed (If
 *    and only if `withIcon` is
 *    set to `true`).
 *  - String= className: The button
 *    class name.
 *  - String= idName: The button
 *    id name.
 *  - String= title: The button's
 *    title text.
 * @function buildButton
 * @public
 * @returns {String} String
 */
function buildButton ({
  withIcon = false,
  className = '',
  idName = '',
  title = '',
  iconType,
  text
}) {
  // Builds the target button.
  return (`
    <button
      class = "gen-btn ${className}"
      title = "${title}"
      id = "${idName}"
    >
      <span>
        ${clearStr ({
          input: text
        })}
      </span>
      ${(
        withIcon
        ? buildIcon (iconType)
        : ''
      )}
    </button>
  `);
}

/** 
 * @description Exports all
 *  public features.
 * @exports *
 */
export {buildButton};
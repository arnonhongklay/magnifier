/*
 * Globalize Culture mn-Mong
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */


(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "mn-Mong", "default", {
	name: "mn-Mong",
	englishName: "Mongolian (Traditional Mongolian)",
	nativeName: "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ",
	language: "mn-Mong",
	numberFormat: {
		groupSizes: [3,0],
		"NaN": "ᠲᠤᠭᠠᠠ ᠪᠤᠰᠤ",
		negativeInfinity: "ᠰᠦᠬᠡᠷᠬᠦ ᠬᠢᠵᠠᠭᠠᠷᠭᠦᠢ ᠶᠡᠬᠡ",
		positiveInfinity: "ᠡᠶ᠋ᠡᠷᠬᠦ ᠬᠢᠵᠠᠭᠠᠷᠭᠦᠢ ᠶᠠᠬᠡ",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3,0]
		},
		currency: {
			pattern: ["$-n","$n"],
			groupSizes: [3,0],
			symbol: "¥"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠡᠳᠦᠷ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠨᠢᠭᠡᠨ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠬᠣᠶᠠᠷ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠭᠤᠷᠪᠠᠨ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠳᠥᠷᠪᠡᠨ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠲᠠᠪᠤᠨ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ"],
				namesAbbr: ["ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠡᠳᠦᠷ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠨᠢᠭᠡᠨ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠬᠣᠶᠠᠷ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠭᠤᠷᠪᠠᠨ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠳᠥᠷᠪᠡᠨ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠲᠠᠪᠤᠨ","ᠭᠠᠷᠠᠭ\u202fᠤᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ"],
				namesShort: ["ᠡ\u200d","ᠨᠢ\u200d","ᠬᠣ\u200d","ᠭᠤ\u200d","ᠳᠥ\u200d","ᠲᠠ\u200d","ᠵᠢ\u200d"]
			},
			months: {
				names: ["ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",""],
				namesAbbr: ["ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"ᠣᠨ ᠲᠣᠭᠠᠯᠠᠯ ᠤᠨ","start":null,"offset":0}],
			patterns: {
				d: "yyyy/M/d",
				D: "yyyy'ᠣᠨ ᠤ᠋' M'ᠰᠠᠷ᠎ᠠ \u202fᠢᠢᠨ 'd' ᠤ᠋ ᠡᠳᠦᠷ'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "yyyy'ᠣᠨ ᠤ᠋' M'ᠰᠠᠷ᠎ᠠ \u202fᠢᠢᠨ 'd' ᠤ᠋ ᠡᠳᠦᠷ' H:mm",
				F: "yyyy'ᠣᠨ ᠤ᠋' M'ᠰᠠᠷ᠎ᠠ \u202fᠢᠢᠨ 'd' ᠤ᠋ ᠡᠳᠦᠷ' H:mm:ss",
				M: "M'ᠰᠠᠷ᠎ᠠ' d'ᠡᠳᠦᠷ'",
				Y: "yyyy'ᠣᠨ' M'ᠰᠠᠷ᠎ᠠ'"
			}
		}
	}
});

}( this ));

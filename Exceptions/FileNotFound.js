"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Exceptions == 'undefined') Runtime.Exceptions = {};
Runtime.Exceptions.FileNotFound = function(name, object, code, prev)
{
	if (object == undefined) object = "File";
	if (code == undefined) code = -5;
	if (prev == undefined) prev = null;
	Runtime.Exceptions.RuntimeException.call(this, Runtime.rtl.getContext().translate("Runtime", "%object% '%name%' not found", Runtime.Dict.from({"name":name,"object":object})), code, prev);
};
Runtime.Exceptions.FileNotFound.prototype = Object.create(Runtime.Exceptions.RuntimeException.prototype);
Runtime.Exceptions.FileNotFound.prototype.constructor = Runtime.Exceptions.FileNotFound;
Object.assign(Runtime.Exceptions.FileNotFound.prototype,
{
	getClassName: function()
	{
		return "Runtime.Exceptions.FileNotFound";
	},
});
Object.assign(Runtime.Exceptions.FileNotFound, Runtime.Exceptions.RuntimeException);
Object.assign(Runtime.Exceptions.FileNotFound,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Exceptions";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Exceptions.FileNotFound";
	},
	getParentClassName: function()
	{
		return "Runtime.Exceptions.RuntimeException";
	},
	getClassInfo: function()
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		return Dict.from({
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		return null;
	},
	getMethodsList: function(f)
	{
		if (f==undefined) f=0;
		var a = [];
		if ((f&4)==4) a=[
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Exceptions.FileNotFound);
window["Runtime.Exceptions.FileNotFound"] = Runtime.Exceptions.FileNotFound;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Exceptions.FileNotFound;
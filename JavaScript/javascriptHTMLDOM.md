# The HTML DOM (Document Object Model)
**The HTML DOM is a standard for how to get, change, add, or delete HTML elements.**

# HTML DOM Methods
HTML DOM methods are **actions** you can perform (on HTML Elements).

HTML DOM properties are **values** (of HTML Elements) that you can set or change.

## The getElementById Method
to access an HTML element by using the `id` of the element.

## The innerHTML Property
to get the content of an element 

is useful for getting or replacing the content of HTML elements.

# HTML DOM Document
The document object represents your web page.

## Finding HTML Elements
|Method|Description|
|:---:|:---:|
|document.getElementById(***id***)|Find an element by element id|
|document.getElementsByTagName(***name***)|Find elements by tag name|
|document.getElementsByClassName(***name***)|Find elements by class name|

## Changing HTML Elements
|Property|Description|
|:---:|:---:|
|***element***.innerHTML = ***new html content***|Change the inner HTML of an element|
|***element***.***attribute*** = ***new value***|Change the attribute value of an HTML element|
|***element***.style.***property*** = ***new style***|Change the style of an HTML element|

|Method|Description|
|:---:|:---:|
|***element***.setAttribute(***attribute***, ***value***)|Change the attribute value of an HTML element|

## Adding and Deleting Elements
|Method|Description|
|:---:|:---:|
|document.createElement(***element***)|Create an HTML element|
|document.removeChild(***element***)|Remove an HTML element|
|document.appendChild(***element***)|Add an HTML element|
|document.replaceChild(***new***, ***old***)|
Replace an HTML element|
|document.write(text)|Write into the HTML output stream|

## Adding Events Handlers
|Method|Description|
|:---:|:---:|
|document.getElementById(***id***).onclick = function(){***code***}|Adding event handler code to an onclick event|



element.style.backgroundColor = '#aaa'
element.style.fontSize = '12px'

element.style[anyOtherCssRule] = 'value'

var event = new Event('build');

// Subscribe for event
elem.addEventListener('build', function (e) { ... }, false);

// Trigger event
elem.dispatchEvent(event);
console.log("Telefon: (040) 55555".search(/\([\d]*\)/));
console.log("Telefon: (040) 55555".search(/^\([\d]*\)/));
console.log("(040) 55555".search(/^\([\d]*\)/));
console.log("(040) 55555".search(/^\([\d]*\)$/));
console.log("(040)".search(/^\([\d]*\)$/));
const calculateStylePoints = styleNotes => styleNotes.reduce((a, b) => a + b) - styleNotes.reduce((a, b) => Math.max(a, b)) - styleNotes.reduce((a, b) => Math.min(a, b));



module.exports = calculateStylePoints;

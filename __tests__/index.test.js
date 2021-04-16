const { getSquare } = require('../index');

test('getSquare() function, Get the square footage of a room calculated',function () {
    // Arrange
    const roomLength = 22;
    const roomWidth = 5;
    const roomHeight = 2;

    //Act
    const result = getSquare(roomLength, roomWidth , roomHeight);

    // Assert
    expect(result).toBe(220);
})
module.exports.getPossibleMoves = (xPosition,yPosition) => {
    try{

        const data = moves(xPosition, yPosition)
        return data

    }catch(err) {
        return err
    }
}

function moves(xPosition, yPosition){
    let steps = 1;
    let m = new Map();
    return knightsMoves(xPosition, yPosition, steps, m);
    
}

function knightsMoves(xPos, yPos,steps, m)
{
    let totalMoves = 0;
    let boardSize = 8;
    let positions = [];
   
    if (steps == 0 && !m.has([xPos, yPos])) {
        m[[xPos, yPos]] = 1;
        return 1;
    }
    if (steps > 0) {

        let dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
        let dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

        for (let k = 0; k < boardSize; k++) {
            if ((dx[k] + xPos) >= 0
                && (dx[k] + xPos) <= boardSize - 1
                && (dy[k] + yPos) >= 0
                && (dy[k] + yPos) <= boardSize - 1) {
                    positions.push([dx[k],dy[k]])
                    totalMoves += knightsMoves(dx[k] + xPos, dy[k] + yPos,steps-1,m);

            }
        }
    }
    return {positions, totalMoves};
}

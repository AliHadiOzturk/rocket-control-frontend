export const getDegreeFromDirection = (direction: string): number => {
    switch (direction) {
        case 'N':
            return 0;
        case 'S':
            return 180;
        case 'E':
            return 90;
        case 'W':
            return 270;
        case 'NE':
            return 45;
        case 'NW':
            return 315;
        case 'SE':
            return 135;
        case 'SW':
            return 225;
        default:
            return 0;
    }
}
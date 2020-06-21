import Theme from '../Theme.js';
export default class Clean extends Theme {
    constructor() {
        super('clean', {
            '--highlight-color': '#FF4F59',
            '--background-color': 'white',
            '--main-font-color': 'black'
        }, false);
    }
}

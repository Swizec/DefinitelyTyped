import AtlasManager from './AtlasManager';
import Fill from './Fill';
import RegularShape from './RegularShape';
import Stroke from './Stroke';

export default class CircleStyle extends RegularShape {
    constructor(opt_options?: Options);
    setRadius(radius: number): void;
}
export interface Options {
    fill?: Fill;
    radius: number;
    stroke?: Stroke;
    atlasManager?: AtlasManager;
}

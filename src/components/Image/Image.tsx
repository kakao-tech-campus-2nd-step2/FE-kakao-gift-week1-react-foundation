import React from 'react';

import { ImageProps } from "../../types/PropsType"
import ImageStyle from "./ImageStyle"

const Image = ({
    ratio,
    radius=10,
    imageProps}
: ImageProps) => {
    return(
        <ImageStyle ratio={ratio} radius={radius} {...imageProps}/>
    )
}

export default Image;
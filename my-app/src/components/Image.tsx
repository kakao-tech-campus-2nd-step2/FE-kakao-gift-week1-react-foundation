import React from 'react'
import '../styles/Image.css'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
  ratio?: number | 'auto' | 'square'
  radius?: number | 'circle'
  width?: string
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  ratio,
  radius,
  width,
  ...props
}) => {
  const getRatioStyle = (ratio: ImageProps['ratio']) => {
    if (typeof ratio === 'number') {
      return { aspectRatio: ratio }
    }
    switch (ratio) {
      case 'square':
        return { aspectRatio: '1 / 1' }
      default:
        return {}
    }
  }

  const getRadiusStyle = (radius: ImageProps['radius']) => {
    if (typeof radius === 'number') {
      return { borderRadius: `${radius}px` }
    }
    switch (radius) {
      case 'circle':
        return { borderRadius: '50%' }
      default:
        return {}
    }
  }

  return (
    <div className="image-wrapper" style={{ ...getRatioStyle(ratio), width }}>
      <img
        src={src}
        alt={alt}
        className="image"
        style={{ ...getRadiusStyle(radius) }}
        {...props}
      />
    </div>
  )
}

export default Image

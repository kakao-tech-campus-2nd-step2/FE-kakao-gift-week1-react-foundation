import React from 'react'
import './image.css'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source URL
   */
  src: string
  /**
   * Alternative text for the image
   */
  alt: string
  /**
   * Ratio for the image (e.g., "16/9", "circle", "square")
   */
  ratio?: string
  /**
   * Radius for the image corners
   */
  radius?: number | 'circle'
  /**
   * Title for the image
   */
  title?: string
}

/**
 * Primary UI component for displaying images
 */
export const Image = ({ src, alt, ratio, radius, title, style, ...props }: ImageProps) => {
  let ratioClass = ''
  const customStyle = { ...style }

  if (ratio) {
    if (ratio === 'circle') {
      ratioClass = 'image-ratio-circle'
    } else if (ratio === 'square') {
      ratioClass = 'image-ratio-square'
      customStyle.aspectRatio = '1 / 1'
    } else {
      const [width, height] = ratio.split('/').map(Number)
      if (width && height) {
        ratioClass = 'image-ratio'
        customStyle.aspectRatio = `${width} / ${height}`
      }
    }
  }

  if (radius) {
    if (radius === 'circle') {
      customStyle.borderRadius = '50%'
    } else {
      customStyle.borderRadius = `${radius}px`
    }
  }

  return (
    <div className={['storybook-image-wrapper', ratioClass].join(' ')}>
      <img src={src} alt={alt} title={title} className="storybook-image" style={customStyle} {...props} />
    </div>
  )
}

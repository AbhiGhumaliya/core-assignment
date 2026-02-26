/**
 * MaskIcon — renders a monochrome SVG as a CSS mask, allowing full color control.
 * Works with any single-colour SVG icon from the Figma asset library.
 */
function MaskIcon({ src, color = '#ffffff', size = 20, className = '' }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url(${src})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
      className={className}
    />
  )
}

export default MaskIcon
